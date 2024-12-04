import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, XCircle, RotateCcw, Home } from 'lucide-react'

interface TestResultProps {
  score: number
  totalQuestions: number
  testType: string
  onBack: () => void
}

export default function TestResult({ score, totalQuestions, testType, onBack }: TestResultProps) {
  const percentage = Math.round((score / totalQuestions) * 100)
  const passed = percentage >= 75 
  const completed = score > 0 || totalQuestions > 0

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-2xl bg-card shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl font-poppins font-semibold mb-2">
            {completed ? (passed ? 'Congratulations!' : 'Test Completed') : 'Test Incomplete'}
          </CardTitle>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            {testType === 'MAIN' ? 'Main Practice Test' : testType === 'CUSTOM' ? 'Custom Test' : `Test ${testType}`}
          </p>
          {completed ? (
            passed ? (
              <CheckCircle className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mt-4 mb-6 text-green-500" />
            ) : (
              <XCircle className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mt-4 mb-6 text-red-500" />
            )
          ) : (
            <RotateCcw className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mt-4 mb-6 text-yellow-500" />
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {completed ? (
            <>
              <div className="text-center">
                <p className="text-2xl mb-2">
                  Your score: <span className="font-bold">{score}</span> out of {totalQuestions}
                </p>
                <p className="text-xl">
                  Percentage: <span className="font-bold">{percentage}%</span>
                </p>
              </div>
              <div className="text-center">
                {passed ? (
                  <p className="text-lg text-green-600 font-semibold">You passed the test!</p>
                ) : (
                  <p className="text-lg text-red-600 font-semibold">You didn&apos;t pass. Keep practicing!</p>
                )}
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-xl mb-4">You didn&apos;t complete the test within the time limit.</p>
              <p className="text-lg text-yellow-600 font-semibold">All unanswered questions were marked as incorrect.</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={onBack} size="lg" className="font-medium text-lg">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
            <Button onClick={() => window.location.reload()} size="lg" variant="outline" className="font-medium text-lg">
              <RotateCcw className="mr-2 h-5 w-5" />
              Retake Test
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

