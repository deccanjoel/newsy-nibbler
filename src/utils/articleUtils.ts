
import { Article } from "../types/article";

// Function to list articles with optional pagination
export function listArticles(articles: Article[], page: number = 1, limit: number = 10): Article[] {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return articles.slice(startIndex, endIndex);
}

// Function to filter articles by category and/or date
export function filterArticles(
  articles: Article[], 
  filters: { 
    category?: string; 
    startDate?: string; 
    endDate?: string; 
  }
): Article[] {
  return articles.filter(article => {
    // Filter by category if provided
    if (filters.category && article.category !== filters.category) {
      return false;
    }
    
    // Filter by date range if provided
    if (filters.startDate && new Date(article.date) < new Date(filters.startDate)) {
      return false;
    }
    
    if (filters.endDate && new Date(article.date) > new Date(filters.endDate)) {
      return false;
    }
    
    return true;
  });
}
