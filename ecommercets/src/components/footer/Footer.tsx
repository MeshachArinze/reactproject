import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import FooterChildren from "./footer-children";

const s ="Cartsy Medicine - All right reserved - Design & Developed by RedQ,Inc" as const;
let n: typeof s;

export const Footer = () => {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>
            {n}
          </p>
          <FooterChildren>
            <div className="social">
            <BsFacebook className="icon" />
            <RiInstagramFill className="icon" />
            <AiFillTwitterCircle className="icon" />
            <AiFillLinkedin className="icon" />
            </div>
          </FooterChildren>
          
        </div>
      </footer>
    </>
  );
};
