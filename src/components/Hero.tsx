'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
              مرحباً بك في محفظة أعمالي
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              مطور برمجيات متخصص في بناء الأنظمة والتطبيقات الحديثة
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8"
            >
              استعرض الأعمال
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8"
            >
              تواصل معي
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 animate-fade-in-up">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">مشروع منجز</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">سنوات خبرة</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">تقنية متقنة</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">رضا العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
