import { useState } from "react"

import { StyledLink, Header, HeaderLi, HeaderUl } from "./Navbar.style"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <Header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <HeaderUl className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<HeaderUl className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <HeaderLi>
                <StyledLink to='/'>home</StyledLink>
              </HeaderLi>
              <HeaderLi>
                <StyledLink to='/pages'>pages</StyledLink>
              </HeaderLi>
              <HeaderLi>
                <StyledLink to='/user'>user account</StyledLink>
              </HeaderLi>
              <HeaderLi>
                <StyledLink to='/vendor'>vendor account</StyledLink>
              </HeaderLi>
              <HeaderLi>
                <StyledLink to='/track'>track my order</StyledLink>
              </HeaderLi>
              <HeaderLi>
                <StyledLink to='/contact'>contact</StyledLink>
              </HeaderLi>
            </HeaderUl>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </Header>
    </>
  )
}

export default Navbar
