
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import { Article } from "../types/article";
import { Button } from "@/components/ui/button";

interface ArticlesListProps {
  articles: Article[];
}

const ArticlesList = ({ articles }: ArticlesListProps) => {
  const [visibleArticles, setVisibleArticles] = useState<number>(8);

  const loadMore = () => {
    setVisibleArticles(prev => prev + 4);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.slice(0, visibleArticles).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      
      {visibleArticles < articles.length && (
        <div className="flex justify-center mt-8">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      )}
      
      {articles.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No articles found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
