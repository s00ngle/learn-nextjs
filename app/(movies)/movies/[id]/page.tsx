import { Suspense } from "react";
import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import Spinner from "@/components/spinner";

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
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
