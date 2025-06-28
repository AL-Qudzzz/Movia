import { Header } from "@/components/movia/header";
import { Footer } from "@/components/movia/footer";
import { FilmCard } from "@/components/movia/film-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const popularFilms = [
  { title: "Oppenheimer", year: "2023", rating: 4.2, imageUrl: "https://placehold.co/180x270.png", imageHint: "man hat", viewCount: 1200000, likeCount: 100000 },
  { title: "Barbie", year: "2023", rating: 3.8, imageUrl: "https://placehold.co/180x271.png", imageHint: "pink world", viewCount: 1200000, likeCount: 100000 },
  { title: "The Godfather", year: "1972", rating: 4.6, imageUrl: "https://placehold.co/180x272.png", imageHint: "man suit", viewCount: 1200000, likeCount: 100000 },
  { title: "Pulp Fiction", year: "1994", rating: 4.4, imageUrl: "https://placehold.co/180x273.png", imageHint: "woman smoke", viewCount: 1200000, likeCount: 100000 },
  { title: "Parasite", year: "2019", rating: 4.3, imageUrl: "https://placehold.co/180x274.png", imageHint: "family portrait", viewCount: 1200000, likeCount: 100000 },
  { title: "Dune", year: "2021", rating: 4.0, imageUrl: "https://placehold.co/180x275.png", imageHint: "desert planet", viewCount: 1200000, likeCount: 100000 },
];

const newestFilms = [
  { title: "Dune: Part Two", year: "2024", rating: 4.5, imageUrl: "https://placehold.co/180x276.png", imageHint: "desert planet", viewCount: 1200000, likeCount: 100000 },
  { title: "Oppenheimer", year: "2023", rating: 4.8, imageUrl: "https://placehold.co/180x270.png", imageHint: "man hat", viewCount: 1200000, likeCount: 100000 },
  { title: "Poor Things", year: "2023", rating: 4.2, imageUrl: "https://placehold.co/180x277.png", imageHint: "woman surreal", viewCount: 1200000, likeCount: 100000 },
  { title: "Godzilla Minus One", year: "2023", rating: 4.6, imageUrl: "https://placehold.co/180x278.png", imageHint: "monster city", viewCount: 1200000, likeCount: 100000 },
  { title: "The Holdovers", year: "2023", rating: 4.3, imageUrl: "https://placehold.co/180x279.png", imageHint: "teacher student", viewCount: 1200000, likeCount: 100000 },
  { title: "Anatomy of a Fall", year: "2023", rating: 4.4, imageUrl: "https://placehold.co/180x280.png", imageHint: "courtroom drama", viewCount: 1200000, likeCount: 100000 },
];

const highestRatedFilms = [
  { title: "Spider-Man: Across the Spider-Verse", year: "2023", rating: 4.9, imageUrl: "https://placehold.co/180x281.png", imageHint: "spiderman animation", viewCount: 1200000, likeCount: 100000 },
  { title: "Oppenheimer", year: "2023", rating: 4.8, imageUrl: "https://placehold.co/180x270.png", imageHint: "man hat", viewCount: 1200000, likeCount: 100000 },
  { title: "Past Lives", year: "2023", rating: 4.7, imageUrl: "https://placehold.co/180x282.png", imageHint: "man woman city", viewCount: 1200000, likeCount: 100000 },
  { title: "Godzilla Minus One", year: "2023", rating: 4.6, imageUrl: "https://placehold.co/180x278.png", imageHint: "monster city", viewCount: 1200000, likeCount: 100000 },
  { title: "Dune: Part Two", year: "2024", rating: 4.5, imageUrl: "https://placehold.co/180x276.png", imageHint: "desert planet", viewCount: 1200000, likeCount: 100000 },
  { title: "Anatomy of a Fall", year: "2023", rating: 4.4, imageUrl: "https://placehold.co/180x280.png", imageHint: "courtroom drama", viewCount: 1200000, likeCount: 100000 },
];

const FilterDropdown = ({ label, options }: { label: string, options: string[] }) => (
    <Select>
        <SelectTrigger className="w-auto border-2 border-border bg-transparent text-white font-medium gap-2">
            <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
            {options.map(option => <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>)}
        </SelectContent>
    </Select>
);

export default function FilmsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#14181C] text-white">
      <Header activePage="Film" />
      <main className="flex-grow">
        <section className="relative h-[30vh] min-h-[250px] w-full">
            <Image
                src="https://placehold.co/1920x480.png"
                alt="Film collage background"
                data-ai-hint="film movie"
                fill
                className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14181C] via-transparent to-transparent" />
        </section>

        <div className="relative z-10 container mx-auto -mt-16 px-4 py-8 md:px-6">
            {/* Filter Section */}
            <section className="mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <Button variant="outline" className="border-2 border-primary text-primary">Filter</Button>
                        <FilterDropdown label="Year" options={["Any", "2024", "2023", "2022"]} />
                        <FilterDropdown label="Genre" options={["Any", "Action", "Drama", "Sci-Fi"]} />
                        <FilterDropdown label="Rating" options={["Any", "4+", "3+", "2+"]} />
                    </div>
                    <div className="flex items-center gap-2">
                        <Select defaultValue="popularity">
                            <SelectTrigger className="w-[150px] bg-transparent border-0 text-white font-medium">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="popularity">Popularity</SelectItem>
                                <SelectItem value="newest">Newest</SelectItem>
                                <SelectItem value="rating">Highest Rated</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="relative">
                            <Input placeholder="Search" className="w-48 bg-secondary pr-10 rounded-md" />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="mb-12">
              <div className="mb-4 flex items-baseline justify-between">
                <h2 className="font-headline text-2xl font-semibold text-white">Popular this week</h2>
                <Link href="#" className="text-sm font-medium text-primary hover:underline">More</Link>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {popularFilms.map((film) => (
                    <FilmCard key={film.title} {...film} />
                ))}
              </div>
            </section>
            
            <section className="mb-12">
              <div className="mb-4 flex items-baseline justify-between">
                <h2 className="font-headline text-2xl font-semibold text-white">Newest Released</h2>
                <Link href="#" className="text-sm font-medium text-primary hover:underline">More</Link>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {newestFilms.map((film) => (
                    <FilmCard key={film.title} {...film} />
                ))}
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-baseline justify-between">
                <h2 className="font-headline text-2xl font-semibold text-white">Highest Rated Film</h2>
                <Link href="#" className="text-sm font-medium text-primary hover:underline">More</Link>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {highestRatedFilms.map((film) => (
                    <FilmCard key={film.title} {...film} />
                ))}
              </div>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
