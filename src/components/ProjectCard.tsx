import { Project } from '@/data/projects';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary">{project.category}</Badge>
        </div>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="space-y-3">
          <div className="text-sm font-semibold text-muted-foreground">التقنيات المستخدمة:</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="gap-2">
        {project.githubUrl && (
          <Button variant="outline" className="flex-1" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button className="flex-1" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              معاينة مباشرة
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
