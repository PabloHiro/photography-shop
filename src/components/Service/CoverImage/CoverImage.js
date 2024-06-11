import './CoverImage.css'; 
//https://www.npmjs.com/package/react-masonry-css
import Masonry from 'react-masonry-css';

function CoverImage( { images_path_list, isVisible, onClick } ) {
    // Return only the N random elements of a list of images path
    // where N is the closest quadratic integer to the lenght of the array
    // Example:
    // 17 -> 16
    // 15 -> 9
    const getRoundedSquareRootElements = (array) => {
        let length = array.length;
        let roundedDown = Math.floor(Math.sqrt(length));
        let shuffled_array = array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        return shuffled_array.slice(0, roundedDown*roundedDown);
    };

    let sqrt_images_path_list = getRoundedSquareRootElements(images_path_list);
    console.log(sqrt_images_path_list);
    return (
        <div className={`cover-image-container ${isVisible ? '' : 'hidden'}`} onClick={onClick}>
            <Masonry
                breakpointCols={{ default: Math.floor(Math.sqrt(sqrt_images_path_list.length)) }}
                className="cover-image-grid"
                columnClassName="cover-image-grid-column"
            >
            {sqrt_images_path_list && sqrt_images_path_list.map((image, index) => (
                <img className="masonry-img" key={index} src={image} alt={image} />
            ))}
            </Masonry>
        </div>
    );
}

export default CoverImage;