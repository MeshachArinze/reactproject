import "./category.css"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { category } from "../../assets/data/data"
import Slider from "react-slick"
import { FancyButtonNext } from "./button-next"
import { FancyButtonPrev } from "./button-prev"


function SampleNextArrow() {
  return (
    <div className="control-btn">
      <FancyButtonNext type={"button"}>
        <MdNavigateNext className="icon" />
      </FancyButtonNext>
    </div>
  );
}


function SamplePrevArrow() {
  return (
    <div className="control-btn">
      <FancyButtonPrev type={"button"}>
        <GrFormPrevious className="icon" />
      </FancyButtonPrev>
    </div>
  );
}

export const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow  />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="category">
        <div className="container">
          <Slider {...settings}>
            {category.map((item) => (
              <div className="boxs" key={item.id}>
                <div className="box boxItems">
                  <img src={item.cover} alt="" />
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

