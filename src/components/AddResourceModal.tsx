import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

interface AddResourceModalProps {
  type: 'video' | 'event' | 'project';
  onAdd: (data: any) => void;
}

const AddResourceModal = ({ type, onAdd }: AddResourceModalProps) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    link: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'Please sign in to add resources.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.title.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Title is required.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    
    try {
      const newResource = {
        id: `${type}-${Date.now()}`,
        title: formData.title.trim(),
        description: formData.description.trim(),
        uploaderName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
        createdAt: new Date(),
        ...(type === 'video' && { url: formData.url.trim() }),
        ...(type === 'event' && { 
          date: formData.date,
          link: formData.link.trim() || undefined,
          organizerName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
        }),
        ...(type === 'project' && { 
          link: formData.link.trim(),
          contributorName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
        }),
      };

      onAdd(newResource);
      
      toast({
        title: 'Success!',
        description: `${type.charAt(0).toUpperCase() + type.slice(1)} added successfully.`,
      });
      
      setFormData({ title: '', description: '', url: '', link: '', date: '' });
      setOpen(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add resource. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const typeLabels = {
    video: { title: 'Add Video', urlLabel: 'YouTube Embed URL', urlPlaceholder: 'https://www.youtube.com/embed/...' },
    event: { title: 'Add Event', urlLabel: 'Event Link (Optional)', urlPlaceholder: 'https://...' },
    project: { title: 'Add Project', urlLabel: 'Project Link', urlPlaceholder: 'https://github.com/...' },
  };

  if (!user) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gradient-primary text-primary-foreground border-0">
          <Plus className="h-4 w-4 mr-1" />
          {typeLabels[type].title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{typeLabels[type].title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows={3}
            />
          </div>
          
          {type === 'video' && (
            <div className="space-y-2">
              <Label htmlFor="url">{typeLabels[type].urlLabel} *</Label>
              <Input
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                placeholder={typeLabels[type].urlPlaceholder}
                required
              />
            </div>
          )}
          
          {type === 'event' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="date">Event Date *</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link">{typeLabels[type].urlLabel}</Label>
                <Input
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder={typeLabels[type].urlPlaceholder}
                />
              </div>
            </>
          )}
          
          {type === 'project' && (
            <div className="space-y-2">
              <Label htmlFor="link">{typeLabels[type].urlLabel} *</Label>
              <Input
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder={typeLabels[type].urlPlaceholder}
                required
              />
            </div>
          )}
          
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="gradient-primary text-primary-foreground border-0">
              {loading && <Loader2 className="h-4 w-4 mr-1 animate-spin" />}
              Add {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddResourceModal;
