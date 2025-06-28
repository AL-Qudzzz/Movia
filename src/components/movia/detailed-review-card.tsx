import Image from "next/image";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

type DetailedReviewCardProps = {
  filmImageUrl: string;
  filmImageHint: string;
  filmTitle: string;
  filmYear: string;
  userAvatarUrl: string;
  username: string;
  userRating: number;
  reviewText: string;
  likeCount: number;
  commentCount: number;
};

export function DetailedReviewCard({
  filmImageUrl,
  filmImageHint,
  filmTitle,
  filmYear,
  userAvatarUrl,
  username,
  userRating,
  reviewText,
  likeCount,
  commentCount,
}: DetailedReviewCardProps) {
  const formatCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <Card className="border-0 bg-secondary overflow-hidden">
      <CardContent className="p-0 flex">
        <div className="w-1/4 min-w-[120px] relative">
          <Image
            src={filmImageUrl}
            alt={filmTitle}
            data-ai-hint={filmImageHint}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex-1">
          <div className="flex items-baseline gap-2">
            <h3 className="font-headline text-xl font-semibold text-white">{filmTitle}</h3>
            <span className="text-sm text-muted-foreground">{filmYear}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={userAvatarUrl} alt={username} />
              <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-white">{username}</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < userRating ? 'text-primary' : 'text-muted-foreground/30'}`}
                  fill={i < userRating ? 'currentColor' : 'none'}
                />
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground/90 leading-relaxed">
            {reviewText}
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <ThumbsUp className="h-4 w-4" />
              {formatCount(likeCount)}
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <MessageCircle className="h-4 w-4" />
              {commentCount}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
