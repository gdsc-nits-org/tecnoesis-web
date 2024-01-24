import React, { useState, useEffect, useContext } from "react";
import styles from "./EventDescription.module.css";
import backIcon from "/images/backIcon.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../globals/authcontext";
const EventDescription = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [description, setDescription] = useState("");
  const [posterImage, setPosterImage] = useState("");
  const { setloggedin } = useContext(UserContext);
  const getEvent = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/api/event/${id}`;
    const response = await axios(url, {
      headers: { Authorization: "Bearer 1000000" },
    });

    if (response.status === 200) {
      const msg = response.data.msg;
      setName(msg.name);
      setModuleName(msg.module.name);
      setDescription(msg.description);
      setPosterImage(msg.posterImage);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);
  const regBtn = () => {
    if (!localStorage.getItem("token")) {
      toast("Not here!! Go to the login/signup");
    }
    else {
      window.location.href = `/event/${id}/registration`;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.gradient}>
        <div className={styles.robowars}>
          <Link to="/">
            <div className={styles.backIcon}>
              <img alt="" src={backIcon} />
            </div>
          </Link>
          <div className={styles.robowars_img}> {name}</div>
        </div>

        <div className={styles.moduleWrapper}>Module : {moduleName}</div>
        <div className={styles.center}>
          <div className={styles.description}>
            <p className={styles.text}>{description}</p>
          </div>
          <div className={styles.center_img}>
            <img alt="robologo_demo.png" src={posterImage} />
          </div>
        </div>
        {localStorage.getItem("token") ?
          <button className={styles.button} onClick={regBtn}>Register</button> :
          <button className={styles.button} style={{ fontSize: '1rem' }} onClick={regBtn}>Login to register</button>
        }
      </div>
    </div>
  );
};

export default EventDescription;
