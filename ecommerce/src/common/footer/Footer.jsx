import {
  Footers,
  FooterH1,
  FooterH2,
  FooterIcon,
  FooterDiv,
  FooterLI,
  FooterPara,
  FooterSpan,
} from "./Footer.style";

const Footer = () => {
  return (
    <>
      <Footers>
        <div className="container grid2">
          <div className="box">
            <FooterH1>Bonik</FooterH1>
            <FooterPara>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </FooterPara>

            <div className="icon d_flex">
              <FooterDiv className="img d_flex">
                <FooterIcon className="fa-brands fa-google-play"></FooterIcon>
                <FooterSpan>Google Play</FooterSpan>
              </FooterDiv>
              <div className="img d_flex">
                <FooterIcon className="fa-brands fa-app-store-FooterIconos"></FooterIcon>
                <FooterSpan>App Store</FooterSpan>
              </div>
            </div>
          </div>

          <div className="box">
            <FooterH2>About Us</FooterH2>
            <ul>
              <FooterLI>Careers</FooterLI>
              <FooterLI>Our Stores</FooterLI>
              <FooterLI>Our Cares</FooterLI>
              <FooterLI>Terms & Conditions</FooterLI>
              <FooterLI>Privacy PoFooterLIcy</FooterLI>
            </ul>
          </div>
          <div className="box">
            <FooterH2>Customer Care</FooterH2>
            <ul>
              <FooterLI>Help Center </FooterLI>
              <FooterLI>How to Buy </FooterLI>
              <FooterLI>Track Your Order </FooterLI>
              <FooterLI>Corporate & Bulk Purchasing </FooterLI>
              <FooterLI>Returns & Refunds </FooterLI>
            </ul>
          </div>
          <div className="box">
            <FooterH2>Contact Us</FooterH2>
            <ul>
              <FooterLI> ugbompro junction, beside corner stone</FooterLI>
              <FooterLI>Email: meshacharinze@gmail.com</FooterLI>
              <FooterLI>Phone: 09037766269</FooterLI>
            </ul>
          </div>
        </div>
      </Footers>
    </>
  );
};

export default Footer;
