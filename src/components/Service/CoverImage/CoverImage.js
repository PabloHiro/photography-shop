import './CoverImage.css'; 
//https://www.npmjs.com/package/react-masonry-css
import Masonry from 'react-masonry-css';

function CoverImage( { images_path_list, isVisible, onClick } ) {
    const getRoundedSquareRootElements = (array) => {
        // Get the length of the array
        let length = array.length;

        // Calculate the square root and round down to the nearest integer
        let roundedDown = Math.floor(Math.sqrt(length));

        // Return only the first n elements of the array
        return array.slice(0, roundedDown);
    };

    let sqrt_images_path_list = getRoundedSquareRootElements(images_path_list);
    return (
        <div className={`cover-image-container ${isVisible ? '' : 'hidden'}`} onClick={onClick}>
            <Masonry
                breakpointCols={{ default: sqrt_images_path_list.length }}
                className="cover-image-grid"
                columnClassName="cover-image-grid-column"
            >
            {images_path_list && images_path_list.map((image, index) => (
                <img className="masonry-img" key={index} src={image} alt={image} />
            ))}
            </Masonry>
        </div>

    );
}

export default CoverImage;