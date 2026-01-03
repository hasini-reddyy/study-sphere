import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import BranchCard from '@/components/BranchCard';
import { seedColleges } from '@/lib/seedData';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Building2 } from 'lucide-react';

const College = () => {
  const { collegeId } = useParams();
  
  const college = seedColleges.find((c) => c.id === collegeId);
  
  if (!college) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">College Not Found</h1>
          <p className="text-muted-foreground mt-2">The college you're looking for doesn't exist.</p>
          <Link to="/" className="inline-block mt-4">
            <Button variant="outline">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="h-48 md:h-64 overflow-hidden">
          <img
            src={college.imageUrl}
            alt={college.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="container relative -mt-16 md:-mt-20">
          <div className="bg-card border border-border rounded-xl p-6 shadow-card">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Colleges
            </Link>
            
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <Building2 className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">{college.name}</h1>
                <p className="text-muted-foreground mt-1">{college.description}</p>
                <div className="mt-3 text-sm text-muted-foreground">
                  {college.branches.length} {college.branches.length === 1 ? 'Branch' : 'Branches'} Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Branches Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-xl font-semibold text-foreground mb-6">Select a Branch</h2>
          
          {college.branches.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {college.branches.map((branch, index) => (
                <div
                  key={branch.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BranchCard
                    id={branch.id}
                    collegeId={college.id}
                    name={branch.name}
                    description={branch.description}
                    videoCount={branch.videos.length}
                    eventCount={branch.events.length}
                    projectCount={branch.projects.length}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-xl border border-border">
              <p className="text-muted-foreground">No branches available yet.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 mt-auto">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 EduHub. Built for Hackathon Demo.</p>
        </div>
      </footer>
    </div>
  );
};

export default College;
