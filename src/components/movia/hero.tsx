import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Man looking over a landscape"
        data-ai-hint="man landscape"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-bold md:text-5xl lg:text-6xl">
            Track films you've watched.
          </h1>
          <h2 className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground md:text-xl">
            Save those you want to see, tell your friends what's good.
          </h2>
          <Button size="lg" className="mt-8 rounded-md px-8 py-3 font-bold">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
}
