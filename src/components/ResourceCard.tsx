import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, LoaderCircle, Bookmark, BookmarkCheck } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
  image: string;
  bookmarked?: boolean;
}

interface ResourceCardProps {
  resource: Resource;
  onBookmarkToggle: (id: number) => void;
}

const ResourceCard = ({ resource, onBookmarkToggle }: ResourceCardProps) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Card className="resource-card overflow-hidden app-shadow dark:shadow-none dark:border dark:bg-gray-900">
      <div className="relative h-48 overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            {/* <LoaderCircle className="h-8 w-8 animate-spin text-primary" /> */}
            <span>Loading...</span>
          </div>
        )}
        <img
          src={resource.image}
          alt={resource.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setImageLoading(false)}
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-1">
            {/* {resource.bookmarked ? (
              <BookmarkCheck onClick={() => onBookmarkToggle(resource.id)} className="h-5 w-5 text-yellow-400 hover:text-yellow-500 cursor-pointer" />
            ) : (
              <Bookmark onClick={() => onBookmarkToggle(resource.id)} className="h-5 w-5 hover:text-yellow-400 cursor-pointer" />
            )} */}
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{resource.title}</h3>
          </div>
          <span className={`category-badge ${resource.category}`}>
            {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
          </span>
        </div>
        <p className="text-muted-foreground dark:text-gray-400">{resource.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-purple-700 hover:text-purple-800 dark:text-purple-500 hover:dark:text-purple-600 transition-colors text-sm"
        >
          Visit Resource
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;