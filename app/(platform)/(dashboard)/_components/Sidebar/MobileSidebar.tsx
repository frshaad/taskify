"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";

import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const { isSidebarOpen, closeSidebar, openSidebar } = useMobileSidebar();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    closeSidebar();
  }, [closeSidebar, pathname]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={openSidebar}
        className="mr-2 block md:hidden"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isSidebarOpen} onOpenChange={closeSidebar}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="mobile-sidebar-expansion-statee" />
        </SheetContent>
      </Sheet>
    </>
  );
}
