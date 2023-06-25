import {PropTypes} from "prop-types"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </>
  )
}

Header.propTypes = {
  CartItem: PropTypes.array.isRequired
}

export default Header
