import { Header } from "@/components/movia/header";
import { Footer } from "@/components/movia/footer";
import { DetailedReviewCard } from "@/components/movia/detailed-review-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const reviews = [
  {
    filmImageUrl: "https://placehold.co/150x225.png",
    filmImageHint: "man hat",
    filmTitle: "Oppenheimer",
    filmYear: "2023",
    userAvatarUrl: "https://placehold.co/40x40.png",
    username: "cinemaphile",
    userRating: 5,
    reviewText: "Christopher Nolan's magnum opus. A towering achievement in biographical filmmaking, anchored by a mesmerizing performance from Cillian Murphy. The Trinity Test sequence is one of the most awe-inspiring and terrifying things I've ever witnessed in a cinema. A must-see.",
    likeCount: 1200,
    commentCount: 45
  },
  {
    filmImageUrl: "https://placehold.co/150x226.png",
    filmImageHint: "pink world",
    filmTitle: "Barbie",
    filmYear: "2023",
    userAvatarUrl: "https://placehold.co/40x41.png",
    username: "moviebuff_jane",
    userRating: 4,
    reviewText: "Unexpectedly brilliant. Greta Gerwig crafts a hilarious, heartfelt, and surprisingly profound film that's so much more than just a toy commercial. Margot Robbie and Ryan Gosling are perfect. Laughed, cried, and left the theater feeling empowered.",
    likeCount: 2300,
    commentCount: 82
  },
  {
    filmImageUrl: "https://placehold.co/150x227.png",
    filmImageHint: "courtroom drama",
    filmTitle: "Anatomy of a Fall",
    filmYear: "2023",
    userAvatarUrl: "https://placehold.co/40x42.png",
    username: "film_fanatic",
    userRating: 5,
    reviewText: "A masterclass in courtroom drama and character study. Sandra Hüller's performance is simply unforgettable, carrying the weight of the film with incredible nuance. The script is razor-sharp, keeping you guessing until the very end. Left me thinking for days.",
    likeCount: 876,
    commentCount: 31
  },
  {
    filmImageUrl: "https://placehold.co/150x228.png",
    filmImageHint: "desert planet",
    filmTitle: "Dune: Part Two",
    filmYear: "2024",
    userAvatarUrl: "https://placehold.co/40x43.png",
    username: "sci-fi_guru",
    userRating: 5,
    reviewText: "An absolute epic. Denis Villeneuve has created a sci-fi masterpiece for the ages. The scale is immense, the visuals are breathtaking, and the world-building is second to none. Every frame is a painting. I was completely transported to Arrakis.",
    likeCount: 3100,
    commentCount: 154
  }
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

export default function ReviewPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      <Header activePage="Review" />
      <main className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mb-8 font-headline text-3xl font-bold">Reviews</h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          
          <aside className="col-span-1 lg:pr-8">
            <div className="sticky top-24 space-y-4">
              <h2 className="font-headline text-lg font-semibold">Filter & Sort</h2>
              <div className="relative">
                <Input placeholder="Search reviews..." className="w-full bg-secondary pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              <FilterDropdown label="Year" options={["Any", "2024", "2023", "2022"]} />
              <FilterDropdown label="Genre" options={["Any", "Action", "Drama", "Sci-Fi"]} />
              <FilterDropdown label="Rating" options={["Any", "5 Stars", "4 Stars", "3 Stars"]} />
              <div>
                <label className="text-sm font-medium text-muted-foreground">Sort By</label>
                <Select defaultValue="popular">
                    <SelectTrigger className="w-full mt-1 bg-secondary">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </div>
          </aside>

          <section className="col-span-1 space-y-6 lg:col-span-3">
            {reviews.map((review, index) => (
              <DetailedReviewCard key={index} {...review} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
