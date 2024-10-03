import Image from 'next/image'

interface Testimonial {
  id: number
  content: string
  author: string
  handle: string
  avatarUrl: string
  size: 'small' | 'medium' | 'large'
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "It practically solves every issue I have with Webflow and Framer. This is so much easier to use as a developer!",
    author: "Jaiden Lee",
    handle: "@jaidenlee",
    avatarUrl: "/images/22.jpeg",
    size: 'medium'
  },
  {
    id: 2,
    content: "Amazing.",
    author: "shadn",
    handle: "@shadn",
    avatarUrl: "/images/1.jpeg",
    size: 'small'
  },
  {
    id: 3,
    content: "I really have been missing this product for years. It feels like a much more natural way of working.",
    author: "Ninjarobo",
    handle: "@ninjarobo",
    avatarUrl: "/images/11.jpg",
    size: 'medium'
  },
  {
    id: 4,
    content: "This looks really freaking cool!!",
    author: "James Q Quick",
    handle: "@jamesqquick",
    avatarUrl: "/images/66.jpg",
    size: 'small'
  },
  {
    id: 5,
    content: "This is awesome. Better than Framer/Wordpress as you can take the code and continue working on it instantly yourself.",
    author: "soumya dot dev",
    handle: "@soumya_dot_dev",
    avatarUrl: "/images/1.jpeg",
    size: 'large'
  },
  {
    id: 6,
    content: "This is so tastefully built. Loving it.",
    author: "Kabir Asani",
    handle: "@KabirAsani",
    avatarUrl: "/images/55.jpg",
    size: 'small'
  },
  {
    id: 7,
    content: "Absolutely love Reweb! Such a game-changer for building beautiful landing pages effortlessly.",
    author: "Wayne",
    handle: "@wayne_dev",
    avatarUrl: "/images/33.jpeg",
    size: 'medium'
  },
  {
    id: 8,
    content: "This is super cool! Very easy to use, and better than trying to mock things up in Figma.",
    author: "Mike Knapp",
    handle: "@mikeee",
    avatarUrl: "/images/1.jpeg",
    size: 'small'
  },
  {
    id: 9,
    content: "This is my new favorite way of building projects quickly.",
    author: "Paul Bratslavsky",
    handle: "@codingthirty",
    avatarUrl: "/images/66.jpg",
    size: 'small'
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What people are saying</h2>
        <p className="text-gray-400 text-center mb-12">
          Thousands of developers and teams love Reweb.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-900 rounded-lg p-6"
            >
              <p className="text-sm mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatarUrl}
                  alt={`Avatar of ${testimonial.author}`}
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-gray-400 text-xs">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}