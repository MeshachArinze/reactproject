import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useState } from "react";
import { FormData, todo } from "./Types";
import { MyInput } from "./register-inputs";
import { Fragment } from "react";

export const Regsiter = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

   const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (
    event: import("react").FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Perform form validation
    if (formData.name.trim() === "" || formData.email.trim() === "") {
      setErrorMessage("Please fill in all fields");
      return;
    }
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setErrorMessage("");
  };

    const handleInputChange = (event: import("react").ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

  return (
    <Fragment>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>{todo.title}</h3>
              <h1>{todo.name}</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <span>Name</span>
              <MyInput value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
              <span>email</span>
              <MyInput value={formData.email} onChange={handleInputChange} />
            </div>
            <div>
              <span>password</span>
              <MyInput value={formData.password} onChange={handleInputChange} />
            </div>
            <div>
              <span>confirmPassword</span>
              <MyInput
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            <button className="button">Register</button>
            {errorMessage && <div>{errorMessage}</div>}
          </form>
        </div>
      </section>
    </Fragment>
  );
};
