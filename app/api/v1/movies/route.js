import { MOVIES } from "@/lib/data";
import { NextResponse } from "next/server";

// Our first GET API route
export const GET = async () => {
  try {
    // const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1');
    // Metacritic: Sorts the results in descending order based on the 'metacritic' field.
    // A value of -1 indicates descending order, while 1 would indicate ascending order.

    return NextResponse.json(MOVIES, { status: 200 });
  } catch (error) {
    console.log("Error fetching movies:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
