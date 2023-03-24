import dbConnect from "../../../db/connect";
import Characters from "../../../db/models/characters";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const characters = await Characters.find();
    return response.status(200).json(characters);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
