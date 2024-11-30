import './Slide.css';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { Navigation } from 'swiper/modules';

function PreviousWork( { src } ) {
    return (
        <img className="previous-work" src={ src }></img>
    );
  };

const Slide = () => {
    return (
        <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="my-swiper"
            slidesPerView={3}
        >
            <SwiperSlide>
                <PreviousWork src="https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </SwiperSlide>
            <SwiperSlide>
                <PreviousWork src="https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </SwiperSlide>
            <SwiperSlide>
                <PreviousWork src="https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </SwiperSlide>
            <SwiperSlide>
                <PreviousWork src="https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </SwiperSlide>
            <SwiperSlide>
                <PreviousWork src="https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </SwiperSlide>
            <SwiperSlide>
                <PreviousWork src="https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slide;