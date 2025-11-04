'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">محفظة الأعمال</div>
          
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              عني
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              الأعمال
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              التواصل
            </button>
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex"
          >
            تواصل معي
          </Button>
        </div>
      </div>
    </nav>
  );
}
