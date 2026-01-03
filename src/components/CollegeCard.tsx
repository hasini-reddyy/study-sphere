import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, ChevronRight } from 'lucide-react';

interface CollegeCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  branchCount: number;
}

const CollegeCard = ({ id, name, description, imageUrl, branchCount }: CollegeCardProps) => {
  return (
    <Link to={`/college/${id}`} className="group block">
      <Card className="overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {name}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span>{branchCount} {branchCount === 1 ? 'Branch' : 'Branches'}</span>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CollegeCard;
