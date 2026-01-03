import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import ResourceCard from '@/components/ResourceCard';
import AddResourceModal from '@/components/AddResourceModal';
import { seedColleges, Video, Event, Project } from '@/lib/seedData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, Video as VideoIcon, Calendar, FolderKanban, BookOpen } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Branch = () => {
  const { collegeId, branchId } = useParams();
  const { user } = useAuth();
  
  const college = seedColleges.find((c) => c.id === collegeId);
  const branch = college?.branches.find((b) => b.id === branchId);
  
  const [videos, setVideos] = useState<Video[]>(branch?.videos || []);
  const [events, setEvents] = useState<Event[]>(branch?.events || []);
  const [projects, setProjects] = useState<Project[]>(branch?.projects || []);

  const handleAddVideo = (video: Video) => {
    setVideos([video, ...videos]);
  };

  const handleAddEvent = (event: Event) => {
    setEvents([event, ...events]);
  };

  const handleAddProject = (project: Project) => {
    setProjects([project, ...projects]);
  };

  if (!college || !branch) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Branch Not Found</h1>
          <p className="text-muted-foreground mt-2">The branch you're looking for doesn't exist.</p>
          <Link to="/" className="inline-block mt-4">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const EmptyState = ({ type }: { type: string }) => (
    <div className="text-center py-12 bg-card rounded-xl border border-border">
      <div className="mx-auto h-14 w-14 rounded-full bg-secondary flex items-center justify-center mb-4">
        {type === 'videos' && <VideoIcon className="h-6 w-6 text-muted-foreground" />}
        {type === 'events' && <Calendar className="h-6 w-6 text-muted-foreground" />}
        {type === 'projects' && <FolderKanban className="h-6 w-6 text-muted-foreground" />}
      </div>
      <h3 className="text-lg font-semibold text-foreground">No {type} yet</h3>
      <p className="text-muted-foreground mt-1">
        {user ? `Be the first to add a ${type.slice(0, -1)}!` : 'Sign in to add content.'}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="border-b border-border bg-card">
        <div className="container py-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronLeft className="h-4 w-4 rotate-180" />
            <Link to={`/college/${collegeId}`} className="hover:text-foreground transition-colors">
              {college.name}
            </Link>
            <ChevronLeft className="h-4 w-4 rotate-180" />
            <span className="text-foreground">{branch.name}</span>
          </nav>
          
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{branch.name}</h1>
              <p className="text-muted-foreground mt-1">{branch.description}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-8">
        <div className="container">
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="w-full justify-start bg-card border border-border mb-6 h-auto p-1 flex-wrap">
              <TabsTrigger
                value="videos"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <VideoIcon className="h-4 w-4" />
                Videos ({videos.length})
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="flex items-center gap-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                <Calendar className="h-4 w-4" />
                Events ({events.length})
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="flex items-center gap-2 data-[state=active]:bg-warning data-[state=active]:text-warning-foreground"
              >
                <FolderKanban className="h-4 w-4" />
                Projects ({projects.length})
              </TabsTrigger>
            </TabsList>
            
            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Learning Videos</h2>
                <AddResourceModal type="video" onAdd={handleAddVideo} />
              </div>
              
              {videos.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {videos.map((video) => (
                    <ResourceCard
                      key={video.id}
                      type="video"
                      title={video.title}
                      description={video.description}
                      url={video.url}
                      uploaderName={video.uploaderName}
                      createdAt={video.createdAt}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState type="videos" />
              )}
            </TabsContent>
            
            {/* Events Tab */}
            <TabsContent value="events">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Live Events</h2>
                <AddResourceModal type="event" onAdd={handleAddEvent} />
              </div>
              
              {events.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {events.map((event) => (
                    <ResourceCard
                      key={event.id}
                      type="event"
                      title={event.title}
                      description={event.description}
                      date={event.date}
                      link={event.link}
                      uploaderName={event.organizerName}
                      createdAt={event.createdAt}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState type="events" />
              )}
            </TabsContent>
            
            {/* Projects Tab */}
            <TabsContent value="projects">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Student Projects</h2>
                <AddResourceModal type="project" onAdd={handleAddProject} />
              </div>
              
              {projects.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ResourceCard
                      key={project.id}
                      type="project"
                      title={project.title}
                      description={project.description}
                      link={project.link}
                      uploaderName={project.contributorName}
                      createdAt={project.createdAt}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState type="projects" />
              )}
            </TabsContent>
          </Tabs>
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

export default Branch;
