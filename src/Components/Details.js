import React from "react";
import Carousel from "./Carousel";

class Details extends React.Component {
  render() {
    const { title, media, description, language } = this.props;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{title}</h1>
          <h2>{`${language}`}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
