"use client";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import NavItem, { Organization } from "./NavItem";
import SidebarSkeleton from "./Sidebar.skeleton";

type Props = {
  storageKey?: string;
};

export default function Sidebar({
  storageKey = "desktop-sidebar-expansion-state",
}: Props) {
  const [orgsExpansionState, setOrgsExpansionState] = useLocalStorage<
    Record<string, boolean>
  >(storageKey, {});

  const { organization: actioveOrg, isLoaded: isOrgLoaded } = useOrganization();
  const { userMemberships, isLoaded: isOrgListLoaded } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  const accordionDefaultValues: string[] = Object.keys(
    orgsExpansionState,
  ).reduce((acc: string[], key: string) => {
    if (orgsExpansionState[key]) {
      acc.push(key);
    }
    return acc;
  }, []);

  const onExpand = useCallback(
    (id: string) => {
      setOrgsExpansionState((curr) => ({
        ...curr,
        [id]: !orgsExpansionState[id],
      }));
    },
    [orgsExpansionState, setOrgsExpansionState],
  );

  const SidebarAccordion = () => (
    <Accordion
      type="multiple"
      defaultValue={accordionDefaultValues}
      className="space-y-2"
    >
      {userMemberships.data?.map(({ organization }) => (
        <NavItem
          key={organization.id}
          isActive={actioveOrg?.id === organization.id}
          isExpanded={orgsExpansionState[organization.id]}
          organization={organization as unknown as Organization}
          onExpand={onExpand}
        />
      ))}
    </Accordion>
  );

  return (
    <>
      <div className="mb-1 flex items-center text-xs font-medium">
        <span className="pl-4 text-sm font-semibold">Workspaces</span>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          asChild
          className="ml-auto"
        >
          <Link href="/organization-setup">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {isOrgLoaded && isOrgListLoaded && !userMemberships.isLoading ? (
        <SidebarAccordion />
      ) : (
        <SidebarSkeleton />
      )}
    </>
  );
}
