import { Suspense } from "react";
import MovieInfo, { getMovie } from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import Spinner from "@/components/spinner";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params; // 비동기 처리
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: IParams) {
  const { id } = await params; // 비동기 처리
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
