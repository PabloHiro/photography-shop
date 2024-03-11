import './Service.css';
import CoverImage from './CoverImage/CoverImage'

function Service( { title, description, images } ) {
    return (
        <div className='service'>
            <div className='title'>{ title }</div>
            <div className='description'>{ description }</div>
            <CoverImage images={images}/>
        </div>
    );
}

export default Service;