import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ResourceGrid } from "@/components/ResourceGrid";
import { Footer } from "@/components/Footer";
import { useResources } from "@/composable/useResources";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { handleBookmarkToggle, filterResources } = useResources();
  const filteredResources = filterResources(searchQuery, selectedCategory);

  return (
    <div className="flex max-w-7xl mx-auto flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-50">Learning Resources</h1>
          <p className="text-gray-600 text-medium dark:text-gray-200">Discover and Learn For Free 🚀</p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter value={selectedCategory} onValueChange={setSelectedCategory} />
        </div>

        {filteredResources.length === 0 ? (
          <div className="text-center text-lg text-muted-foreground">No results found</div>
        ) : (
          <ResourceGrid resources={filteredResources} onBookmarkToggle={handleBookmarkToggle} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;