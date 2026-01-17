'use client'
import { useState } from "react";

const useReviews = (reviews) => {
  const reviewsLength = reviews.length - 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview = reviews[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev <= 0 ? reviewsLength : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev >= reviewsLength ? 0 : prev + 1));
  };

  const goToIndex = (index) => {
    if (index >= 0 && index <= reviewsLength) {
      setCurrentIndex(index);
    }
  };

  return {
    currentReview,
    currentIndex,
    goToPrevious,
    goToNext,
    goToIndex,
    totalReviews: reviews.length
  };
};

export default useReviews;