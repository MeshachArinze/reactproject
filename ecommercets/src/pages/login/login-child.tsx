import "./login.css";

type Props = {
  children: React.ReactNode;
  back: string;
};

const LoginChild = ({ children, back }: Props) => {
  return (
    <div className="backImg">
      <img
        src={back}
        style={{ width: "100%", objectFit: "cover", objectPosition: "center", display: "block", height: "100%" }}
        alt=""
      />
      {children}
    </div>
  );
};

export default LoginChild;
