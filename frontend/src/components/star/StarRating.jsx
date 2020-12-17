//react core
import React from 'react';
//import css styling
import '../../css/styles.css';
//import ratingIcon
import RatingIcon from '../star/RatingIcon';
//import axios instance
import AnsweredAssignmentsApi from '../../api/AnsweredAssignmentsApi';

// StarRating component
function StarRating({ answers }) {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
    console.log('rating' + rating);
    console.log('answers' + JSON.stringify(answers));
  };

  const saveRatingToDatabase = (rating) => {
    console.log('Value going to database' + rating);
    console.log('Answers object' + [answers, rating]);
    console.log('answers' + JSON.stringify(answers));
    let newObj = { ...answers, rating: rating };

    console.log('New Obj' + JSON.stringify(newObj));
    AnsweredAssignmentsApi.updateAnsweredAssignment(newObj).then((response) => {
      console.log('Succssfully stored the rating value');
    });
  };
  return (
    <div className="star box flex">
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <RatingIcon
            index={index}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
            saveRatingToDatabase={saveRatingToDatabase}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
