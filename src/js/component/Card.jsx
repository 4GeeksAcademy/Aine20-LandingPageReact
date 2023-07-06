import React from "react";
import PropTypes from "prop-types";


let cardStyle = {
    width: "18rem",
};

const Card = (props) => {
    return (
      <div className="d-flex align-items-center justify-content-center flex-column" style={cardStyle}>
        <div className="card">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardText}</p>
            <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
          </div>
        </div>
      </div>
    );
  };

Card.propTypes = {
    image: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    buttonLabel: PropTypes.string,
    button: PropTypes.string
};


export default Card;