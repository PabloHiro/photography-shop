import './Service.css';

function Service( { title, price, description } ) {
    return (
        <div className='services'>
            <div className='title'><h2>{ title }</h2></div>
            <div className='price'><h2>{ price }</h2></div>
            <div className='description'>{ description }</div>
        </div>
    );
}

export default Service;