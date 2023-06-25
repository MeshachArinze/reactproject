import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map(({ title, desc, cover}, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                  <h1>{title}</h1>
                  <p>{desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img src={cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
