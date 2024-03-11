import './CoverImage.css'; 

function CoverImage(images) {
    return (
        <div className='CoverImage'>
            {images.map((img) =>
                <div>{img}</div>
            )}
        </div>
    );
}

export default CoverImage;