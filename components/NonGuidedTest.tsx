"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from 'lucide-react';
import NonGuidedFlashcard from "./NonGuidedFlashcard";
import { getQuestions } from "@/lib/questions";
import NonGuidedTestResult from "./NonGuidedTestResult";
import QuestionIndex from "./QuestionIndex";

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

export default function NonGuidedTest({
  testType,
  onBack,
  customSections,
  customTimeLimit,
}: TestProps) {
  const [timeLeft, setTimeLeft] = useState((customTimeLimit || 50) * 60);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [markedForReview, setMarkedForReview] = useState<boolean[]>([]);
  const [completedQuestions, setCompletedQuestions] = useState(0);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [showQuestionIndex, setShowQuestionIndex] = useState(false);

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
      const sectionQuestions = getQuestions(testType);
      const limitedQuestions = testType === "C" 
        ? sectionQuestions.slice(0, 8) 
        : sectionQuestions.slice(0, 30);
      setQuestions(shuffleArray(limitedQuestions));
    }
  }, [testType, customSections]);

  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(new Array(questions.length).fill(null));
      setMarkedForReview(new Array(questions.length).fill(false));
    }
  }, [questions]);

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

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
    setCompletedQuestions(newAnswers.filter(a => a !== null).length);
  };

  const handleMarkForReview = () => {
    const newMarkedForReview = [...markedForReview];
    newMarkedForReview[currentQuestionIndex] = !newMarkedForReview[currentQuestionIndex];
    setMarkedForReview(newMarkedForReview);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowQuestionIndex(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleTestCompletion = () => {
    setIsTestCompleted(true);
  };

  const getTestResults = () => {
    let testA = { correct: 0, total: 30 };
    let testB = { correct: 0, total: 30 };
    let testC = { correct: 0, total: 8 };

    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        if (index < 30) testA.correct++;
        else if (index < 60) testB.correct++;
        else testC.correct++;
      }
    });

    return { testA, testB, testC };
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
      <NonGuidedTestResult
        results={getTestResults()}
        testType={testType}
        onBack={onBack}
      />
    );
  }

  if (showQuestionIndex) {
    return (
      <QuestionIndex
        questions={questions}
        answers={answers}
        markedForReview={markedForReview}
        onQuestionSelect={(index) => {
          setCurrentQuestionIndex(index);
          setShowQuestionIndex(false);
        }}
        onComplete={handleTestCompletion}
        onBack={() => setShowQuestionIndex(false)}
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
              : testType === "A"
              ? "Rules of the Road"
              : testType === "B"
              ? "Traffic Signs & Markings"
              : "Vehicle Controls"}
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
          <span>
            Marked for review: {markedForReview.filter(Boolean).length}
          </span>
        </div>
      </div>

      <NonGuidedFlashcard
        question={questions[currentQuestionIndex].question}
        imageUrl={questions[currentQuestionIndex].imageUrl}
        choices={questions[currentQuestionIndex].choices}
        selectedAnswer={answers[currentQuestionIndex]}
        onAnswer={handleAnswer}
        onNext={handleNextQuestion}
        onPrevious={handlePreviousQuestion}
        isFirst={currentQuestionIndex === 0}
        isLast={currentQuestionIndex === questions.length - 1}
        isMarkedForReview={markedForReview[currentQuestionIndex]}
        onMarkForReview={handleMarkForReview}
        onShowQuestionIndex={() => setShowQuestionIndex(true)}
      />
    </div>
  );
}

function shuffleArray(array: Question[]): Question[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

