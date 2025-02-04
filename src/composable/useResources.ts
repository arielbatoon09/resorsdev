import { useState } from "react";
import { Resource } from "@/types/resource";

const initialResources: Resource[] = [
  {
    id: 1,
    title: "HTML & CSS Course",
    description: "Build your fundamentals interactively with this free course on Scrimba.",
    category: "courses",
    link: "https://scrimba.com/html-css-crash-course-c02l",
    image: "https://pbs.twimg.com/media/D9GKzyVU4AArnGR?format=jpg&name=4096x4096",
    bookmarked: false
  },
  {
    id: 2,
    title: "HTML & CSS Projects",
    description: "Build and deploy interactively with five awesome HTML and CSS projects.",
    category: "courses",
    link: "https://scrimba.com/learn-html-and-css-c0p",
    image: "https://pbs.twimg.com/media/D9GKzyVU4AArnGR?format=jpg&name=4096x4096",
    bookmarked: false
  },
  {
    id: 3,
    title: "Learn Basic JavaScript",
    description: "Learn basic JavaScript with this free course on Scrimba.",
    category: "courses",
    link: "https://scrimba.com/learn-javascript-c0v",
    image: "https://pbs.twimg.com/media/D9GKzyVU4AArnGR?format=jpg&name=4096x4096",
    bookmarked: false
  },
  {
    id: 4,
    title: "Setup VSCode",
    description: "This tutorial will help you setup your local to start with web development.",
    category: "tutorials",
    link: "https://www.youtube.com/watch?v=mL1IcxIUd5Y",
    image: "https://repository-images.githubusercontent.com/657248114/d3c7b91a-b285-4d1e-8429-5de1acc5f61e",
    bookmarked: false
  },
  {
    id: 5,
    title: "Online Web IDE",
    description: "A multi-purpose IDE that can be easily accessed through a browser.",
    category: "tools",
    link: "https://onecompiler.com/html",
    image: "https://play-lh.googleusercontent.com/J2AsAmkERwVdShhU8Bbn2_xN5ou5QVmlo4zyl4JoZd5WM23n3tCUcynJXjwy-06rmW4",
    bookmarked: false
  },
  {
    id: 6,
    title: "TrebEdit",
    description: "TrebEdit is an IDE for developing and viewing code on Android.",
    category: "tools",
    link: "https://play.google.com/store/apps/details?id=com.teejay.trebedit",
    image: "https://play-lh.googleusercontent.com/dVZocgiXxeXnppeSz2BQunEoDdEmlOeDUBTABwLv6RmzlnnuIgDyT21uuYxkv0i6ng",
    bookmarked: false
  },
  {
    id: 7,
    title: "CodeSnack",
    description: "CodeSnack is an IDE for developing and viewing code on iOS.",
    category: "tools",
    link: "https://apps.apple.com/us/app/codesnack-ide/id1397424959",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/5699ecb1-2de1-4812-ac80-bdf3ee827dd2/1604282510/codesnack-ide-screenshot.png",
    bookmarked: false
  },
  {
    id: 8,
    title: "HTML Color Codes",
    description: "Find HTML color codes for your website using our color picker, and HTML color names.",
    category: "tools",
    link: "https://htmlcolorcodes.com/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZopO6-oil5SXHy9piYP4vXb1AMbwJstpXg&s",
    bookmarked: false
  },
];

export const useResources = () => {
  const [resources, setResources] = useState<Resource[]>(initialResources);
  
  const handleBookmarkToggle = (id: number) => {
    setResources(prevResources =>
      prevResources.map(resource =>
        resource.id === id
          ? { ...resource, bookmarked: !resource.bookmarked }
          : resource
      )
    );
  };

  const filterResources = (searchQuery: string, selectedCategory: string) => {
    return resources.filter((resource) => {
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "all" ? true :
        selectedCategory === "favorites" ? resource.bookmarked :
        resource.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  };

  return { resources, handleBookmarkToggle, filterResources };
};