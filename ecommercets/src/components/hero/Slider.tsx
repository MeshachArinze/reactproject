import "./slider.css"
import { slide } from "../../assets/data/data"

type Item = {
  id: number,
  image: string
}

export const Slider = () => {
  return (
    <>
      <div className='slider'>
        <div className='container grid'>
          {slide.map(({id, image}: Item) => (
            <div className='box' key={id}>
              <div className='img'>
                <img src={image} alt='' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
