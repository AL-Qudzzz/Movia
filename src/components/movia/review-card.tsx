import { Star } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ReviewCardProps = {
  username: string;
  userAvatarUrl: string;
  filmTitle: string;
  rating: number;
  reviewText: string;
};

export function ReviewCard({ username, userAvatarUrl, filmTitle, rating, reviewText }: ReviewCardProps) {
  return (
    <Card className="border-0 bg-secondary">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10 border-2 border-border">
            <AvatarImage src={userAvatarUrl} alt={username} />
            <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Link href="#" className="font-medium text-white hover:underline">
                {username}
              </Link>
              <span className="text-sm text-muted-foreground">reviewed</span>
              <Link href="#" className="font-medium text-primary hover:underline">
                {filmTitle}
              </Link>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? 'text-primary' : 'text-muted-foreground/30'}`}
                    fill={i < rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground/80 italic">
              &ldquo;{reviewText}&rdquo;
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
