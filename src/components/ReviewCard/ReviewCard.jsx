import React from "react";
import ReactStars from "react-rating-stars-component";

function ReviewCard(props) {
  return (
    <div className="review-card">
      <div className="avatar">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="info">
        <p className="name">{props.name}</p>
        <p className="date">{props.date}</p>
        <p className="duration">{props.duration}</p>
      </div>
      <div className="description">
        <p className="rating">
          <ReactStars
            count={5}
            value={props.rating}
            onChange={() => {}}
            size={24}
            activeColor="gold"
            edit={false}
            color="#eaeaea"
            isHalf
          />
        </p>
        <p className="title">{props.title}</p>
        <p className="review">{props.review}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
