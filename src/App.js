import './App.css';
import Header from './components/Header/Header';
import Service from './components/Service/Service';

function importImages(r, path) {
  let images = [];
  const basePath = process.env.PUBLIC_URL || '';
  try {
    r.keys().forEach((item) => {
      images.push(`${basePath}${item.replace(/^\.\//, path)}`);
    });
  } catch(error) {
    console.error('Error importing images:', error);
  }
  return images;
}
const nature_images = importImages(require.context('../public/assets/images/nature/', false, /\.(png|jpe?g|svg)$/i), '/assets/images/nature/');
const city_images   = importImages(require.context('../public/assets/images/city/',   false, /\.(png|jpe?g|svg)$/i), '/assets/images/city/'  );
const food_images   = importImages(require.context('../public/assets/images/food/',   false, /\.(png|jpe?g|svg)$/i), '/assets/images/food/'  );

function App() {
  return (
    <div>
      <div className="main">
          <Header title="Jolina Manalang"/>
          <Service title="Event coverage"
                   description="Focus on enjoying your time with your loved ones while we take care of putting these memories into pictures"
                   images_path_list={nature_images}
                   gridName="services service-event"
          />
          <Service title="Portfolio books "
                   description="Have a photoshoot session with us and get the best of yourself"
                   images_path_list={city_images}
                   gridName="services service-portfolio"
          />
          <Service title="Image stock"
                   description="Get your own personalised stock of images for your business"
                   images_path_list={food_images}
                   gridName="services service-image-stock"
          />
      </div>
      {/*
      <div className="corner">
          <Contact/>
      </div>
      */}
    </div>
  );
}

export default App;
