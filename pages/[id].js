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
  const { data: characters, error2 } = useSWR(`/api/characters`, fetcher);

  if (error || error2) {
    return <div>Failed to load from API</div>;
  }
  if (!movies || !characters) {
    return <div>Loading...</div>;
  }

  const movie = movies.find((movie) => movie.title.replace(/ /g, "-") === id);
  const character = characters.find(
    (character) => character.name.replace(/ /g, "-").replace("/", "") === id
  );

  if (movie) {
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
        <Image
          src={movie.cover_url}
          alt={movie.title}
          width={200}
          height={300}
        />
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
            const nameWithMinus = character.name
              .replace(/ /g, "-")
              .replace("/", "");
            return (
              <Link href={`/${nameWithMinus}`} key={character.id}>
                <li>{character.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  } else if (character) {
    return (
      <div>
        <Link href="/">
          <button>🔙</button>
        </Link>
        <h1>{character.name}</h1>
        <h2>Actor:</h2>
        <p>{character.actor}</p>
        <h3>Description:</h3>
        <p>{character.description}</p>
        <h4>Other Films:</h4>
        <ul>
          {character.movies.map((movie, index) => {
            const titleWithMinus = movie.replace(/ /g, "-");
            return (
              <Link href={`/${titleWithMinus}`} key={index}>
                <li key={index}>{movie}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div>Ohje! Kein passendes Film- oder Charakterobjekt gefunden.</div>;
  }
};

export default DetailsPage;
