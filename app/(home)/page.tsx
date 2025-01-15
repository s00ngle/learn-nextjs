import { Metadata } from "next";
import { API_URL } from "@/app/urls";
import Movie from "@/components/movie";
import styles from "@/styles/home.module.css";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies(): Promise<any> {
  const response = await fetch(API_URL, { cache: "force-cache" });
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
