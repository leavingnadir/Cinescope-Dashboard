import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        Our Header Section
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Our Main Section
      </main>
      <footer className="w-full row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-amber-400">
        Our New Footer
      </footer>
    </div>
  );
}
