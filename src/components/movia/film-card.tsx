import Image from "next/image";
import { Star, Eye, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type FilmCardProps = {
  title: string;
  year: string;
  rating: number;
  imageUrl: string;
  imageHint: string;
  viewCount?: number;
  likeCount?: number;
};

export function FilmCard({ title, year, rating, imageUrl, imageHint, viewCount, likeCount }: FilmCardProps) {
  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count.toString();
  };
  
  return (
    <div className="group">
      <Card className="overflow-hidden border-0 bg-transparent shadow-none">
        <CardContent className="p-0">
          <div className="aspect-[2/3] overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              data-ai-hint={imageHint}
              width={300}
              height={450}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardContent>
      </Card>
      <div className="mt-3 text-white">
        <h3 className="truncate font-body text-base font-medium group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{year}</p>
        <div className="mt-2 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.round(rating) ? 'text-primary' : 'text-muted-foreground/30'}`}
              fill={i < Math.round(rating) ? 'currentColor' : 'none'}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">{rating.toFixed(1)}</span>
        </div>
        {(viewCount !== undefined && likeCount !== undefined) && (
          <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
             <span className="flex items-center gap-1.5">
                <Eye className="h-3 w-3" />
                {formatCount(viewCount)}
            </span>
            <span className="flex items-center gap-1.5">
              <ThumbsUp className="h-3 w-3" />
              {formatCount(likeCount)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
