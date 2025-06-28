import { Header } from "@/components/movia/header";
import { Footer } from "@/components/movia/footer";
import { ListCard } from "@/components/movia/list-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, PlusCircle } from "lucide-react";

const popularLists = [
  {
    title: "Best Films of 2023",
    author: "letterboxd",
    filmCount: 50,
    likeCount: 12345,
    filmPosters: [
      { url: "https://placehold.co/150x225.png", hint: "man hat" },
      { url: "https://placehold.co/150x226.png", hint: "pink world" },
      { url: "https://placehold.co/150x227.png", hint: "spiderman animation" },
      { url: "https://placehold.co/150x228.png", hint: "monster city" },
    ],
  },
  {
    title: "A24 Masterpieces",
    author: "indie_lover",
    filmCount: 25,
    likeCount: 8765,
    filmPosters: [
        { url: "https://placehold.co/150x229.png", hint: "woman surreal" },
        { url: "https://placehold.co/150x230.png", hint: "man woman city" },
        { url: "https://placehold.co/150x231.png", hint: "witch goat" },
        { url: "https://placehold.co/150x232.png", hint: "teenager phone" },
    ],
  },
  {
    title: "Mind-Bending Sci-Fi",
    author: "scifiguy",
    filmCount: 100,
    likeCount: 23456,
    filmPosters: [
        { url: "https://placehold.co/150x233.png", hint: "space station" },
        { url: "https://placehold.co/150x234.png", hint: "robot city" },
        { url: "https://placehold.co/150x235.png", hint: "time travel" },
        { url: "https://placehold.co/150x236.png", hint: "alien planet" },
    ],
  },
  {
    title: "Ultimate Horror Collection",
    author: "spookyfan",
    filmCount: 200,
    likeCount: 15678,
    filmPosters: [
        { url: "https://placehold.co/150x237.png", hint: "haunted house" },
        { url: "https://placehold.co/150x238.png", hint: "scary clown" },
        { url: "https://placehold.co/150x239.png", hint: "forest night" },
        { url: "https://placehold.co/150x240.png", hint: "zombie horde" },
    ],
  },
    {
    title: "Comfort Movie Marathon",
    author: "cozywatcher",
    filmCount: 30,
    likeCount: 9876,
    filmPosters: [
      { url: "https://placehold.co/150x241.png", hint: "cup coffee" },
      { url: "https://placehold.co/150x242.png", hint: "animated castle" },
      { url: "https://placehold.co/150x243.png", hint: "romantic couple" },
      { url: "https://placehold.co/150x244.png", hint: "dog friend" },
    ],
  },
  {
    title: "Laugh Out Loud Comedies",
    author: "jokester",
    filmCount: 75,
    likeCount: 11223,
    filmPosters: [
      { url: "https://placehold.co/150x245.png", hint: "man laughing" },
      { url: "https://placehold.co/150x246.png", hint: "funny situation" },
      { url: "https://placehold.co/150x247.png", hint: "party scene" },
      { url: "https://placehold.co/150x248.png", hint: "stand up comedy" },
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

export default function ListPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      <Header activePage="List" />
      <main className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mb-8 font-headline text-3xl font-bold">Lists</h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          
          <aside className="col-span-1 lg:pr-8">
            <div className="sticky top-24 space-y-4">
              <h2 className="font-headline text-lg font-semibold">Filter & Sort</h2>
              <div className="relative">
                <Input placeholder="Search lists..." className="w-full bg-secondary pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              <FilterDropdown label="Year" options={["Any", "2024", "2023", "2022"]} />
              <FilterDropdown label="Tag" options={["Any", "Official", "Horror", "Comedy"]} />
              <div>
                <label className="text-sm font-medium text-muted-foreground">Sort By</label>
                <Select defaultValue="popular">
                    <SelectTrigger className="w-full mt-1 bg-secondary">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="likes">Most Likes</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </div>
          </aside>

          <section className="col-span-1 space-y-6 lg:col-span-3">
            <div className="flex justify-end mb-4">
                <Button>
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Create a new list
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {popularLists.map((list, index) => (
                <ListCard key={index} {...list} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}