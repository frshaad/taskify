type Props = {
  children: React.ReactNode;
};

export default function OrganizationLayout({ children }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-24 2xl:max-w-screen-xl">
      <div className="flex gap-7">
        <aside className="hidden w-64 shrink-0 md:block"></aside>{" "}
        {/* sidebar */}
        {children}
      </div>
    </section>
  );
}
