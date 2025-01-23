import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-muted-foreground dark:text-gray-400">
            Created with 🖤 by Ariel Batoon
          </span>
          <a
            href="https://github.com/arielbatoon09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary dark:text-gray-400 hover:dark:text-gray-500 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};