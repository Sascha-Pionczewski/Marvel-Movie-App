import { useEffect, useState } from "react";
import RelatedMoviesCard from "../RelatedMoviesCard";

const ActorImageSmall = ({ actorName }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const searchUrl = `/api/themoviedb/search/person?query=${actorName}`;
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();
        const personId = searchData.results[0].id;

        const imagesUrl = `/api/themoviedb/person/${personId}/images?`;
        const imagesResponse = await fetch(imagesUrl);
        const imagesData = await imagesResponse.json();

        const configUrl = `/api/themoviedb/configuration?`;
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
        setImageUrl("/captain-america-mini.png");
      }
    };
    fetchImage();
  }, [actorName]);

  if (!imageUrl) {
    return <p>sorry no image!</p>;
  }

  return <RelatedMoviesCard image={imageUrl} title={`${actorName}`} />;
};

export default ActorImageSmall;
