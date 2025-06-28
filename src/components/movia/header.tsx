'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Menu, Search, User, LogOut, Settings } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/use-auth";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "../ui/skeleton";

const Logo = () => (
  <Link href="/" className="flex shrink-0 items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
      <span className="font-headline text-lg font-bold text-background">M</span>
    </div>
    <span className="font-headline text-2xl font-bold text-white">Movia</span>
  </Link>
);


function UserNavigation() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/');
  };

  if (loading) {
    return <Skeleton className="h-10 w-10 rounded-full" />;
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={`https://i.pravatar.cc/150?u=${user.uid}`} alt={user.displayName ?? "User"} />
              <AvatarFallback>{user.email?.[0].toUpperCase() ?? 'U'}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.displayName || "My Account"}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile"><User className="mr-2 h-4 w-4" />Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <>
      <Link
        href="/login"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
      >
        Sign In
      </Link>
      <Button asChild variant="default" className="rounded-md font-bold">
        <Link href="/signup">Create Account</Link>
      </Button>
    </>
  );
}


function MobileUserNavigation() {
    const { user, loading } = useAuth();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut(auth);
        router.push('/');
    };
    
    if (loading) {
        return (
            <div className="flex flex-col gap-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
            </div>
        )
    }

    if (!user) {
        return (
            <>
                <Button variant="outline" className="w-full" asChild><Link href="/login">Sign In</Link></Button>
                <Button className="w-full" asChild><Link href="/signup">Create Account</Link></Button>
            </>
        )
    }

    return (
        <>
            <Button variant="outline" className="w-full" asChild><Link href="/profile">Profile</Link></Button>
            <Button className="w-full" onClick={handleSignOut}>Sign Out</Button>
        </>
    )
}

export function Header({ activePage }: { activePage?: string }) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/films", label: "Film" },
    { href: "/review", label: "Review" },
    { href: "/list", label: "List" },
    { href: "/community", label: "Community" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="border-b border-border bg-secondary">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
          <Logo />

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search films, lists, members..."
                className="h-10 w-64 rounded-full border-2 border-border bg-secondary pl-11 focus-visible:ring-primary focus-visible:ring-0"
              />
            </div>

            <div className="hidden shrink-0 items-center gap-4 md:flex">
              <UserNavigation />
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background">
                  <div className="flex h-full flex-col p-6">
                    <div className="mb-8">
                      <Logo />
                    </div>
                    <nav className="flex flex-col gap-4">
                       {navLinks.map(link => (
                        <Button key={link.label} variant={activePage === link.label ? "secondary" : "default"} asChild>
                           <Link href={link.href}>{link.label}</Link>
                        </Button>
                      ))}
                    </nav>
                    <div className="mt-auto flex flex-col gap-4">
                       <MobileUserNavigation />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden border-b border-border bg-background/80 backdrop-blur-sm md:block">
        <div className="container mx-auto">
            <nav className="flex items-center justify-center gap-2 py-2 md:gap-4">
              {navLinks.map(link => (
                <Button key={link.label} variant={activePage === link.label ? "secondary" : "default"} className="w-24" asChild>
                   <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </nav>
        </div>
      </div>
    </header>
  );
}
