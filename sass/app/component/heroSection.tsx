import Image from 'next/image'
import Navigation from './Navigation'

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#0c0c14] text-white">
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 md:p-6">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <div className="w-8 h-8 bg-purple-600 rounded-md"></div>
          <span className="text-xl font-semibold">Reweb</span>
        </div>
        <Navigation />
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-md hover:bg-gray-700">
            Log in
          </button>
          <button className="px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700">
            Get Started
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
          The visual website builder for Next.js & Tailwind
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl">
          Build at the speed of no-code. Export a Next.js, Tailwind and Shadcn UI app. Customize without limits.
        </p>
        <button className="px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 mb-8 sm:mb-12">
          Build your site →
        </button>
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-10 sm:mb-20">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xl">N</span>
          </div>
          <div className="w-10 h-10 bg-[#61DAFB] rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-2xl">⚛</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#38BDF8] font-bold text-2xl">󰿃</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-2xl">&#47;&#47;</span>
          </div>
        </div>
        <div className="relative w-full max-w-5xl aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src="/images/heroo.png" 
            alt="Reweb Interface"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </main>
    </div>
  )
}