'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'برامج' | 'أنظمة'>('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">الأعمال والمشاريع</h2>
            <p className="text-xl text-muted-foreground">
              مجموعة من المشاريع والأنظمة التي قمت بتطويرها
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full" dir="rtl">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
                الكل ({projects.length})
              </TabsTrigger>
              <TabsTrigger value="برامج" onClick={() => setActiveTab('برامج')}>
                برامج ({projects.filter(p => p.category === 'برامج').length})
              </TabsTrigger>
              <TabsTrigger value="أنظمة" onClick={() => setActiveTab('أنظمة')}>
                أنظمة ({projects.filter(p => p.category === 'أنظمة').length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
