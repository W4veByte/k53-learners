import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, XCircle, RotateCcw, Home } from 'lucide-react'

interface TestResultProps {
  results: {
    testA: { correct: number; total: number };
    testB: { correct: number; total: number };
    testC: { correct: number; total: number };
  };
  testType: string;
  onBack: () => void;
}

export default function TestResult({ results, testType, onBack }: TestResultProps) {
  const { testA, testB, testC } = results;

  const getTestResults = () => {
    switch (testType) {
      case 'A':
        return { correct: testA.correct, total: testA.total };
      case 'B':
        return { correct: testB.correct, total: testB.total };
      case 'C':
        return { correct: testC.correct, total: testC.total };
      default:
        return {
          correct: testA.correct + testB.correct + testC.correct,
          total: testA.total + testB.total + testC.total
        };
    }
  };

  const { correct, total } = getTestResults();
  const percentage = Math.round((correct / total) * 100);
  const passed = percentage >= 75;
  const completed = correct > 0 || total > 0;

  const getTestTitle = () => {
    switch (testType) {
      case 'A':
        return 'Rules of the Road Test';
      case 'B':
        return 'Traffic Signs & Markings Test';
      case 'C':
        return 'Vehicle Controls Test';
      case 'MAIN':
        return 'Main Practice Test';
      case 'CUSTOM':
        return 'Custom Test';
      default:
        return 'Test';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen md:-mt-40">
      <Card className="w-full max-w-2xl bg-card shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl font-poppins font-semibold mb-2">
            {completed ? (passed ? 'Congratulations!' : 'Test Completed') : 'Test Incomplete'}
          </CardTitle>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            {getTestTitle()}
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
          {testType === 'MAIN' ? (
            <>
              <div className="text-center">
                <h2 className="text-xl font-semibold mt-4">Test Score Breakdown:</h2>
                <p>Rules of the Road: {testA.correct}/{testA.total}</p>
                <p>Traffic and Road Signs: {testB.correct}/{testB.total}</p>
                <p>Vehicle Controls: {testC.correct}/{testC.total}</p>
                <p className="mt-2">
                  Total Score: {correct}/{total} ({percentage}%)
                </p>
                <p className="text-lg mt-2">
                  {passed ? (
                    <span className="text-green-600 font-semibold">You passed the test!</span>
                  ) : (
                    <span className="text-red-600 font-semibold">You didn&apos;t pass. Keep practicing!</span>
                  )}
                </p>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-semibold mt-4">Section Test Result:</h2>
              <p>{testType === 'A' ? 'Rules of the Road' : 
                 testType === 'B' ? 'Traffic and Road Signs' : 
                 'Vehicle Controls'}: {correct}/{total}</p>
              <p className="mt-2">
                Percentage: {percentage}% ({passed ? 'Pass' : 'Fail'})
              </p>
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

