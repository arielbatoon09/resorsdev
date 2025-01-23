import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="dark:hidden" width="30" src="/resors-logo.png" />
            <img className="hidden dark:block" width="30" src="/resors-logo-white.png" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              esorsDev
            </span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};