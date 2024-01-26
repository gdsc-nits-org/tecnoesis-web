import React, { useState, useEffect, useContext } from "react";
import styles from "./Form.module.css";
import UserContext from "../../globals/authcontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {
  const { signup } = useContext(UserContext);
  const loggedin = parseInt(localStorage.getItem("loggedin"));
  const navigate = useNavigate();
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    collegeName: "",
    phoneNumber: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length === 0) {
      userSignup();
    } else {
      setFormError(errors);
    }
  };

  const isNumeric = (input) => {
    return !isNaN(parseFloat(input)) && isFinite(input);
  };

  const userSignup = async () => {
    const { status, message } = await signup(formData);
    toast(message);
    if (status === 200) {
      navigate("/profile");
    } else if (status === 409) {
      navigate("/signup");
    } else {
      navigate("/");
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (
      values.phoneNumber.length != 10 ||
      !isNumeric(values.phoneNumber)
    ) {
      errors.phoneNumber = "Invalid Phone Number";
    }
    return errors;
  };

  useEffect(() => {
    if (loggedin || !localStorage.getItem("token")) {
      navigate("/");
    }
  }, [loggedin]);

  return (
    <div className={styles.wrapper}>
      <form action="" className={styles.form} onSubmit={submitHandler}>
        <h1 className={styles.heading}>
          <p>Welcome To The Official Website Of Tecnoesis</p>
          <p>Let’s Get You Started</p>
        </h1>
        <div className={styles.container}>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
            ></input>
            <label className={styles.labels}>ENTER YOUR USERNAME</label>
          </div>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
            ></input>
            <label className={styles.labels}>ENTER FIRST NAME</label>
          </div>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
            ></input>
            <label className={styles.labels}>ENTER LAST NAME</label>
          </div>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={changeHandler}
            ></input>
            <label className={styles.labels}>ENTER COLLEGE NAME</label>
          </div>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={changeHandler}
            ></input>
            <label className={styles.labels}>ENTER PHONE NUMBER</label>
          </div>
          <p className={styles.error}>{formError.username}</p>
          <p className={styles.error}>{formError.phoneNumber}</p>

        </div>
        <button className={styles.button}>
          <div className={styles.layertext}>SUBMIT</div>
        </button>
      </form>
    </div>
  );
};

export default Form;
