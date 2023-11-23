import { Medal } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { headingFont, poppins } from "@/fonts";
import { cn } from "@/lib/utils";

export default function MarketingPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border bg-amber-100 p-4 text-amber-700 shadow-sm",
          headingFont.className,
        )}
      >
        <Medal className="h-6 w-6" />
        <h3 className="uppercase tracking-wider">No 1 task manager</h3>
      </div>

      <h1
        className={cn(
          "flex flex-col items-center gap-5 text-3xl text-neutral-800 md:text-6xl",
          headingFont.className,
        )}
      >
        Taskify helps team move
        <span className="w-fit rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 p-4 pt-2 text-3xl text-white md:text-6xl">
          work forward.
        </span>
      </h1>

      <p
        className={cn(
          "max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl",
          poppins.className,
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </p>

      <Button className="mt-2" size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </section>
  );
}
