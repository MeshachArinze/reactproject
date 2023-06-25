/* eslint-disable no-unused-vars */
import React from "react"

const Catg = () => {
  const data = [
    {
      id: 1,
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      id: 2,
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      id: 3,
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      id: 4,
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      id: 5,
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      id: 6,
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map(({id, cateImg, cateName}) => {
          return (
            <div className='box f_flex' key={id}>
              <img src={cateImg} alt='' />
              <span>{cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
