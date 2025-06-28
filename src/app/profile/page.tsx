'use client';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Film, List, Users, Calendar, Settings, Edit2 } from 'lucide-react';
import { FilmCard } from '@/components/movia/film-card';
import { Header } from '@/components/movia/header';
import { Footer } from '@/components/movia/footer';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div className="flex min-h-screen items-center justify-center bg-background text-white">Loading...</div>;
  }
  
  const stats = [
    { value: '1.2K', label: 'Films', icon: Film },
    { value: '876', label: 'This Year', icon: Calendar },
    { value: '42', label: 'Lists', icon: List },
    { value: '1.2K', label: 'Followers', icon: Users },
  ];

  const favoriteFilms = [
    { title: "Oppenheimer", year: "2023", rating: 4.8, imageUrl: "https://placehold.co/300x451.png", imageHint: "man hat" },
    { title: "Dune", year: "2021", rating: 4.0, imageUrl: "https://placehold.co/180x275.png", imageHint: "desert planet" },
    { title: "Poor Things", year: "2023", rating: 4.2, imageUrl: "https://placehold.co/300x452.png", imageHint: "woman surreal" },
    { title: "Spider-Man: Across the Spider-Verse", year: "2023", rating: 4.9, imageUrl: "https://placehold.co/180x281.png", imageHint: "spiderman animation" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 md:px-6">
        {/* Profile Header */}
        <section className="relative -mx-4 -mt-8 md:-mx-6">
          <Image
            src="https://placehold.co/1600x400.png"
            alt="Profile banner"
            data-ai-hint="cinema movie"
            width={1600}
            height={400}
            className="h-48 w-full object-cover md:h-64"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="relative mx-auto max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
            <div className="-mt-12 flex flex-col items-center sm:-mt-16 sm:flex-row sm:items-end sm:space-x-5">
              <Avatar className="h-24 w-24 border-4 border-background sm:h-32 sm:w-32">
                <AvatarImage src={`https://i.pravatar.cc/150?u=${user.uid}`} alt={user.displayName ?? 'User'} />
                <AvatarFallback>{user.email?.[0].toUpperCase() ?? 'U'}</AvatarFallback>
              </Avatar>
              <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="min-w-0 flex-1 sm:hidden md:block">
                  <h1 className="truncate text-center font-headline text-2xl font-bold text-white sm:text-left">
                    {user.displayName || user.email}
                  </h1>
                </div>
                <div className="mt-6 flex flex-col items-stretch justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Button>
                    <Edit2 className="-ml-1 mr-2 h-5 w-5" />
                    Edit Profile
                  </Button>
                  <Button variant="outline">
                    <Settings className="-ml-1 mr-2 h-5 w-5" />
                    Settings
                  </Button>
                </div>
              </div>
            </div>
             <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                <h1 className="truncate text-center font-headline text-2xl font-bold text-white sm:text-left">
                    {user.displayName || user.email}
                </h1>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 text-center sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="border-border p-4 first:pl-0 last:pr-0 sm:border-l">
                  <p className="font-headline text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-xl font-semibold">Favorite Films</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {favoriteFilms.map((film, index) => (
                <FilmCard key={index} {...film} />
              ))}
            </div>
            {/* Add Recent Activity, etc. here */}
          </div>
          <aside className="space-y-6">
            <div>
              <h3 className="font-headline text-lg font-semibold">Watching</h3>
              <p className="mt-2 text-sm text-muted-foreground">The social network for film lovers.</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
