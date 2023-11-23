import Header from "./_components/Header";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="h-full">
      <Header />
      <main>{children}</main>
    </div>
  );
}
