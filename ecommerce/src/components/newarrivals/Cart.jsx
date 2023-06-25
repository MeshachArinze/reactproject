import Ndata from "./Ndata"

const Cart = () => {
   
  return (
    <>
      <div className='content grid product'>
        {Ndata.map(({id, name, price, cover}) => {
          return (
            <div className='box' key={id}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <h4>{name}</h4>
              <span>${price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
