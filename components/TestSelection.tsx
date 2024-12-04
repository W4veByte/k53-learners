"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BookOpen, SignpostBig, Car, Book, Settings } from "lucide-react";
import Test from "./Test";
import CustomTestSetup from "./CustomTestSetup";

const testTypes = [
  {
    id: "MAIN",
    title: "Main Practice Test",
    description: "68 questions from all sections, 50-minute time limit",
    icon: Book,
  },
  {
    id: "CUSTOM",
    title: "Customised Test",
    description: "Select sections and time limit",
    icon: Settings,
  },
  {
    id: "A",
    title: "Rules of the Road",
    description: "Basic traffic rules and regulations",
    icon: BookOpen,
  },
  {
    id: "B",
    title: "Road Signs & Markings",
    description: "Traffic signs, signals, and road markings",
    icon: SignpostBig,
  },
  {
    id: "C",
    title: "Vehicle Controls",
    description: "Vehicle operation and safety procedures",
    icon: Car,
  },
];

export default function TestSelection() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [customTestSetup, setCustomTestSetup] = useState(false);

  if (customTestSetup) {
    return <CustomTestSetup onBack={() => setCustomTestSetup(false)} />;
  }

  if (selectedTest) {
    return (
      <Test testType={selectedTest} onBack={() => setSelectedTest(null)} />
    );
  }

  return (
    <div className="flex flex-col p-4 sm:mt-8 md:-mt-40">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-left">
        Choose Test
      </h1>
      <div className="overflow-y-auto max-h-[calc(100vh-64px)] sm:overflow-hidden">
        <div className="grid gap-4 sm:gap-6 w-full max-w-7xl">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-card bg-gradient-to-bl from-blue-500/25 via-transparent to-transparent hover:bg-accent transition-colors duration-300 md:col-span-2">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center mb-3 sm:mb-4">
                  {React.createElement(testTypes[0].icon, {
                    className: "w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground",
                  })}
                </div>
                <CardTitle className="font-poppins text-lg sm:text-xl">
                  {testTypes[0].title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  {testTypes[0].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() =>
                    testTypes[0].id === "CUSTOM"
                      ? setCustomTestSetup(true)
                      : setSelectedTest(testTypes[0].id)
                  }
                  className="w-full font-medium text-sm"
                >
                  Start Test
                </Button>
                {testTypes[0].id !== "CUSTOM" && (
                  <Button
                    variant="outline"
                    className="w-full dark:hover:bg-slate-700 hover:bg-slate-200 dark:bg-slate-900 font-medium text-sm mt-2"
                  >
                    <Book className="mr-2 h-4 w-4" /> Guided Test
                  </Button>
                )}
              </CardContent>
            </Card>
            <Card className="bg-card hover:bg-accent transition-colors duration-300">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center mb-3 sm:mb-4">
                  {React.createElement(testTypes[1].icon, {
                    className: "w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground",
                  })}
                </div>
                <CardTitle className="font-poppins text-lg sm:text-xl">
                  {testTypes[1].title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  {testTypes[1].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() =>
                    testTypes[1].id === "CUSTOM"
                      ? setCustomTestSetup(true)
                      : setSelectedTest(testTypes[1].id)
                  }
                  className="w-full font-medium text-sm"
                >
                  Start Test
                </Button>
                <Button
                  variant="outline"
                  className="w-full dark:hover:bg-slate-700 hover:bg-slate-200 dark:bg-slate-900 font-medium text-sm mt-2"
                >
                  <Book className="mr-2 h-4 w-4" /> Guided Test
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {testTypes.slice(2, 5).map((test) => (
              <Card
                key={test.id}
                className="bg-card hover:bg-accent transition-colors duration-300"
              >
                <CardHeader>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center mb-3 sm:mb-4">
                    {React.createElement(test.icon, {
                      className:
                        "w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground",
                    })}
                  </div>
                  <CardTitle className="font-poppins text-lg sm:text-xl">
                    {test.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    {test.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() =>
                      test.id === "CUSTOM"
                        ? setCustomTestSetup(true)
                        : setSelectedTest(test.id)
                    }
                    className="w-full font-medium text-sm"
                  >
                    Start Test
                  </Button>
                  {test.id !== "CUSTOM" && (
                    <Button
                      variant="outline"
                      className="w-full dark:hover:bg-slate-700 hover:bg-slate-200 dark:bg-slate-900 font-medium text-sm mt-2"
                    >
                      <Book className="mr-2 h-4 w-4" /> Guided Test
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
