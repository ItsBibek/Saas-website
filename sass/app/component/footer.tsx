'use client';

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    question: "How is Reweb different than tools like Framer or Webflow?",
    answer: "Reweb is specifically designed for developers, offering a more code-centric approach while still providing visual editing capabilities."
  },
  {
    question: "What is the learning curve for Reweb?",
    answer: "Reweb is intuitive for developers familiar with React and Tailwind CSS. The learning curve is generally quick for those with web development experience."
  },
  {
    question: "Is the generated code high quality?",
    answer: "Yes, Reweb generates clean, well-structured React and Tailwind CSS code that follows best practices and is easy to maintain and extend."
  },
  {
    question: "Do you plan to add more sections and templates?",
    answer: "We are constantly working on expanding our library of sections and templates to provide more options for our users."
  },
  {
    question: "Can I import my own components?",
    answer: "Yes, Reweb supports importing custom components, allowing you to integrate your existing codebase seamlessly."
  }
]

export default function FAQAndFooter() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-bold mb-4 text-center">FAQ</h2>
        <p className="text-gray-400 text-center mb-8">
          Got other questions? Reach out in our Discord.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-800 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">Code at the speed of no-code</h2>
        <p className="text-gray-400 mb-8">
          Build websites at the speed of no-code. Export a Next.js, Tailwind
          and Shadcn UI app. Customize without limits.
        </p>
        <Link
          href="#"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
        >
          Build your site →
        </Link>
      </div>

      <footer className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <Link href="/" className="flex items-center text-xl font-bold">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            Reweb
          </Link>
          <p className="text-sm text-gray-400 mt-2">Code at the speed of no-code.</p>
        </div>
        <div className="flex space-x-6 mb-8 md:mb-0">
          <Link href="#" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="#" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Community</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Discord</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Email</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  )
}