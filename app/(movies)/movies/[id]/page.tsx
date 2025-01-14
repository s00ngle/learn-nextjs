import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import Spinner from "../../../../components/spinner";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return (
    <div>
      <h1>Movie Detail Page</h1>
      <Suspense fallback={<Spinner />}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
