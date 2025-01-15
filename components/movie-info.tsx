import { API_URL } from "@/app/urls";
import styles from "@/styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  // return <h6>{JSON.stringify(movie)}</h6>;
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
