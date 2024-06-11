import "./Service.css";
import CoverImage from "./CoverImage/CoverImage";
import { useState } from "react";

function Service({ title, description, images_path_list, gridName }) {
  const [isCoverImageVisible, setCoverImageVisible] = useState(true);

  const toggleVisibility = () => {
    setCoverImageVisible(!isCoverImageVisible);
  };

  return (
    <div className={gridName}>
      <CoverImage
        images_path_list={images_path_list}
        isVisible={isCoverImageVisible}
      />
      {isCoverImageVisible && (
        <h2 className="title" onClick={toggleVisibility}>
          {title}
        </h2>
      )}
      {!isCoverImageVisible && (
        <div className="description" onClick={toggleVisibility}>
          {description}
        </div>
      )}
    </div>
  );
}

export default Service;
