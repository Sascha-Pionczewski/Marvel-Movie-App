import { useState, useEffect } from "react";

const Rating = ({ movieId }) => {
  const getInitialRating = () => {
    const storedRating = localStorage.getItem(`rating_${movieId}`);
    return storedRating ? parseInt(storedRating, 10) : 0;
  };

  const [rating, setRating] = useState(getInitialRating());
  const [hover, setHover] = useState(0);

  useEffect(() => {
    localStorage.setItem(`rating_${movieId}`, rating);
  }, [rating, movieId]);

  const onStarClick = (star) => {
    setRating(star);
  };

  const onStarHover = (star) => {
    setHover(star);
  };

  const onStarLeave = () => {
    setHover(0);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            cursor: "pointer",
            color: star <= (hover || rating) ? "#ffc107" : "#e4e5e9",
          }}
          onClick={() => onStarClick(star)}
          onMouseEnter={() => onStarHover(star)}
          onMouseLeave={() => onStarLeave()}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
