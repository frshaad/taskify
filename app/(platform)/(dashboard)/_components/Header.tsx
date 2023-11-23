import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Logo } from "@/components/global";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
      {/* TODO: Mobile sidebar */}
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <div>
          {/* On desktop and tablet: */}
          <div className="hidden items-center gap-4 md:flex">
            <Logo />
            <Button size="sm" className="h-auto rounded-sm px-2 py-1.5">
              Create
            </Button>
          </div>
          {/* On mobile: */}
          <Button size="sm" className="block rounded-sm md:hidden">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterSelectOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/organization-setup"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}
