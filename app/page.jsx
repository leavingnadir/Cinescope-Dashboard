import HeaderNav from "@/components/header-nav"; //alias import
import Image from "next/image";

//SSR Server Side Rendering
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="bg-primary h-screen">Our Main Section</main>
      <footer className="bg-amber-400 h-72">Our New Footer</footer>
    </div>
  );
}
