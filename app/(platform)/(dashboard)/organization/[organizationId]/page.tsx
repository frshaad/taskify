import OrgControl from "./_components/OrgControl";

type Props = {
  params: { organizationId: string };
};

export default function OrganizationPage({
  params: { organizationId },
}: Props) {
  return (
    <div>
      <OrgControl />
      {organizationId}
    </div>
  );
}
