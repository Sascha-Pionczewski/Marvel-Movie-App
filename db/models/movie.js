import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  release_date: { type: String, required: true },
  box_office: { type: String, required: false },
  duration: { type: Number, required: false },
  overview: { type: String, required: true },
  cover_url: { type: String, required: true },
  trailer_url: { type: String, required: true },
  directed_by: { type: String, required: false },
  phase: { type: Number, required: false },
  saga: { type: String, required: false },
  chronology: { type: Number, required: false },
  post_credit_scenes: { type: Number, required: false },
  imdb_id: { type: Number, required: false },
  related_movies: { type: Array, required: true },
  characters: { type: Array, required: true },
});

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;
