import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import VideoComponent from "../components/VideoComponent";
import Image from "next/image";

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
      <VideoComponent url={movie.trailer_url} />
      <h2>Description:</h2>
      <p>{movie.overview}</p>
      <Image src={movie.cover_url} alt={movie.title} width={200} height={300} />
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
