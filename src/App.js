import './App.css';
import Slide from './components/Slide/Slide';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';

function importImages(r, path) {
  let images = [];
  try {
    r.keys().map((item, index) => images.push(item.replace(/^\.\//, path)));
    return images;
  } catch(error) {
    console.error('Error importing images:', error);
    return {};
  }
}
const food_images = importImages(require.context('../public/assets/images/food/', false, /\.(png|jpe?g|svg)$/i), '/assets/images/food/');

function App() {
  return (
    <div>
      <div className="main">
          <Service title="Event coverage"
                   description="Your event professional photographer. Focus on enjoying your time with your loved ones while we take care of putting these memories into pictures"
          />
          <Service title="Photoshoot"
                   description="Get your own portfolio"
          />
          <Service title="Photoshoot"
                   description="Get your own portfolio"
          />
          <Service title="Photoshoot"
                   description="Get your own portfolio"
                   images_path_list={food_images}
          />
      </div>
      <div className="corner">
          <Contact/>
      </div>
    </div>
  );
}

export default App;
