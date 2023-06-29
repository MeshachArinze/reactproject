
import "./login.css";
import { useDispatch } from "react-redux";
import LoginChild from "./login-child";
import back from "../../assets/images/my-account.jpg";

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (e: import('react').SyntheticEvent<HTMLFormElement> | null) => {
    if (e !== null) {
      e.preventDefault();
      dispatch((await import("../../store/auth-slice")).authActions.login());
    } else return;
  };
  return (
    <>
      <section className="login">
        <div className="container">
          <LoginChild
            children={
              <div className="text">
                <h3>Login</h3>
                <h1>My ACcount</h1>
              </div>
            }
            back={back}
          />
          <form
           
            onSubmit={handleSubmit}
          >
            <span>Username or Email address</span>
            <input type="text" required />
            <span>Password * </span>
            <input type="password" required />
            <button className="button">Log in </button>
          </form>
        </div>
      </section>
    </>
  );
};
