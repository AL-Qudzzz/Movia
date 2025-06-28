import { Card, CardContent } from "@/components/ui/card";
import { Film, ThumbsUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ListCardProps = {
  title: string;
  author: string;
  filmCount: number;
  likeCount: number;
  filmPosters?: { url: string; hint: string }[];
};

export function ListCard({ title, author, filmCount, likeCount, filmPosters }: ListCardProps) {
  return (
    <Link href="#" className="block group">
      <Card className="border-0 bg-secondary transition-colors hover:bg-border/70 overflow-hidden rounded-lg">
        {filmPosters && filmPosters.length > 0 && (
          <div className="grid grid-cols-4 h-32 border-b-4 border-background">
            {filmPosters.slice(0, 4).map((poster, index) => (
              <div key={index} className="relative">
                <Image
                  src={poster.url}
                  alt={`Poster for ${title}`}
                  data-ai-hint={poster.hint}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
        <CardContent className="p-4">
          <h4 className="truncate font-medium text-white group-hover:text-primary transition-colors">{title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">by {author}</p>
          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Film className="h-3 w-3" />
              {filmCount} films
            </span>
            <span className="flex items-center gap-1.5">
              <ThumbsUp className="h-3 w-3" />
              {likeCount.toLocaleString()} likes
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}