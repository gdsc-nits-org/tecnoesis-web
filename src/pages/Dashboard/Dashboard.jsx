import styles from "./Dashboard.module.css";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import statusData from "../../assets/statusData";
import axios from "axios";
import LoadingContext from "../../globals/loading/loadingContext";
import { Loading } from "../../components";

const getTeams = (teamsRegistered, status, currentUsername) => {
  const teams = teamsRegistered.filter((team) => {
    const { members } = team.team;
    const condition = members.find((member) => {
      return (
        member.user.username === currentUsername &&
        member.registrationStatus === status
      );
    });
    return condition;
  });
  return teams.map((team) => team.team);
};

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  let api_url_me = `${import.meta.env.VITE_BASE_URL}/api/user/me`;

  const [currentStatus, setCurrentStatus] = useState("registered");
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [pendingEvents, setPendingEvents] = useState([]);
  const [rejectedEvents, setRejectedEvents] = useState([]);

  const handleArrowClick = (direction) => {
    if (direction === "right") {
      switch (currentStatus) {
        case "registered":
          setCurrentStatus("pending");
          break;
        case "pending":
          setCurrentStatus("rejected");
          break;
        case "rejected":
          setCurrentStatus("registered");
          break;

        default:
          break;
      }
    } else if (direction === "left") {
      switch (currentStatus) {
        case "rejected":
          setCurrentStatus("pending");
          break;
        case "pending":
          setCurrentStatus("registered");
          break;
        case "registered":
          setCurrentStatus("rejected");
          break;

        default:
          break;
      }
    }
  };
  const [isExpanded, setExpanded] = useState(
    new Array(statusData[currentStatus].length).fill(false)
  );

  const handleToggle = (index) => {
    setExpanded((prevExpanded) => {
      const newExpandedState = [...prevExpanded];
      newExpandedState[index] = !newExpandedState[index];
      return newExpandedState;
    });
  };

  const handleResponse = async (id, status) => {
    const api_url = `${import.meta.env.VITE_BASE_URL}/api/team/${id}/respond`;
    const body = { status };
    const headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const res = await axios.patch(api_url, body, { headers });
      if (res?.data?.status === 200) {
        toast(res?.data?.msg);
        window.location.reload();
      } else {
        toast("Update Failed");
      }
    } catch (error) {
      toast(error?.response?.data?.msg);
    }
  };

  const giveIcon = (status) => {
    switch (status) {
      case "REGISTERED":
        return tick;
      case "PENDING":
        return pending;

      default:
        break;
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw Error("User must be logged in");
        }
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(api_url_me, {
          headers,
        });
        if (response.data.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data.msg));
          setUserData(response.data.msg);
          const registeredEvents = getTeams(
            response.data.msg.teamsRegistered,
            "REGISTERED",
            response.data.msg.username
          );
          const pendingEvents = getTeams(
            response.data.msg.teamsRegistered,
            "PENDING",
            response.data.msg.username
          );
          const rejectedEvents = getTeams(
            response.data.msg.teamsRegistered,
            "CANCELLED",
            response.data.msg.username
          );
          setRegisteredEvents(registeredEvents);
          setPendingEvents(pendingEvents);
          setRejectedEvents(rejectedEvents);
        }
      } catch (error) {
        if (error?.response?.data?.status) {
          //axios error
          toast(error?.response?.data?.msg);
        } else {
          //token not found error
          toast(error.message);
        }
        navigate("/");
        localStorage.setItem("loggedin", 0);
      }
      setIsLoading(false);
    };
    getUserData();
  }, []);

  const trimText = (text) => {
    return text.length > 10 ? text.slice(0, 10) : text;
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.texture}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img className={styles.main_img} src={userData?.imageUrl} alt="" />
          </div>
          <div className={styles.profile}>
            <div className={styles.name}>
              <img
                className={styles.profile_icons}
                src="https://res.cloudinary.com/dfa0k8sry/image/upload/v1706167701/contact_zncula.webp"
                alt=""
              />
              <p className={styles.profile_text}>
                {userData?.firstName +
                  " " +
                  userData?.middleName +
                  " " +
                  userData?.lastName}
              </p>
            </div>
            <div className={styles.college}>
              <img
                className={styles.profile_icons}
                src="https://res.cloudinary.com/dfa0k8sry/image/upload/v1706165592/school_black_zikpij.webp"
                alt=""
              />
              <p className={styles.profile_text}>{userData?.collegeName}</p>
            </div>
            <div className={styles.contact}>
              <img
                className={styles.profile_icons}
                src="https://res.cloudinary.com/dfa0k8sry/image/upload/v1706167925/call_black_p7gu9x.webp"
                alt=""
              />
              <p className={styles.profile_text}>
                {"+91 " + userData?.phoneNumber}
              </p>
            </div>
            <div className={styles.address}>
              <img
                className={styles.profile_icons}
                src="https://res.cloudinary.com/dfa0k8sry/image/upload/v1706170954/email_s_sgoqgm.webp"
                alt=""
              />
              <p className={styles.profile_text}>{userData?.email}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button className={styles.button1}>GO TO HOME</button>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.events}>
            <div className={styles.heading}>
              <img
                onClick={() => handleArrowClick("left")}
                src="https://res.cloudinary.com/dfa0k8sry/image/upload/v1706168436/Vector2_optq03.webp"
                alt=""
              />
              <p>
                {`Events ${
                  currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)
                }`}{" "}
              </p>
              <img
                onClick={() => handleArrowClick("right")}
                src="https://res.cloudinary.com/dfa0k8sry/image/upload/v1706168161/Vector1_c26co1.webp"
                alt=""
              />
            </div>
            <div className={styles.content}>
              {currentStatus === "registered" &&
                (registeredEvents && registeredEvents.length > 0 ? (
                  registeredEvents?.map((events, index) => (
                    <div key={events.event.id} className={styles.repeating_box}>
                      <div className={styles.event_rect}>
                        <div className={styles.circle}>
                          <img src={events.event.posterImage} alt="" />
                        </div>
                        <div className={styles.middle}>
                          <div className={styles.event_title}>
                            <p>{events.event.name}</p>
                            <img
                              src={`${
                                events.event.status === "REGISTERED"
                                  ? "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706171072/Vector4_sxxqxh.webp"
                                  : events.event.status === "REJECTED"
                                  ? "https://res.cloudinary.com/dz2mlxltd/image/upload/v1706368700/fail_qjvtea.svg"
                                  : "https://res.cloudinary.com/dz2mlxltd/image/upload/v1706368700/pending_vkje50.svg"
                              }`}
                              alt="status"
                            />
                          </div>
                          <div className={styles.event_team}>
                            Team Name: {events.teamName}
                            <div className={styles.end_div}>
                              <p> View Team </p>
                              <img
                                onClick={() => handleToggle(index)}
                                src={`${
                                  isExpanded[index]
                                    ? "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706170146/Vector3_t07tw8.webp"
                                    : "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706169323/Vector_zxvxqu.svg"
                                }`}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {isExpanded[index] && (
                        <div className={styles.expanded_content}>
                          <table>
                            <thead>
                              <tr>
                                <th>Name</th>

                                <th>Username</th>

                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr></tr>
                              {events.members.map((member) => (
                                <tr>
                                  <td>{trimText(member.user.firstName)}</td>
                                  <td>{trimText(member.user.username)}</td>
                                  <td>
                                    {member.user.registrationStatus === "accepted" ? (
                                      <img src="https://res.cloudinary.com/dfa0k8sry/image/upload/v1706171072/Vector4_sxxqxh.webp" alt="" />
                                    ) : member.user.registrationStatus === "pending" ? (
                                      <img src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1706368700/pending_vkje50.svg" alt="" />
                                    ) : member.user.registrationStatus === "rejected" ? (
                                      <img src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1706368700/fail_qjvtea.svg" alt="" />
                                    ) : null}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className={styles.content_text}>No registered events</p>
                ))}

              {currentStatus === "pending" &&
                (pendingEvents && pendingEvents.length > 0 ? (
                  pendingEvents?.map((events) => (
                    <div key={events.event.id} className={styles.event_rect2}>
                      <div className={styles.circle}>
                        <img src={events.event.posterImage} alt="" />
                      </div>
                      <div className={styles.middle}>
                        <div className={styles.event_title}>
                          {events.event.name}
                        </div>
                        <div className={styles.event_team}>
                          Team Name: {events.teamName}
                        </div>

                      </div>
                      <div className={styles.end_div2}>
                        <button
                          className={styles.button3}
                          onClick={() => {
                            handleResponse(events.id, "REGISTERED");
                          }}
                        >
                          Accept
                        </button>
                        <button
                          className={styles.button4}
                          onClick={() => {
                            handleResponse(events.id, "CANCELLED");
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className={styles.content_text}>No pending events</p>
                ))}

              {currentStatus === "rejected" &&
                (rejectedEvents && rejectedEvents.length > 0 ? (
                  rejectedEvents?.map((events, index) => (
                    <div key={events.event.id} className={styles.repeating_box}>
                      <div key={events.event.id} className={styles.event_rect}>
                        <div className={styles.circle}>
                          <img src={events.event.posterImage} alt="" />
                        </div>
                        <div className={styles.middle}>
                          <div className={styles.event_title}>
                            {events.event.name}
                          </div>
                          <div className={styles.event_team}>
                            Team Name: {events.teamName}
                          </div>
                        </div>
                        <div className={styles.end_div}>
                          <p> View Team </p>
                          <img
                            onClick={() => handleToggle(index)}
                            src={`${
                              isExpanded[index]
                                ? "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706170146/Vector3_t07tw8.webp"
                                : "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706169323/Vector_zxvxqu.svg"
                            }`}
                            alt=""
                          />
                        </div>
                      </div>
                      {isExpanded[index] && (
                        <div className={styles.expanded_content}>
                          <table>
                            <thead>
                              <tr>
                                <th>Name</th>

                                <th>Username</th>

                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr></tr>
                              {events.members.map((member) => (
                                <tr>
                                  <td>{trimText(member.user.firstName)}</td>
                                  <td>{trimText(member.user.username)}</td>
                                  <td>
                                    {member.user.registrationStatus === "accepted" ? (
                                      <img src="https://res.cloudinary.com/dfa0k8sry/image/upload/v1706171072/Vector4_sxxqxh.webp" alt="" />
                                    ) : member.user.registrationStatus === "pending" ? (
                                      <img src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1706368700/pending_vkje50.svg" alt="" />
                                    ) : member.user.registrationStatus === "rejected" ? (
                                      <img src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1706368700/fail_qjvtea.svg" alt="" />
                                    ) : null}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className={styles.content_text}>No rejected events</p>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.buttons_responsive}>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <button className={styles.button1}>GO TO HOME</button>
          </Link>
        </div>
      </div>
      <div className={styles.pink_shade}>
        <img
          src="https://res.cloudinary.com/dfa0k8sry/image/upload/v1706170585/Ellipse2_izkzim.svg"
          alt=""
        />
      </div>
    </div>
  );
}
