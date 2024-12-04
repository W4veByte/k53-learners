'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft } from 'lucide-react'
import Test from './Test'

interface CustomTestSetupProps {
  onBack: () => void
}

export default function CustomTestSetup({ onBack }: CustomTestSetupProps) {
  const [selectedSections, setSelectedSections] = useState<string[]>([])
  const [timeLimit, setTimeLimit] = useState(50)
  const [startTest, setStartTest] = useState(false)

  const handleSectionToggle = (section: string) => {
    setSelectedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const handleStartTest = () => {
    if (selectedSections.length > 0) {
      setStartTest(true)
    }
  }

  if (startTest) {
    return <Test testType="CUSTOM" customSections={selectedSections} customTimeLimit={timeLimit} onBack={onBack} />
  }

  return (
    <div className="container mx-auto px-4 pt-1">
      <div className="flex items-center justify-between mb-4 lg:-mt-48">
        <Button variant="ghost" onClick={onBack} className="font-medium text-lg">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
        <h2 className="text-2xl font-poppins font-semibold text-card-foreground">
          Customise Your Test
        </h2>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-poppins">Select Test Sections</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="section-a" checked={selectedSections.includes('A')} onCheckedChange={() => handleSectionToggle('A')} />
            <Label htmlFor="section-a">Rules of the Road</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="section-b" checked={selectedSections.includes('B')} onCheckedChange={() => handleSectionToggle('B')} />
            <Label htmlFor="section-b">Road Signs & Markings</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="section-c" checked={selectedSections.includes('C')} onCheckedChange={() => handleSectionToggle('C')} />
            <Label htmlFor="section-c">Vehicle Controls</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time-limit">Time Limit (minutes)</Label>
            <Input
              id="time-limit"
              type="number"
              value={timeLimit}
              onChange={(e) => setTimeLimit(Number(e.target.value))}
              min={1}
              max={120}
            />
          </div>

          <Button onClick={handleStartTest} className="w-full" disabled={selectedSections.length === 0}>
            Start Custom Test
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

