import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type FilmCardProps = {
  title: string;
  year: string;
  rating: number;
  imageUrl: string;
  imageHint: string;
};

export function FilmCard({ title, year, rating, imageUrl, imageHint }: FilmCardProps) {
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
      <div className="mt-3">
        <h3 className="truncate font-body text-base font-medium text-white group-hover:text-primary">
          {title}
        </h3>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{year}</p>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-primary" fill="currentColor" />
            <span className="text-sm text-muted-foreground">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
