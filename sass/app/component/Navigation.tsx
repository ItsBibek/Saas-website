'use client';

import { useScrollTo } from '../hooks/useScrollTo';

export default function Navigation() {
  const scrollTo = useScrollTo();

  const handleClick = (sectionId: string) => {
    console.log(`Navigation clicked for ${sectionId}`);
    scrollTo(sectionId);
  };

  return (
    <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
      <a onClick={() => handleClick('visualSection')} className="text-gray-300 hover:text-white cursor-pointer">About</a>
      <a onClick={() => handleClick('testimonialSection')} className="text-gray-300 hover:text-white cursor-pointer">Testimonials</a>
      <a onClick={() => handleClick('footerSection')} className="text-gray-300 hover:text-white cursor-pointer">FAQ</a>
    </nav>
  );
}
