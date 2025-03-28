
import { Article } from "../types/article";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="font-medium">
            {article.category}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {new Date(article.date).toLocaleDateString()}
          </span>
        </div>
        <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <CardDescription className="line-clamp-3">
          {article.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2 text-xs text-muted-foreground">
        Source: {article.source}
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
