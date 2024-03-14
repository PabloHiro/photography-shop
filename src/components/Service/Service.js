import './Service.css';
import CoverImage from './CoverImage/CoverImage'
import { useState } from 'react';
function Service({ title, description, images_path_list }) {
    const [isCoverImageVisible, setCoverImageVisible] = useState(true);

    const toggleVisibility = () => {
        setCoverImageVisible(!isCoverImageVisible);
    };

    return (
        <div className='service'>
            <div>
                <CoverImage 
                    images_path_list={images_path_list} 
                    isVisible={isCoverImageVisible} 
                    onClick={toggleVisibility} 
                />
                {isCoverImageVisible && <div className='title'onClick={toggleVisibility}>{title}</div>}
                {!isCoverImageVisible && <div className='description' onClick={toggleVisibility}>{description}</div>}
            </div>
        </div>
    );
}

export default Service;