
import { useState } from "react";
import Header from "../components/Header";
import ArticlesFilter from "../components/ArticlesFilter";
import ArticlesList from "../components/ArticlesList";
import { articles } from "../data/articles";
import { listArticles, filterArticles } from "../utils/articleUtils";

const Index = () => {
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleFilterChange = (filters: {
    category?: string;
    startDate?: string;
    endDate?: string;
  }) => {
    const filtered = filterArticles(articles, filters);
    setFilteredArticles(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="mb-2">
            <h2 className="text-3xl font-bold mb-6">Latest News</h2>
            <ArticlesFilter onFilterChange={handleFilterChange} />
          </div>
          <div className="border-t mt-4 pt-6">
            <ArticlesList articles={filteredArticles} />
          </div>
        </div>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Newsy Nibbler - chiru
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
