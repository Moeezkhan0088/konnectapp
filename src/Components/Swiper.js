import img1 from '../Assests/Images/support 1.png';
import img2 from '../Assests/Images/badge (1) 1.png';
import img3 from '../Assests/Images/Group.png';
import img4 from '../Assests/Images/protection 1.png';
import img5 from '../Assests/Images/security 1.png';
import { register } from "swiper/element/bundle";
import './Swiper.scss';


register();

const Swiper = () => {
  return (
    <div>
      <swiper-container navigation="true" pagination="true">
      <swiper-slide class="blue-slide">Slide 1</swiper-slide>
      <swiper-slide class="yellow-slide">Slide 2</swiper-slide>
      <swiper-slide class="green-slide">Slide 3</swiper-slide>
    </swiper-container>
    </div>
  );
};

export default Swiper;