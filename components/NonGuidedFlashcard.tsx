'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Flag, ListOrdered } from 'lucide-react'

interface NonGuidedFlashcardProps {
  question: string
  imageUrl?: string
  choices: string[]
  selectedAnswer: string | null
  onAnswer: (answer: string) => void
  onNext: () => void
  onPrevious: () => void
  isFirst: boolean
  isLast: boolean
  isMarkedForReview: boolean
  onMarkForReview: () => void
  onShowQuestionIndex: () => void
}

export default function NonGuidedFlashcard({ 
  question, 
  imageUrl, 
  choices, 
  selectedAnswer, 
  onAnswer, 
  onNext, 
  onPrevious, 
  isFirst, 
  isLast,
  isMarkedForReview,
  onMarkForReview,
  onShowQuestionIndex
}: NonGuidedFlashcardProps) {

  const formatQuestionText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index} className="block mb-1 sm:mb-2">
        {line || '\u00A0'}
      </span>
    ))
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Navigation Bar */}
      <Card className="bg-card shadow-sm">
        <CardContent className="p-3 sm:p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Button 
                onClick={onPrevious} 
                disabled={isFirst} 
                variant="outline"
                size="sm"
                className="h-9"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Previous
              </Button>
              <Button
                onClick={onMarkForReview}
                variant={isMarkedForReview ? "default" : "outline"}
                size="sm"
                className="h-9"
              >
                <Flag className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">
                  {isMarkedForReview ? "Marked" : "Mark for Review"}
                </span>
                <span className="sm:hidden">Mark</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={onShowQuestionIndex}
                variant="outline"
                size="sm"
                className="h-9"
              >
                <ListOrdered className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Question Index</span>
                <span className="sm:hidden">Index</span>
              </Button>
              <Button 
                onClick={onNext}
                size="sm"
                className="h-9"
              >
                {isLast ? 'Finish' : 'Next'} <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="bg-card shadow-lg">
        <CardHeader className="p-4 sm:p-6 sm:pl-8">
          <div className="min-h-[200px] sm:min-h-[250px] flex items-center justify-center">
            {imageUrl ? (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                <div className="w-full sm:w-1/2 flex items-center">
                  <h2 className="text-lg sm:text-2xl font-poppins font-semibold text-card-foreground">
                    {formatQuestionText(question)}
                  </h2>
                </div>
                <div className="w-full sm:w-1/2 h-[200px] sm:h-[250px] relative">
                  <Image
                    src={imageUrl}
                    alt="Question image"
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
            ) : (
              <h2 className="text-lg sm:text-2xl font-poppins font-semibold text-card-foreground text-center px-4">
                {formatQuestionText(question)}
              </h2>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {choices.map((choice, index) => {
              const isSelected = selectedAnswer === choice
              return (
                <Button
                  key={index}
                  variant={isSelected ? "default" : "outline"}
                  className={`h-auto min-h-[3rem] w-full justify-start text-left p-4 hover:bg-accent hover:text-accent-foreground transition-colors ${
                    isSelected ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => onAnswer(choice)}
                >
                  <span className="mr-3 text-base sm:text-lg font-semibold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-sm sm:text-base">{choice}</span>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
