import React from "react";

export const generateStars = (rating) => {
  if (typeof rating !== 'number' || rating < 0 || rating > 5) rating = 0;
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(React.createElement('i', {key: i, className: 'fa-solid fa-star'}))
    } else {
      stars.push(React.createElement('i', {key: i, className: 'fa-regular fa-star'}))
    }
  }
  return stars;
}