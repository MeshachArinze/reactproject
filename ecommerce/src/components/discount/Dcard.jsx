import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500
  }
  return (
    <>
      <Slider {...settings}>
        {Ddata.map(({id, cover, name, price}) => {
          return (
            <div key={id}>
              <div className="box product">
                <div className="img">
                  <img src={cover} alt="" width="100%" />
                </div>
                <h4>{name}</h4>
                <span>{price}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  )
}

export default Dcard
