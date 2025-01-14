import Link from "next/link";
import { API_URL } from "@/app/urls";

async function getMovies() {
  const response = await fetch(API_URL, { cache: "force-cache" });
  const json = await response.json();
  return json;
}

export default async function MovieList() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
