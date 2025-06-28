import { Header } from "@/components/movia/header";
import { Hero } from "@/components/movia/hero";
import { FilmCard } from "@/components/movia/film-card";
import { ReviewCard } from "@/components/movia/review-card";
import { ListCard } from "@/components/movia/list-card";
import { Footer } from "@/components/movia/footer";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

const popularFilms = [
  { title: "Dune: Part Two", year: "2024", rating: 4.5, imageUrl: "https://placehold.co/300x450.png", imageHint: "desert planet" },
  { title: "Oppenheimer", year: "2023", rating: 4.8, imageUrl: "https://placehold.co/300x451.png", imageHint: "man hat" },
  { title: "Poor Things", year: "2023", rating: 4.2, imageUrl: "https://placehold.co/300x452.png", imageHint: "woman surreal" },
  { title: "Godzilla Minus One", year: "2023", rating: 4.6, imageUrl: "https://placehold.co/300x453.png", imageHint: "monster city" },
  { title: "The Holdovers", year: "2023", rating: 4.3, imageUrl: "https://placehold.co/300x454.png", imageHint: "teacher student" },
];

const recentReviews = [
  { username: "cinemaphile", userAvatarUrl: "https://placehold.co/40x40.png", filmTitle: "Civil War", rating: 4, reviewText: "A visceral and thought-provoking look at a modern American conflict. The sound design is incredible and will leave you shaken." },
  { username: "moviebuff_jane", userAvatarUrl: "https://placehold.co/40x41.png", filmTitle: "Challengers", rating: 5, reviewText: "Electrifying! The chemistry between the leads is off the charts. A tense, sexy, and brilliantly edited sports drama." },
  { username: "film_fanatic", userAvatarUrl: "https://placehold.co/40x42.png", filmTitle: "Anatomy of a Fall", rating: 5, reviewText: "A masterclass in courtroom drama and character study. Sandra Hüller's performance is simply unforgettable. Left me thinking for days." },
];

const popularLists = [
  { title: "Best Films of 2023", author: "letterboxd", filmCount: 50, likeCount: 12345 },
  { title: "A24 Masterpieces", author: "indie_lover", filmCount: 25, likeCount: 8765 },
  { title: "Mind-Bending Sci-Fi", author: "scifiguy", filmCount: 100, likeCount: 23456 },
];

const justReviewed = [
  { title: "Kingdom of the Planet of the Apes", rating: 4, imageUrl: "https://placehold.co/150x225.png", imageHint: "ape horse" },
  { title: "The Fall Guy", rating: 3, imageUrl: "https://placehold.co/150x226.png", imageHint: "man sunglasses" },
  { title: "Furiosa: A Mad Max Saga", rating: 5, imageUrl: "https://placehold.co/150x227.png", imageHint: "woman desert" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#14181C]">
      <Header activePage="Home" />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-3">
            <div className="space-y-16 lg:col-span-2">
              <section>
                <div className="mb-4 flex items-baseline justify-between">
                  <h2 className="font-headline text-2xl font-semibold text-white">Popular this week</h2>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">More</Link>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                  {popularFilms.map((film) => (
                    <Link href="#" key={film.title}>
                      <FilmCard {...film} />
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-4 font-headline text-2xl font-semibold text-white">Recent reviews</h2>
                <div className="space-y-6">
                  {recentReviews.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </div>
              </section>
            </div>
            
            <aside className="space-y-16">
              <section>
                <div className="mb-4 flex items-baseline justify-between">
                  <h3 className="font-headline text-xl font-semibold text-white">Popular lists</h3>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">More</Link>
                </div>
                <div className="space-y-4">
                  {popularLists.map((list) => (
                    <ListCard key={list.title} {...list} />
                  ))}
                </div>
              </section>
              
              <section>
                <h3 className="font-headline text-xl font-semibold text-white">Just reviewed</h3>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {justReviewed.map((film) => (
                    <Link href="#" key={film.title} className="group">
                      <div className="aspect-[2/3] overflow-hidden rounded-md">
                        <Image
                          src={film.imageUrl}
                          alt={film.title}
                          data-ai-hint={film.imageHint}
                          width={150}
                          height={225}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < film.rating ? 'text-primary' : 'text-muted-foreground/30'}`}
                            fill={i < film.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
