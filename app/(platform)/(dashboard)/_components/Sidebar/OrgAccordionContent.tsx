"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Organization } from "./NavItem";

type Props = {
  organization: Organization;
};

export default function OrgAccordionContent({ organization }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { organizationId } = useParams();
  const { setActive } = useOrganizationList();

  function onClick(href: string) {
    if (setActive) {
      setActive({
        organization: organization.id as string,
      });
    }
    router.push(href);
  }

  const ROUTES = [
    {
      label: "Boards",
      icon: <Layout className="mr-2 h-4 w-4" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="mr-2 h-4 w-4" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  return (
    <>
      {ROUTES.map((route) => (
        <Button
          key={route.href}
          size="sm"
          onClick={() => onClick(route.href)}
          className={cn(
            "w-full font-normal justify-start pl-10 mb-1",
            pathname === route.href && "bg-sky-500/10 text-sky-700",
          )}
          variant="ghost"
        >
          {route.icon}
          {route.label}
        </Button>
      ))}
    </>
  );
}
