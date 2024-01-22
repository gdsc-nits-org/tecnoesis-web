import styles from "./Dashboard.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import profile from "/images/Profile.png";
import contact from "/images/contact.png";
import schoolblack from "/images/school_black.png";
import callblack from "/images/call_black.png";
import location from "/images/location.png";
// import pin from "/images/pin.png";
import vector_right from "/images/Vector1.png";
import vector_left from "/images/Vector.png";
import ellipse from "/images/Ellipse.svg";
import vector from "/images/Vector.svg";
import statusData from "../../assets/statusData";
// import camera from "/images/camera.svg";
import vector3 from "/images/Vector3.png";
import vector4 from "/images/Vector4.png";
import ellipse2 from "/images/Ellipse2.svg";
// import img123456 from "/images/img123456.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../globals/authcontext";

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
  const { setloggedin } = useContext(UserContext);

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
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw Error("No token found");
        }
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(api_url_me, {
          headers,
        });
        if (response.data.status === 200) {
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
        setloggedin(false);
        navigate("/");
      }
    };
    getUserData();
  }, []);

  const trimText = (text) => {
    return text.length > 10 ? text.slice(0, 10) : text;
  };

  return (
    <div className={styles.container}>
      <div className={styles.texture}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img className={styles.main_img} src={userData?.imageUrl} alt="" />
          </div>
          <div className={styles.profile}>
            <div className={styles.name}>
              <img className={styles.profile_icons} src={contact} alt="" />
              <p className={styles.profile_text}>
                {userData?.firstName +
                  " " +
                  userData?.middleName +
                  " " +
                  userData?.lastName}
              </p>
            </div>
            <div className={styles.college}>
              <img className={styles.profile_icons} src={schoolblack} alt="" />
              <p className={styles.profile_text}>{userData?.collegeName}</p>
            </div>
            <div className={styles.contact}>
              <img className={styles.profile_icons} src={callblack} alt="" />
              <p className={styles.profile_text}>
                {"+91 " + userData?.phoneNumber}
              </p>
            </div>
            <div className={styles.address}>
              <img className={styles.profile_icons} src={location} alt="" />
              <p className={styles.profile_text}>{userData?.email}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button className={styles.button1}>GO TO HOME</button>
            </Link>
            {/* <button className={styles.button2}>LOGOUT</button> */}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.events}>
            <div className={styles.heading}>
              <img
                onClick={() => handleArrowClick("left")}
                src={vector_left}
                alt=""
              />
              <p>
                {`Events ${
                  currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)
                }`}{" "}
              </p>
              <img
                onClick={() => handleArrowClick("right")}
                src={vector_right}
                alt=""
              />
            </div>
            <div className={styles.content}>
              {currentStatus === "registered" &&
                registeredEvents?.map((events, index) => (
                  <div key={events.event.id} className={styles.repeating_box}>
                    <div className={styles.event_rect}>
                      <div className={styles.circle}>
                        <img src={ellipse} alt="" />
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
                          src={isExpanded[index] ? vector3 : vector}
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
                                  <img src={vector4} alt="" />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}

              {currentStatus === "pending" &&
                pendingEvents?.map((events) => (
                  <div key={events.event.id} className={styles.event_rect2}>
                    <div className={styles.circle}>
                      <img src={ellipse} alt="" />
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
                      <button className={styles.button3}>Accept</button>
                      <button className={styles.button4}>Reject</button>
                    </div>
                  </div>
                ))}

              {currentStatus === "rejected" &&
                rejectedEvents?.map((events, index) => (
                  <div key={events.event.id} className={styles.repeating_box}>
                    <div key={events.event.id} className={styles.event_rect}>
                      <div className={styles.circle}>
                        <img src={ellipse} alt="" />
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
                          src={isExpanded[index] ? vector3 : vector}
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
                                  <img src={vector4} alt="" />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.buttons_responsive}>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <button className={styles.button1}>GO TO HOME</button>
          </Link>
          {/* <button className={styles.button2}>LOGOUT</button> */}
        </div>
      </div>
      <div className={styles.pink_shade}>
        <img src={ellipse2} alt="" />
      </div>
    </div>
  );
}
