import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-[70vh]">
      <div className="absolute inset-0 z-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-60 dark:opacity-40"></div>
    </section>
  );
}
