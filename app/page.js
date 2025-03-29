import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex bg-gray-400">
        Our Header Section
      </header>
      <main className="flex bg-primary">
        Our Main Section
      </main>
      <footer className="flex bg-amber-400">
        Our New Footer
      </footer>
    </div>
  );
}
