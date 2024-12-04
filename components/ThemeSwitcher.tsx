'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Laptop } from 'lucide-react'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex space-x-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('light')}
        className={theme === 'light' ? 'bg-accent' : ''}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Light Mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('dark')}
        className={theme === 'dark' ? 'bg-accent' : ''}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Dark Mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('system')}
        className={theme === 'system' ? 'bg-accent' : ''}
      >
        <Laptop className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">System Mode</span>
      </Button>
    </div>
  )
}

