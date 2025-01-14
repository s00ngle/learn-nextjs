import { Metadata } from "next";
import Link from "next/link";
import MovieList from "@/components/movie-list";
import { Suspense } from "react";
import Spinner from "@/components/spinner";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Suspense fallback={<Spinner />}>
        <MovieList />
      </Suspense>
    </div>
  );
}
