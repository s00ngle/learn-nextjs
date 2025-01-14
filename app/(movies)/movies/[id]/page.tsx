import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import Spinner from "../../../../components/spinner";

// async로 컴포넌트 정의
export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params; // 여기에서 비동기적으로 처리

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
