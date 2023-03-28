import mongoose from "mongoose";

const { Schema } = mongoose;

const characterSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  overview: { type: String, required: true },
  special_skills: { type: String, required: true },
  image_url: { type: String, required: true },
  movies: { type: Array, required: true },
});

const Character =
  mongoose.models.Character || mongoose.model("Character", characterSchema);

export default Character;
