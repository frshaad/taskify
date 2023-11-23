import { Logo } from "@/components/global";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full border-t bg-slate-100 p-4">
      <div className=" mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />

        <div className="flex w-full items-center justify-between gap-4 md:w-auto">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </footer>
  );
}
