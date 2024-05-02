import { MovieCredits } from "components/movie-credits";
import MovieInfo, { getMovie } from "components/movie-info";
import MovieVideos from "components/movie-videos";
import { Suspense } from "react";

interface IParams {
  params: { id: string };
}
/**
 * 동적 메타데이터
 * generateMetadata 함수를 사용하여 동적 값이 필요한 메타데이터를 가져올 수 있습니다.
 */
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}
/**
 * 동시성 렌더링 기능
 * Suspense: children이 로딩 되기전에 fallback을 보여줌
 */
export default async function MovieDetil({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie credits</h1>}>
        <MovieCredits id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
