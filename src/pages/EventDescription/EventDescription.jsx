import React, { useState, useEffect, useContext } from "react";
import LoadingContext from "../../globals/loading/loadingContext";

import UserContext from "../../globals/authcontext";
import { Loading } from "../../components";
import styles from "./EventDescription.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EventDescription = () => {
  const { id } = useParams();
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [name, setName] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [description, setDescription] = useState("");
  const [posterImage, setPosterImage] = useState("");
  const { setloggedin } = useContext(UserContext);
  const { token } = useContext(UserContext);
  const getEvent = async () => {

    setIsLoading(true);
    const url = `${import.meta.env.VITE_BASE_URL}/api/event/${id}`;
    const response = await axios(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      const msg = response.data.msg;
      setName(msg.name);
      setModuleName(msg.module.name);
      setDescription(msg.description);
      setPosterImage(msg.posterImage);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);
  const regBtn = () => {
    if (!localStorage.getItem("token")) {
      toast("Not here! Go to login/signup section");
    }
    else {
      window.location.href = `/event/${id}/registration`;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.gradient}>
        <div className={styles.robowars}>
          <Link to="/modules">
            <div className={styles.backIcon}>
              <img alt="" src="https://res.cloudinary.com/dfa0k8sry/image/upload/v1706177113/backIcon_mnk3xs.webp" />
            </div>
          </Link>
          <div className={styles.robowars_img}> {name.toUpperCase()}</div>
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
