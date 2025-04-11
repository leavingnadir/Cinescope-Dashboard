import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-[70vh]">
      <div className="bg-linear-to-r absolute inset-0 z-10 from-black/70 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 z-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-60 dark:opacity-40"></div>

      <div className="container relative z-20 px-4 py-32">
        <h1 className="text-white text-6xl font-bold text-center py-20">
          Discover Amazing Movies
        </h1>
        <p className="text-white text-center text-xl">
          Explore our best collection of movies all around the world
        </p>
      </div>
    </section>
  );
}
