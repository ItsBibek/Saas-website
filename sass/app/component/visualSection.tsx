import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function VisualEditorSection() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Visual editing, built for developers</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          No need to learn new mental models and frameworks.
          <br />
          It feels like editing code, but visually.
        </p>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="flex-1 bg-gray-900 rounded-lg p-6 relative">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-400">My App</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-2xl font-bold mb-2">Supercharge your development workflow.</h3>
              <p className="text-gray-400 mb-4">Easily manage tasks, issues, and more. Unlock your team's full potential.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex-1 bg-gray-900 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-400">hero.tsx</span>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="container flex flex-col gap-4 py-20">
      <h1 className="text-4xl font-bold">
        Supercharge your development workflow.
      </h1>
      <p className="text-xl text-muted-foreground">
        Easily manage tasks, issues, and more.
        Unlock your team's full potential.
      </p>
      <Button size="lg">
        <Link href="/">Get Started</Link>
      </Button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-12 text-center">Build fast. Stay flexible.</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
                Visual Builder
              </h3>
              <p className="text-gray-400">
                Edit Tailwind & Shadcn UI components with a visual builder and see your changes in real-time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
                Code Export
              </h3>
              <p className="text-gray-400">
                Export a quality Next.js codebase. Customize without limits and host anywhere.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
                Pre-made templates
              </h3>
              <p className="text-gray-400">
                Get started quickly with beautifully designed blocks and templates.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
                AI-generated themes
              </h3>
              <p className="text-gray-400">
                Generate beautiful themes and color palettes from a prompt.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] md:h-auto">
            <Image
              src="/images/11.jpg"
              alt="Visual Editor Interface"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}