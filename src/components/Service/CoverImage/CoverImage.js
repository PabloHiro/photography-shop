import './CoverImage.css'; 
//https://www.npmjs.com/package/react-masonry-css
import Masonry from 'react-masonry-css';

function CoverImage( { images_path_list } ) {

    return (
        /*
        <div>
            {images_path_list && images_path_list.map((img, index) =>
                <img key={index} src={img} alt={img} />
            )}
        </div>
        */
        <div>
            <Masonry
                breakpointCols={{ default: 4 }}
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