import { HeadIcon, HeadLabel, HeadSection } from "./Head.style";

const Head = () => {
  return (
    <>
      <HeadSection>
        <div className="container d_flex">
          <div className="left row">
            <HeadIcon></HeadIcon>
            <HeadLabel> +2349131083175 </HeadLabel>
            <HeadIcon></HeadIcon>
            <HeadLabel> support@ui-lib.com</HeadLabel>
          </div>
          <div className="right row RText">
            <HeadLabel>Theme FAQ&quot;s</HeadLabel>
            <HeadLabel>Need Help?</HeadLabel>
            <span>🏳️‍⚧️</span>
            <HeadLabel>EN</HeadLabel>
            <span>🏳️‍⚧️</span>
            <HeadLabel>USD</HeadLabel>
          </div>
        </div>
      </HeadSection>
    </>
  );
};



export default Head;
