import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Search } from "lucide-react";

const Logo = () => (
  <Link href="/" className="flex shrink-0 items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
      <span className="font-headline text-lg font-bold text-background">M</span>
    </div>
    <span className="font-headline text-2xl font-bold text-white">Movia</span>
  </Link>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <Logo />
        <div className="hidden flex-1 justify-center px-8 md:flex lg:px-16">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search films, lists, members..."
              className="h-10 w-full rounded-full border-2 border-border bg-[#2C3440] pl-11 focus:border-primary focus:ring-0"
            />
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">
            Sign In
          </Link>
          <Button variant="default" className="rounded-md font-bold">
            Create Account
          </Button>
        </div>
      </div>
    </header>
  );
}
