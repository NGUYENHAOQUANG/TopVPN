import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const RatingStars = ({ rating = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
      {hasHalfStar && <StarHalf size={16} fill="currentColor" strokeWidth={0} />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={i + 10} size={16} stroke="currentColor" strokeWidth={1} fill="transparent" />
      ))}
      <span className="ml-2 text-sm font-semibold text-text-light">{rating}/5</span>
    </div>
  );
};

export default RatingStars;
