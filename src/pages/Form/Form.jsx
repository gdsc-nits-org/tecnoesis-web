import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    ScholarId: '',
    Phone: '',
  });
  const [formError, setFormError] = useState({});
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [isSubmit, setIsSubmit] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setFormError(validate(formData));
    setIsSubmit(true);
  };

  const isNumeric = (input) => {
    return !isNaN(parseFloat(input)) && isFinite(input);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.ScholarId || !isNumeric(values.ScholarId)) {
      errors.ScholarId = 'ScholarId is required';
    } else if (values.ScholarId.length != 7) {
      errors.ScholarId = 'Invalid Scholar Id';
    }

    if (!values.Phone) {
      errors.Phone = 'Phone Number is required';
    } else if (values.Phone.length != 10 || !isNumeric(values.Phone)) {
      errors.Phone = 'Invalid Phone Number';
    }

    return errors;
  };

  return (
    <div className={styles.wrapper}>
      <form action="" className={styles.form} onSubmit={submitHandler}>
        <h1 className={styles.heading}>
          <p>Welcome To The Official Website Of Technoesis</p>
          <p>Let’s Get You Started</p>
        </h1>
        <div className={styles.container}>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            ></input>
            <label className={styles.labels}>ENTER YOUR USERNAME</label>
          </div>
          <p className={styles.error}>{formError.email}</p>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="text"
              name="ScholarId"
              value={formData.ScholarId}
              onChange={changeHandler}
            ></input>
            <label className={styles.labels}>ENTER SCHOLAR ID</label>
          </div>
          <p className={styles.error}>{formError.ScholarId}</p>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="text"
              name="Phone"
              value={formData.Phone}
              onChange={changeHandler}
            ></input>
            <label className={styles.labels}>ENTER PHONE NUMBER</label>
          </div>
          <p className={styles.error}>{formError.Phone}</p>
        </div>

        <button className={styles.button}>
          <div className={styles.layertext}>SUBMIT</div>
        </button>
      </form>
    </div>
  );
};

export default Form;
