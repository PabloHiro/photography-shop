import './CoverImage.css'; 

function CoverImage( { images } ) {
    return (
        <div className='CoverImage'>
            {images && images.map((img, index) =>
                <div key={index}>{img.name}</div>
            )}
        </div>
    );
}

export default CoverImage;