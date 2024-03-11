import './App.css';
import Slide from './components/Slide/Slide';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';


function importImages(r) {
  let images = [];
  r.keys().map((item, index) => item.push);
  return images
}

//const food_images = importImages(require.context('./images/food/', false, /\.(png|jpe?g|svg)$/));
const food_images = importImages(require.context('./images/food/', false, /\.(PNG|JPE?G|SVG)$/));
//const food_images = importImages(require.context('./images/food/', false));

function App() {
  return (
    <div>
      <div class="main">
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
                   images={food_images}
          />
      </div>
      <div class="corner">
          <Contact/>
      </div>
    </div>
  );
}

export default App;
