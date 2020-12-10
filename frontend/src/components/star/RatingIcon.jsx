import React, { Component } from 'react';
import StarIcon from '../star/StarIcon';

export default function RatingIcon(props) {
    const {
      index,
      rating,
      hoverRating,
      onMouseEnter,
      onMouseLeave,
      onSaveRating,
      saveRatingToDatabase,
    } = props;
    const fill = React.useMemo(() => {
      if (hoverRating >= index) {
        return '#FDC00F';
      } else if (!hoverRating && rating >= index) {
        return '#FDC00F';
      }
      return 'none';
    }, [rating, hoverRating, index]);
    return (
        <div 
          className ="cursor-pointer"
          onMouseEnter={() => onMouseEnter(index)} 
          onMouseLeave={() => onMouseLeave()} 
          onClick={() => {
              onSaveRating(index);
              saveRatingToDatabase(index);
              
          }}>
          <StarIcon fill={fill} />
        </div>
    )
  }
  