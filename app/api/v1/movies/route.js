import { MOVIES } from "@/lib/data";
import { NextResponse } from "next/server";

//our first GET API route
export const GET = async () => {
  try {
    // const res = await fetch{''};
    return NextResponse.json(MOVIES, { status: 200 });
  } catch (error) {
    console.log("Error fetching movies:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
