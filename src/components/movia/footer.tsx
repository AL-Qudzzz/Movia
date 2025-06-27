import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
      <span className="font-headline text-lg font-bold text-background">M</span>
    </div>
    <span className="font-headline text-2xl font-bold text-white">Movia</span>
  </Link>
);

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              The social network for film lovers.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold text-white">Films</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground transition-colors hover:text-white">Popular</Link></li>
              <li><Link href="#" className="text-muted-foreground transition-colors hover:text-white">Recent</Link></li>
              <li><Link href="#" className="text-muted-foreground transition-colors hover:text-white">Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold text-white">Community</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground transition-colors hover:text-white">Members</Link></li>
              <li><Link href="#" className="text-muted-foreground transition-colors hover:text-white">Lists</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold text-white">Support</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground transition-colors hover:text-white">Help</Link></li>
              <li><Link href="#" className="text-muted-foreground transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-border/50" />
        <p className="text-center text-sm text-muted-foreground">
          © 2024 Movia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
