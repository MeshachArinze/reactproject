import { Div, Div1 } from "./Annocument.style"

const Annocument = () => {
 
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <Div className='img' >
            <img src='./images/banner-1.png' width='100%' height='100%' />
          </Div>
          <Div1 className='img' >
            <img src='./images/banner-2.png' width='100%' height='100%' />
          </Div1>
        </div>
      </section>
    </>
  )
}

export default Annocument
