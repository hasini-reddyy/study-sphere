import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, User, Clock } from 'lucide-react';

interface BaseResourceProps {
  title: string;
  description: string;
  uploaderName: string;
  createdAt: Date;
}

interface VideoResourceProps extends BaseResourceProps {
  type: 'video';
  url: string;
}

interface EventResourceProps extends BaseResourceProps {
  type: 'event';
  date: string;
  link?: string;
}

interface ProjectResourceProps extends BaseResourceProps {
  type: 'project';
  link: string;
}

type ResourceCardProps = VideoResourceProps | EventResourceProps | ProjectResourceProps;

const ResourceCard = (props: ResourceCardProps) => {
  const { title, description, uploaderName, createdAt, type } = props;

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card className="border-border bg-card overflow-hidden animate-fade-in">
      {type === 'video' && (
        <div className="aspect-video w-full bg-secondary">
          <iframe
            src={props.url}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold text-foreground line-clamp-1">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
        
        {type === 'event' && (
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            <Clock className="h-3.5 w-3.5" />
            {props.date}
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{uploaderName}</span>
            <span className="text-border">•</span>
            <span>{formatDate(createdAt)}</span>
          </div>
          
          {(type === 'event' && props.link) && (
            <Button variant="outline" size="sm" asChild>
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Link
              </a>
            </Button>
          )}
          
          {type === 'project' && (
            <Button variant="outline" size="sm" asChild>
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                View
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
