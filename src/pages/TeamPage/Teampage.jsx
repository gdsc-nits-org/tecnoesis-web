import React, { useState, useEffect } from "react";
import styles from "./Teampage.module.css";
import { Card } from "../../components/Team/Card";
import toggleLeft from "../../../public/images/teamPage/toggle1.svg";
import toggleRight from "../../../public/images/teamPage/toggleRight.svg";

const Teampage = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Adjust the offset value based on design
      if (offset < 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarVisible(false);
        setIsSmallScreen(true);
      } else {
        setIsSidebarVisible(true);
        setIsSmallScreen(false);
      }
    };

    // Initial check on mount
    handleResize();

    window.addEventListener("scroll", handleScroll);
    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hadleToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Core Team",
      members: [
        {
          id: 1,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 2,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 3,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 4,
          name: "Name",
          designation: "developer",
          image: "",
        },
      ],
    },
    {
      id: 2,
      name: "Marketing Team",
      members: [
        {
          id: 1,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 2,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 3,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 4,
          name: "Name",
          designation: "developer",
          image: "",
        },
      ],
    },
    {
      id: 3,
      name: "Hospitality",
      members: [
        {
          id: 1,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 2,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 3,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 4,
          name: "Name",
          designation: "developer",
          image: "",
        },
      ],
    },
    {
      id: 4,
      name: "Technical Team",
      members: [
        {
          id: 1,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 2,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 3,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 4,
          name: "Name",
          designation: "developer",
          image: "",
        },
      ],
    },
    {
      id: 5,
      name: "PR Team",
      members: [
        {
          id: 1,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 2,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 3,
          name: "Name",
          designation: "developer",
          image: "",
        },
        {
          id: 4,
          name: "Name",
          designation: "developer",
          image: "",
        },
      ],
    },
  ]);

  const [index, setIndex] = useState(0);

  return (
    <div className={styles.wrapper}>
      {/* leftFrame */}
      <div className={styles.leftFrame}>
        <div className={styles.headingDiv}>
          <div className={styles.heading}>
            <h1>MEET THE TEAM</h1>
          </div>

          <div className={styles.heading}>{teams[index].name}</div>
        </div>
        <div className={styles.teamCards}>
          {teams[index].members.map((member, id) => (
            <Card
              key={id}
              name={member.name}
              designation={member.designation}
              image={member.image}
            />
          ))}
        </div>
      </div>

      {/* rightFrame */}
      <div
        className={`${isSticky ? styles.sticky : ""} ${
          styles.rightFrameParent
        }`}
        style={{ "translate" : isSidebarVisible ? "0px" : "250px"}}
      >
        <div className={styles.rightFrame}>
          {teams.map((TeamName, id) => (
            <div
              key={id}
              className={styles.teamName}
              onClick={() => {
                setIndex(id);
                if(isSmallScreen){
                  setIsSidebarVisible(false)
                }
              }}
            >
              {TeamName.name}
            </div>
          ))}
        </div>

      </div>

      
        {/* toggle */}
        <div
          className={`${styles.toggle} ${isSticky ? styles.sticky : ""}`}
          onClick={hadleToggle}
        >
          {isSmallScreen &&
            (isSidebarVisible ? (
              <img src={toggleRight} alt="img" />
            ) : (
              <img src={toggleLeft} alt="img" />
            ))}
        </div>
    </div>
  );
};
export default Teampage;
