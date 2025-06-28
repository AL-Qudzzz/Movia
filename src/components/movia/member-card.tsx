import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Film, List, Users } from "lucide-react";

type MemberCardProps = {
  name: string;
  avatarUrl: string;
  avatarHint: string;
  filmsWatched: number;
  listsCount: number;
  followersCount: number;
  favoriteFilms: {
    imageUrl: string;
    imageHint: string;
    title: string;
  }[];
};

export function MemberCard({
  name,
  avatarUrl,
  avatarHint,
  filmsWatched,
  listsCount,
  followersCount,
  favoriteFilms,
}: MemberCardProps) {
  const formatCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <Card className="border-0 bg-secondary overflow-hidden rounded-lg">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src={avatarUrl} alt={name} data-ai-hint={avatarHint} />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-headline text-lg font-semibold text-white">{name}</h3>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
              <span className="flex items-center gap-1.5">
                <Film className="h-3 w-3" />
                {formatCount(filmsWatched)} Films
              </span>
              <span className="flex items-center gap-1.5">
                <List className="h-3 w-3" />
                {listsCount} Lists
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-3 w-3" />
                {formatCount(followersCount)}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {favoriteFilms.slice(0, 4).map((film, index) => (
            <div key={index} className="aspect-[2/3] overflow-hidden rounded-md">
              <Image
                src={film.imageUrl}
                alt={film.title}
                data-ai-hint={film.imageHint}
                width={100}
                height={150}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}