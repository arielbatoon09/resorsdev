import { Resource } from "@/types/resource";
import ResourceCard from "./ResourceCard";

interface ResourceGridProps {
  resources: Resource[];
  onBookmarkToggle: (id: number) => void;
}

export const ResourceGrid = ({ resources, onBookmarkToggle }: ResourceGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource, index) => (
        <div
          key={resource.id}
          className="animate-fade-in"
          style={{
            animationDelay: `${index * 100}ms`,
            opacity: 0,
            animation: "fade-in 0.5s ease-out forwards",
          }}
        >
          <ResourceCard 
            resource={resource} 
            onBookmarkToggle={onBookmarkToggle}
          />
        </div>
      ))}
    </div>
  );
};