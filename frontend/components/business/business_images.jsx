import React from 'react';
import { Link } from 'react-router-dom';
import { unescaper } from "../../util/data"

const BusinessImages = ({ business, images }) => {
  let background = {}
  let imageStyle = new Array(3).fill({display: "none"});
  let imageUrl = new Array(3).fill(null);
  let imageCaption = new Array(3).fill(null);

  const enter = () => {
    const image1 = document.getElementById("image1");
    const caption = document.getElementById("image-caption1");
    image1.style.height = "220px";
    image1.style.width = "220px";
    image1.style.left = "220px";
    image1.style.boxShadow = "none";

    caption.style.opacity = 0;
    caption.style.visibility = "hidden";
  }

  const leave = () => {
    const image1 = document.getElementById("image1");
    const caption = document.getElementById("image-caption1");
    image1.style.height = "250px";
    image1.style.width = "250px";
    image1.style.left = "210px";
    image1.style.boxShadow = "0 0 25px -3px rgba(0,0,0,0.5)";

    caption.style.opacity = 1;
    caption.style.visibility = "visible";
  }

  if (business.image_ids!==undefined && images!==undefined){
    const keys = business.image_ids;
    if (keys.length < 3) {
      background = {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundImage: "url('/cityscape.png')",
        backgroundSize: "600px 400px"
      }
    }

    for (let i = 0; i < keys.length && i < 3; i++){
      imageStyle[i] = {display: "block"};
      imageUrl[i] = `https://yawp-app.s3.amazonaws.com/bphoto/${images[keys[i]].image_url}/s.jpg`;
      imageCaption[i] = images[keys[i]].comment;
      if (imageCaption[i] === null) {
        imageCaption[i] = `Photo of ${unescaper(business.name)} - ${business.city}, ${business.state}`;
      }
    }
  }
  else {
    background = {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center bottom",
      backgroundImage: "url('/cityscape.png')",
      backgroundSize: "600px 400px"
    }
  }

  return (
    <section className="image-display-container" style={background}>
      <div className="business-header-background"></div>

      <div
        className="business-image"
        id="image0"
        style={imageStyle[0]}
        onMouseEnter={enter}
        onMouseLeave={leave}>
        <img src={imageUrl[0]}/>
        <div className="business-image-caption-container" id="image-caption0">
          <div className="business-image-caption">
            {imageCaption[0]}
          </div>
        </div>
      </div>

      <div className="business-image" id="image1" style={imageStyle[1]}>
        <img src={imageUrl[1]}/>
        <div className="business-image-caption-container" id="image-caption1">
          <div className="business-image-caption">
            {imageCaption[1]}
          </div>
        </div>
      </div>

      <div
        className="business-image"
        id="image2"
        style={imageStyle[2]}
        onMouseEnter={enter}
        onMouseLeave={leave}>
        <img src={imageUrl[2]}/>
        <div className="business-image-caption-container" id="image-caption2">
          <div className="business-image-caption">
            {imageCaption[2]}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessImages;
