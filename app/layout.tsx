import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import './globals.css'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        poppins.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <header className="flex-shrink-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <a className="flex items-center space-x-2" href="/">
                  <span className="font-bold italic  sm:text-base">
                    K53 Learners
                  </span>
                </a>
                <ThemeSwitcher />
              </div>
            </header>
            <main className="flex-grow overflow-auto">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

