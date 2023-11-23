import Image from "next/image";
import Link from "next/link";

import { headingFont } from "@/fonts";
import { cn } from "@/lib/utils";

export default function Logo() {
  return (
    <Link
      href="/"
      className="hidden items-center gap-2 transition hover:opacity-75 md:flex"
    >
      <Image alt="taskify logo" src="/logo.svg" width={30} height={30} />
      <p className={cn("text-lg text-neutral-700", headingFont.className)}>
        Taskify
      </p>
    </Link>
  );
}
