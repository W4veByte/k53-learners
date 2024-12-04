"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import Flashcard from "./Flashcard";
import { getQuestions } from "@/lib/questions";
import TestResult from "./TestResult";
import '../app/globals.css'

interface Question {
  question: string;
  imageUrl?: string;
  choices: string[];
  correctAnswer: string;
}

interface TestProps {
  testType: string;
  onBack: () => void;
  customSections?: string[];
  customTimeLimit?: number;
}

export default function Test({
  testType,
  onBack,
  customSections,
  customTimeLimit,
}: TestProps) {
  const [timeLeft, setTimeLeft] = useState((customTimeLimit || 50) * 60);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState(0);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  useEffect(() => {
    if (testType === "MAIN") {
      const allQuestions = [
        ...getQuestions("A").slice(0, 30),
        ...getQuestions("B").slice(0, 30),
        ...getQuestions("C").slice(0, 8),
      ];
      setQuestions(shuffleArray(allQuestions));
    } else if (testType === "CUSTOM" && customSections) {
      const customQuestions = customSections.flatMap((section) =>
        getQuestions(section).slice(0, section === "C" ? 8 : 30)
      );
      setQuestions(shuffleArray(customQuestions));
    } else {
      setQuestions(getQuestions(testType));
    }
  }, [testType, customSections]);

  useEffect(() => {
    if (testType === "MAIN" || testType === "CUSTOM") {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleTestCompletion();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [testType]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCompletedQuestions(completedQuestions + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleTestCompletion();
    }
  };

  const handleTestCompletion = () => {
    setIsTestCompleted(true);
  };

  const progress = (completedQuestions / questions.length) * 100;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (isTestCompleted) {
    return (
      <TestResult
        score={score}
        totalQuestions={questions.length}
        testType={testType}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:py-6 -mt-48 scrollable-mobile">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <Button
          variant="outline"
          onClick={onBack}
          className="font-medium text-base sm:text-lg"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline ml-2">Back</span>
        </Button>
        <div className="text-right">
          <h2 className="text-xl sm:text-2xl font-poppins font-semibold text-card-foreground">
            {testType === "MAIN"
              ? "Main Practice Test"
              : testType === "CUSTOM"
              ? "Custom Test"
              : `Test ${testType}`}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          {(testType === "MAIN" || testType === "CUSTOM") && (
            <p className="text-base sm:text-lg text-muted-foreground">
              Time left: {formatTime(timeLeft)}
            </p>
          )}
        </div>
      </div>
  
      <div className="space-y-4 mb-6 sm:mb-8">
        <Progress value={progress} className="h-2 sm:h-3" />
        <div className="flex justify-between text-sm sm:text-base text-muted-foreground">
          <span>
            Progress: {completedQuestions} / {questions.length}
          </span>
          <span>Score: {score}</span>
        </div>
      </div>
  
      <Flashcard
        question={questions[currentQuestionIndex].question}
        imageUrl={questions[currentQuestionIndex].imageUrl}
        choices={questions[currentQuestionIndex].choices}
        correctAnswer={questions[currentQuestionIndex].correctAnswer}
        onAnswer={handleAnswer}
        onNext={handleNextQuestion}
      />
    </div>
  );
}

function shuffleArray(array: Question[]): Question[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
