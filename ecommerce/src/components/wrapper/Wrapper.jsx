/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      id: 1,
      cover: <i className='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 2,
      cover: <i className='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 3,
      cover: <i className='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 4,
      cover: <i className='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map(({id, cover, title, decs}) => {
            return (
              <div className='product' key={id}>
                <div className='img icon-circle'>
                  <i>{cover}</i>
                </div>
                <h3>{title}</h3>
                <p>{decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
