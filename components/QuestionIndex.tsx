import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Flag, ArrowLeft } from 'lucide-react'

interface QuestionIndexProps {
  questions: { question: string }[]
  answers: (string | null)[]
  markedForReview: boolean[]
  onQuestionSelect: (index: number) => void
  onComplete: () => void
  onBack: () => void
}

export default function QuestionIndex({ 
  questions, 
  answers, 
  markedForReview, 
  onQuestionSelect, 
  onComplete,
  onBack
}: QuestionIndexProps) {
  const unansweredQuestions = answers.filter(answer => answer === null).length
  const reviewQuestions = markedForReview.filter(Boolean).length

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl -mt-28">
      <Card className="bg-card shadow-lg">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <CardTitle className="text-2xl font-bold mb-2">Question Index</CardTitle>
            <p className="text-muted-foreground text-sm">
              Unanswered: {unansweredQuestions} | Marked for review: {reviewQuestions}
            </p>
          </div>
          <Button variant="outline" onClick={onBack} className="mt-4 sm:mt-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Test
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 mb-6">
            {questions.map((_, index) => {
              const isAnswered = answers[index] !== null
              const isMarked = markedForReview[index]
              return (
                <Button
                  key={index}
                  variant={isAnswered ? "default" : "outline"}
                  className={`w-full dark:text-white h-12 p-0 relative ${isMarked ? 'ring-2 ring-yellow-500' : ''}`}
                  onClick={() => onQuestionSelect(index)}
                >
                  <span className="text-sm">{index + 1}</span>
                  {isAnswered && (
                    <CheckCircle className="w-3 h-3 absolute top-1 right-1 text-green-500" />
                  )}
                  {isMarked && (
                    <Flag className="w-3 h-3 absolute bottom-1 right-1 text-yellow-500" />
                  )}
                </Button>
              )
            })}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                <span className="text-sm">Answered</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 border border-input rounded-sm mr-2"></div>
                <span className="text-sm">Unanswered</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-yellow-500 rounded-sm mr-2"></div>
                <span className="text-sm">Marked</span>
              </div>
            </div>
            <Button 
              onClick={onComplete} 
              className="w-full sm:w-auto"
              disabled={unansweredQuestions > 0}
            >
              {unansweredQuestions > 0 ? `${unansweredQuestions} unanswered` : 'Complete Test'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

