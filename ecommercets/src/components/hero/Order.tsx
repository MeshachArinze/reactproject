import { order } from "../../assets/data/data"
import "./slider.css"

type myOrder = { id: number; title: string; desc: string };

export const Order = () => {
  return (
    <>
      <section className='order'>
        <div className='container grid boxItems'>
          {order.map(({id, title, desc}: myOrder) => (
            <div className='box flexCenter' key={id}>
              <div className='num'>
                <h1>{id}</h1>
              </div>
              <div className='text'>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
