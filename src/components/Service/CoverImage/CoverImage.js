import "./CoverImage.css";

function CoverImage({ images_path_list, isVisible }) {
  // Return only the N random elements of a list of images path
  // where N is the closest quadratic integer to the lenght of the array
  // Example:
  // 17 -> 16
  // 15 -> 9
  const getRoundedSquareRootElements = array => {
    let length = array.length;
    let roundedDown = Math.floor(Math.sqrt(length));
    let shuffled_array = array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffled_array.slice(0, roundedDown * roundedDown);
  };

  const imageHandleClick = srcImage => {
    const url = window.location.origin + srcImage;
    window.open(url, "_blank", "noopener,noreferrer,popup");
  };

  let sqrt_images_path_list = getRoundedSquareRootElements(images_path_list);
  console.log(sqrt_images_path_list);
  return (
    <>
      {sqrt_images_path_list &&
        sqrt_images_path_list.map((image, index) => (
          <div
            key={index}
            className={`image-container ${isVisible ? "" : "hidden"}`}
          >
            <img
              src={image}
              alt={image}
              onClick={() => {
                return isVisible ? imageHandleClick(image) : null;
              }}
            />
          </div>
        ))}
    </>
  );
}

export default CoverImage;
