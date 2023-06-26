import React, { SyntheticEvent } from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const Login: () => React.JSX.Element = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement> | null  ) => {
    if (e !== null) {
     e.preventDefault();
     dispatch(authActions.login());
    } else return;
  };
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login</h3>
              <h1>My ACcount</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
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
