import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Logo = () => (
  <Link href="/" className="flex shrink-0 items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d84cfb]">
      <span className="font-headline text-lg font-bold text-white">M</span>
    </div>
    <span className="font-headline text-2xl font-bold text-white">Movia</span>
  </Link>
);

export function Header({ activePage }: { activePage?: string }) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/films", label: "Film" },
    { href: "#", label: "Review" },
    { href: "#", label: "List" },
    { href: "#", label: "Community" },
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
                className="h-10 w-64 rounded-full border-2 border-border bg-secondary pl-11 focus:border-primary focus:ring-0"
              />
            </div>

            <div className="hidden shrink-0 items-center gap-4 md:flex">
              <Link href="/login" className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">
                Sign In
              </Link>
              <Button asChild variant="default" className="rounded-md font-bold">
                <Link href="/signup">Create Account</Link>
              </Button>
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
                       <Link href="/login" className="w-full text-center">
                          <Button variant="outline" className="w-full">Sign In</Button>
                        </Link>
                        <Link href="/signup" className="w-full text-center">
                          <Button className="w-full">Create Account</Button>
                        </Link>
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
                <Button key={link.label} variant={activePage === link.label ? "secondary" : "default"} asChild>
                   <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </nav>
        </div>
      </div>
    </header>
  );
}
