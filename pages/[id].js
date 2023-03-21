import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import VideoComponent from "../components/VideoComponent";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: movie, error } = useSWR(
    `https://mcuapi.herokuapp.com/api/v1/movies/${id}`,
    fetcher
  );

  if (error) {
    return <div>Failed to load from API</div>;
  }
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <VideoComponent url={movie.trailer_url} cover={movie.cover_url} />
      <h2>Description:</h2>
      <p>{movie.overview}</p>
      <h3>Related Movies</h3>
      <ul>
        {movie.related_movies.map((relMovie) => (
          <Link href={`/${relMovie.id}`} key={relMovie.id}>
            <li>{relMovie.title}</li>
          </Link>
        ))}
      </ul>
      <Link href="/">
        <button>...back home</button>
      </Link>
    </div>
  );
};

export default DetailsPage;
