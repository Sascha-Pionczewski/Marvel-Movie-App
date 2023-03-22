import Heading from "../components/Heading";
import MovieList from "../components/MovieList";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <main>
      <Heading>Marvel Movie App</Heading>
      <MovieList />
    </main>
  );
}
