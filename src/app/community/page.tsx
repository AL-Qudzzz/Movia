import { Header } from "@/components/movia/header";
import { Footer } from "@/components/movia/footer";
import { MemberCard } from "@/components/movia/member-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const members = [
  {
    name: "Alex Ryder",
    avatarUrl: "https://placehold.co/64x64.png",
    avatarHint: "man smiling",
    filmsWatched: 1250,
    listsCount: 42,
    followersCount: 1200,
    favoriteFilms: [
      { imageUrl: "https://placehold.co/100x150.png", imageHint: "man hat", title: "Oppenheimer" },
      { imageUrl: "https://placehold.co/100x151.png", imageHint: "desert planet", title: "Dune" },
      { imageUrl: "https://placehold.co/100x152.png", imageHint: "woman surreal", title: "Poor Things" },
      { imageUrl: "https://placehold.co/100x153.png", imageHint: "spiderman animation", title: "Spider-Man" },
    ],
  },
  {
    name: "Cinephile Jane",
    avatarUrl: "https://placehold.co/64x65.png",
    avatarHint: "woman glasses",
    filmsWatched: 2345,
    listsCount: 120,
    followersCount: 5600,
    favoriteFilms: [
      { imageUrl: "https://placehold.co/100x154.png", imageHint: "woman smoke", title: "Pulp Fiction" },
      { imageUrl: "https://placehold.co/100x155.png", imageHint: "man suit", title: "The Godfather" },
      { imageUrl: "https://placehold.co/100x156.png", imageHint: "pink world", title: "Barbie" },
      { imageUrl: "https://placehold.co/100x157.png", imageHint: "man woman city", title: "Past Lives" },
    ],
  },
    {
    name: "MovieMan",
    avatarUrl: "https://placehold.co/64x66.png",
    avatarHint: "man beard",
    filmsWatched: 876,
    listsCount: 15,
    followersCount: 500,
    favoriteFilms: [
      { imageUrl: "https://placehold.co/100x158.png", imageHint: "monster city", title: "Godzilla Minus One" },
      { imageUrl: "https://placehold.co/100x159.png", imageHint: "robot city", title: "Blade Runner" },
      { imageUrl: "https://placehold.co/100x160.png", imageHint: "space station", title: "2001 A Space Odyssey" },
      { imageUrl: "https://placehold.co/100x161.png", imageHint: "haunted house", title: "The Shining" },
    ],
  },
  {
    name: "SarahLovesFilm",
    avatarUrl: "https://placehold.co/64x67.png",
    avatarHint: "woman laughing",
    filmsWatched: 543,
    listsCount: 88,
    followersCount: 2300,
    favoriteFilms: [
      { imageUrl: "https://placehold.co/100x162.png", imageHint: "romantic couple", title: "La La Land" },
      { imageUrl: "https://placehold.co/100x163.png", imageHint: "animated castle", title: "Howl's Moving Castle" },
      { imageUrl: "https://placehold.co/100x164.png", imageHint: "woman paris", title: "Amelie" },
      { imageUrl: "https://placehold.co/100x165.png", imageHint: "teacher student", title: "The Holdovers" },
    ],
  },
];


const FilterDropdown = ({ label, options }: { label: string, options: string[] }) => (
    <Select>
        <SelectTrigger className="w-full border-2 border-border bg-secondary text-white font-medium gap-2">
            <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
            {options.map(option => <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>)}
        </SelectContent>
    </Select>
);

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      <Header activePage="Community" />
      <main className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mb-8 font-headline text-3xl font-bold">Community</h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          
          <aside className="col-span-1 lg:pr-8">
            <div className="sticky top-24 space-y-4">
              <h2 className="font-headline text-lg font-semibold">Filter & Sort</h2>
              <div className="relative">
                <Input placeholder="Search members..." className="w-full bg-secondary pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              <FilterDropdown label="Level" options={["Any", "Patron", "Pro", "Member"]} />
              <div>
                <label className="text-sm font-medium text-muted-foreground">Sort By</label>
                <Select defaultValue="popular">
                    <SelectTrigger className="w-full mt-1 bg-secondary">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="popular">Popularity</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="most_films">Most Films</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </div>
          </aside>

          <section className="col-span-1 space-y-6 lg:col-span-3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {members.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}