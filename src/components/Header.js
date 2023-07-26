const header_image = {
    imageUrl: 'https://cdn.pixabay.com/photo/2023/07/17/13/50/baby-snow-leopard-8132690_960_720.jpg',
    author: 'ChiemSeherin'
}

function Header() {
    return (
        <div>
            <img
              src={header_image.imageUrl}
              alt={'Photo by ' + header_image.author}
            />
        </div>
    );
}

export default Header;