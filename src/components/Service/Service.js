import './Service.css';
import CoverImage from './CoverImage/CoverImage'

function Service( { title, description, images_path_list } ) {
    return (
        <div className='service'>
            <div>
                <div className='title'>{ title }</div>
                <div className='description'>{ description }</div>
                <CoverImage images_path_list={images_path_list}/>
            </div>
        </div>
    );
}

export default Service;