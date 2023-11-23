import Footer from "./_components/Footer";
import Header from "./_components/Header";

type Props = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: Props) {
  return (
    <div className="flex h-full flex-col justify-between bg-slate-100">
      <Header />
      <main className="bg-slate-100 pb-20 pt-40">{children}</main>
      <Footer />
    </div>
  );
}
