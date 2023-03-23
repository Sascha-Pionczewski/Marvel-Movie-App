import dbConnect from "../../../db/connect";
import Movie from "../../../db/models/movie";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const movies = await Movie.find();
    return response.status(200).json(movies);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
