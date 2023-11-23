import { auth } from "@clerk/nextjs";

export default function OrganizationPage() {
  const { userId, orgId } = auth();

  return <div>{orgId}</div>;
}
