import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import VideoComponent from "../components/VideoComponent";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: movies, error } = useSWR(`/api/movies`, fetcher);

  if (error) {
    return <div>Failed to load from API</div>;
  }
  if (!movies) {
    return <div>Loading...</div>;
  }

  const movie = movies.find((movie) => movie.title.replace(/ /g, "-") === id);
  const characterObjects = (movie.characters || []).map((jsonString) =>
    JSON.parse(jsonString)
  );

  return (
    <div>
      <Link href="/">
        <button>🔙</button>
      </Link>
      <h1>{movie.title}</h1>
      <VideoComponent url={movie.trailer_url} />
      <h2>Description:</h2>
      <p>{movie.overview}</p>
      <Image src={movie.cover_url} alt={movie.title} width={200} height={300} />
      <h3>Related Movies</h3>
      <ul>
        {movie.related_movies.map((relMovie) => {
          const titleWithMinus = relMovie.title.replace(/ /g, "-");
          return (
            <Link href={`/${titleWithMinus}`} key={relMovie.id}>
              <li>{relMovie.title}</li>
            </Link>
          );
        })}
      </ul>
      <ul>
        {characterObjects.map((character) => {
          return <li key={character._id}>{character.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default DetailsPage;
