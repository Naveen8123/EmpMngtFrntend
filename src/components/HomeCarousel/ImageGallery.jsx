import React from "react";
import { imageList } from "./images"; // Adjust the path as needed
import "./ImageGallery.css";

const ImageGallery = () => {
  return (
    <div className="gallery">
      {imageList.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} />
        </div>
      ))}
    </div>
  );
};
export default ImageGallery
