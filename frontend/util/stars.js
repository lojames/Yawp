const ratingToStars = (rating) => {
  const decimal = rating % 1
  if (rating < .5) {
    return 0;
  } else if (rating < 1) {
    return 1;
  } else if (decimal < .25) {
    return Math.floor(rating);
  } else if (decimal < .75) {
    return Math.floor(rating)+0.5;
  } else{
    return Math.ceil(rating);
  }
}

export const starsStr = (averageRating) => {
  return `${ratingToStars(averageRating).toFixed(1)} star rating`
}

export const imageOffset = (averageRating, pixelHeight=24) => {
  const rating = ratingToStars(averageRating);
  let offset = 0;
  if (pixelHeight < 24) offset += 240;
  if (pixelHeight < 18) offset += 180

  if (rating < 1){
    return offset+pixelHeight*rating;
  } else {
    return offset+pixelHeight*rating*2-pixelHeight;
  }
}
