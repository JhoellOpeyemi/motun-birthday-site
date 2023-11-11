import PropTypes from "prop-types";

import {
  PictureSlides,
  SliderSection,
  SliderWrapper,
  Text,
} from "../styles/Slider.styled";
import Image1 from "../assets/1.jpeg";
import Image2 from "../assets/2.jpeg";
import Image3 from "../assets/3.jpeg";
import Image4 from "../assets/4.jpeg";
import Image5 from "../assets/5.jpeg";
import Image6 from "../assets/6.jpeg";
import Image8 from "../assets/8.jpeg";
import Image9 from "../assets/9.jpeg";
import Image10 from "../assets/10.jpeg";
import video1 from "../assets/11.mp4";
import video2 from "../assets/12.mp4";
import video3 from "../assets/13.mp4";

const Slider = ({ setItem, item }) => {
  const handleClick = (e) => {
    const parent = Array.from(e.target.parentNode.children);
    setItem(parent.indexOf(e.target));
  };

  console.log(item);

  return (
    <SliderSection>
      <Text>Click each photo for a surprise</Text>

      <SliderWrapper>
        <PictureSlides onClick={handleClick}>
          <img src={Image1} alt="" />
          <img src={Image8} alt="" />
          <video autoPlay muted loop>
            <source src={video2} type="video/mp4" />
          </video>
          <img src={Image3} alt="" />
          <video autoPlay muted loop>
            <source src={video1} type="video/mp4" />
          </video>
          <img src={Image6} alt="" />
          <img src={Image2} alt="" />
          <video autoPlay muted loop>
            <source src={video3} type="video/mp4" />
          </video>
          <img src={Image4} alt="" />
          <img src={Image9} alt="" />
          <img src={Image10} alt="" />
          <img src={Image5} alt="" />
        </PictureSlides>
        <PictureSlides onClick={handleClick}>
          <img src={Image1} alt="" />
          <img src={Image8} alt="" />
          <video autoPlay muted loop>
            <source src={video2} type="video/mp4" />
          </video>
          <img src={Image3} alt="" />
          <video autoPlay muted loop>
            <source src={video1} type="video/mp4" />
          </video>
          <img src={Image6} alt="" />
          <img src={Image2} alt="" />
          <video autoPlay muted loop>
            <source src={video3} type="video/mp4" />
          </video>
          <img src={Image4} alt="" />
          <img src={Image9} alt="" />
          <img src={Image10} alt="" />
          <img src={Image5} alt="" />
        </PictureSlides>
      </SliderWrapper>
    </SliderSection>
  );
};

Slider.propTypes = {
  setItem: PropTypes.func,
  item: PropTypes.number,
};

export default Slider;
