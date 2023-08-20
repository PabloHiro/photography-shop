import './Service.css';

function Service( { title, price, description } ) {
    return (
        <div className='service'>
            <h1>Services</h1>
            <div className='title'><h2>{ title }</h2></div>
            <div className='price'>{ price }</div>
            <div className='description'>{ description }</div>
        </div>
    );
}

export default Service;