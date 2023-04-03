import { useEffect, useState } from "react";
import Card from "../Card.js";

const ActorImage = ({ actorName }) => {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const searchUrl = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${actorName}`;
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();
        const personId = searchData.results[0].id;

        const imagesUrl = `https://api.themoviedb.org/3/person/${personId}/images?api_key=${API_KEY}`;
        const imagesResponse = await fetch(imagesUrl);
        const imagesData = await imagesResponse.json();

        const configUrl = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;
        const configResponse = await fetch(configUrl);
        const configData = await configResponse.json();

        const baseUrl = configData.images.base_url;
        const fileSize = configData.images.profile_sizes.find(
          (size) => size === "original"
        );

        const imageFilePath = imagesData.profiles[0].file_path;
        const fullImageUrl = `${baseUrl}${fileSize}${imageFilePath}`;

        setImageUrl(fullImageUrl);
      } catch (error) {
        console.error("Error fetching actor image:", error);
        setImageUrl("/pngegg.png");
      }
    };
    fetchImage();
  }, [API_KEY, actorName]);

  if (!imageUrl) {
    return <div>sorry no image!</div>;
  }

  return <Card image={imageUrl} title={`${actorName}`} />;
};

export default ActorImage;
