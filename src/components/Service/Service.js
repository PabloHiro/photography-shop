import './Service.css';

function Service( { title, description } ) {
    return (
        <div className='services'>
            <div className='title'>{ title }</div>
            <div className='description'>{ description }</div>
        </div>
    );
}

export default Service;