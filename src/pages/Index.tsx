import { useState } from 'react';
import Header from '@/components/Header';
import CollegeCard from '@/components/CollegeCard';
import { seedColleges } from '@/lib/seedData';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, Users, BookOpen } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredColleges = seedColleges.filter((college) =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-16 md:py-24">
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Discover Learning
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore colleges, branches, and curated educational content. Videos, events, and projects—all in one place.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search colleges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-12 pr-4 text-base bg-card border-border shadow-card focus:shadow-card-hover transition-shadow"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur">
              <div className="flex justify-center mb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">{seedColleges.length}</div>
              <div className="text-sm text-muted-foreground">Colleges</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur">
              <div className="flex justify-center mb-2">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">
                {seedColleges.reduce((acc, c) => acc + c.branches.length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Branches</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur">
              <div className="flex justify-center mb-2">
                <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-warning" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Colleges Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">All Colleges</h2>
              <p className="text-muted-foreground mt-1">
                {filteredColleges.length} {filteredColleges.length === 1 ? 'college' : 'colleges'} found
              </p>
            </div>
          </div>
          
          {filteredColleges.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredColleges.map((college, index) => (
                <div
                  key={college.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CollegeCard
                    id={college.id}
                    name={college.name}
                    description={college.description}
                    imageUrl={college.imageUrl}
                    branchCount={college.branches.length}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">No colleges found</h3>
              <p className="text-muted-foreground mt-1">Try adjusting your search query</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 EduHub. Built for Hackathon Demo.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
