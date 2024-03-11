import './Service.css';
import CoverImage from './CoverImage/CoverImage'

function Service( { title, description, images } ) {
    return (
        <div className='service'>
            <div>
                <CoverImage images={images}/>
            </div>
            <div>
                <div className='title'>{ title }</div>
                <div className='description'>{ description }</div>
            </div>
        </div>
    );
}

export default Service;