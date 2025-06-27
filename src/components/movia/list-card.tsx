import { Card, CardContent } from "@/components/ui/card";
import { Film, ThumbsUp } from "lucide-react";
import Link from "next/link";

type ListCardProps = {
  title: string;
  author: string;
  filmCount: number;
  likeCount: number;
};

export function ListCard({ title, author, filmCount, likeCount }: ListCardProps) {
  return (
    <Link href="#" className="block">
      <Card className="border-0 bg-secondary transition-colors hover:bg-border/70">
        <CardContent className="p-4">
          <h4 className="truncate font-medium text-white">{title}</h4>
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
