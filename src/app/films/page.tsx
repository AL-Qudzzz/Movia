import { Header } from "@/components/movia/header";
import { Footer } from "@/components/movia/footer";
import { FilmCard } from "@/components/movia/film-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const films = [
  { title: "Dune: Part Two", year: "2024", rating: 4.5, imageUrl: "https://placehold.co/300x450.png", imageHint: "desert planet" },
  { title: "Oppenheimer", year: "2023", rating: 4.8, imageUrl: "https://placehold.co/300x451.png", imageHint: "man hat" },
  { title: "Poor Things", year: "2023", rating: 4.2, imageUrl: "https://placehold.co/300x452.png", imageHint: "woman surreal" },
  { title: "Godzilla Minus One", year: "2023", rating: 4.6, imageUrl: "https://placehold.co/300x453.png", imageHint: "monster city" },
  { title: "The Holdovers", year: "2023", rating: 4.3, imageUrl: "https://placehold.co/300x454.png", imageHint: "teacher student" },
  { title: "Anatomy of a Fall", year: "2023", rating: 4.4, imageUrl: "https://placehold.co/300x455.png", imageHint: "courtroom drama" },
  { title: "Past Lives", year: "2023", rating: 4.7, imageUrl: "https://placehold.co/300x456.png", imageHint: "man woman city" },
  { title: "Killers of the Flower Moon", year: "2023", rating: 4.1, imageUrl: "https://placehold.co/300x457.png", imageHint: "native american" },
  { title: "Spider-Man: Across the Spider-Verse", year: "2023", rating: 4.9, imageUrl: "https://placehold.co/300x458.png", imageHint: "spiderman animation" },
  { title: "The Zone of Interest", year: "2023", rating: 4.0, imageUrl: "https://placehold.co/300x459.png", imageHint: "house garden" },
  { title: "Barbie", year: "2023", rating: 3.9, imageUrl: "https://placehold.co/300x460.png", imageHint: "pink world" },
  { title: "May December", year: "2023", rating: 3.8, imageUrl: "https://placehold.co/300x461.png", imageHint: "two women" },
];

export default function FilmsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#14181C]">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="font-headline text-4xl font-bold text-white">Films</h1>
          </div>

          <Tabs defaultValue="popular" className="w-full">
            <TabsList className="mb-8 grid w-full max-w-sm grid-cols-4 bg-secondary">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="a-z">A-Z</TabsTrigger>
              <TabsTrigger value="you" disabled>You</TabsTrigger>
            </TabsList>
            <TabsContent value="popular">
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {films.map((film) => (
                  <Link href="#" key={film.title}>
                    <FilmCard {...film} />
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="new">
                 <div className="flex items-center justify-center py-16">
                    <p className="text-muted-foreground">New films will be available here soon!</p>
                 </div>
            </TabsContent>
            <TabsContent value="a-z">
                 <div className="flex items-center justify-center py-16">
                    <p className="text-muted-foreground">Alphabetical sorting will be available here soon!</p>
                 </div>
            </TabsContent>
            <TabsContent value="you">
                 <div className="flex items-center justify-center py-16">
                    <p className="text-muted-foreground">Your personalized film list will be available here soon!</p>
                 </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
