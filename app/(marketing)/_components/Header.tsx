import Link from "next/link";

import { Logo } from "@/components/global";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
      <div className=" mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />

        <div className="flex w-full items-center justify-between gap-4 md:w-auto">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
