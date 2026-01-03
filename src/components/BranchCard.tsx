import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Video, Calendar, FolderKanban, ChevronRight } from 'lucide-react';

interface BranchCardProps {
  id: string;
  collegeId: string;
  name: string;
  description: string;
  videoCount: number;
  eventCount: number;
  projectCount: number;
}

const BranchCard = ({ id, collegeId, name, description, videoCount, eventCount, projectCount }: BranchCardProps) => {
  return (
    <Link to={`/college/${collegeId}/branch/${id}`} className="group block">
      <Card className="border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Video className="h-4 w-4 text-primary" />
                  <span>{videoCount} Videos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>{eventCount} Events</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FolderKanban className="h-4 w-4 text-warning" />
                  <span>{projectCount} Projects</span>
                </div>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BranchCard;
