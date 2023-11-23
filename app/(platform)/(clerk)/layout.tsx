type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <section className="flex h-screen items-center justify-center">
      {children}
    </section>
  );
}
