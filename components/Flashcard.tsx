'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface FlashcardProps {
  question: string
  imageUrl?: string
  choices: string[]
  correctAnswer: string
  onAnswer: (isCorrect: boolean) => void
  onNext: () => void
}

export default function Flashcard({ question, imageUrl, choices, correctAnswer, onAnswer, onNext }: FlashcardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleAnswer = (choice: string) => {
    if (selectedAnswer) return
    setSelectedAnswer(choice)
    const isCorrect = choice === correctAnswer
    onAnswer(isCorrect)
    setTimeout(() => setIsFlipped(true), 500)
  }

  const handleNext = () => {
    setIsFlipped(false)
    setSelectedAnswer(null)
    onNext()
  }

  // Function to format the question text with line breaks
  const formatQuestionText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index} className="block mb-1 sm:mb-2">
        {line || '\u00A0'}
      </span>
    ))
  }

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-4">
      <div className="relative perspective-1000 h-[300px] sm:h-[400px]">
        <AnimatePresence initial={false} mode="wait">
          {!isFlipped ? (
            <motion.div
              key="question"
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full"
            >
              <Card className="w-full h-full bg-card shadow-lg overflow-hidden">
                <CardContent className="p-4 sm:p-8 h-full">
                  {imageUrl ? (
                    // Side-by-side layout for questions with images
                    <div className="flex flex-col sm:flex-row h-full">
                      <div className="w-full sm:w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0 flex items-center">
                        <h2 className="text-lg sm:text-2xl font-poppins font-semibold text-card-foreground">
                          {formatQuestionText(question)}
                        </h2>
                      </div>
                      <div className="w-full sm:w-1/2 h-48 sm:h-auto relative">
                        <Image
                          src={imageUrl}
                          alt="Question image"
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  ) : (
                    // Original centered layout for questions without images
                    <div className="flex flex-col items-center justify-center h-full">
                      <h2 className="text-lg sm:text-2xl font-poppins font-semibold text-card-foreground text-center">
                        {formatQuestionText(question)}
                      </h2>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              initial={{ rotateY: -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -180, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full"
            >
              <Card className="w-full h-full bg-card shadow-lg flex flex-col items-center justify-center">
                <CardContent className="p-4 sm:p-8 text-center">
                  <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 sm:mb-6 text-card-foreground">Correct Answer:</h3>
                  <p className="text-2xl sm:text-3xl font-poppins mb-6 sm:mb-8 text-primary">{correctAnswer}</p>
                  <Button 
                    onClick={handleNext} 
                    size="lg" 
                    className="font-medium text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-4"
                  >
                    Next Question
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {choices.map((choice, index) => {
          const isCorrectAnswer = choice === correctAnswer
          const isSelected = selectedAnswer === choice
          let buttonClass = "h-full w-full justify-start text-left font-medium p-3 sm:p-4 shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
          
          if (selectedAnswer) {
            if (isSelected) {
              buttonClass += isCorrectAnswer 
                ? " bg-green-100 dark:bg-green-900 border-green-500" 
                : " bg-red-100 dark:bg-red-900 border-red-500"
            } else if (isCorrectAnswer) {
              buttonClass += " bg-green-100 dark:bg-green-900 border-green-500"
            }
          }

          return (
            <Card key={index} className={`overflow-hidden ${selectedAnswer && !isSelected ? 'opacity-50' : ''}`}>
              <Button
                variant="ghost"
                className={buttonClass}
                onClick={() => handleAnswer(choice)}
                disabled={selectedAnswer !== null}
              >
                <span className="mr-3 sm:mr-4 text-base sm:text-lg font-semibold text-primary">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-sm sm:text-base">{choice}</span>
                {selectedAnswer && (isCorrectAnswer ? (
                  <Check className="ml-auto text-green-500 h-5 w-5 sm:h-6 sm:w-6" />
                ) : (isSelected ? (
                  <X className="ml-auto text-red-500 h-5 w-5 sm:h-6 sm:w-6" />
                ) : null))}
              </Button>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

