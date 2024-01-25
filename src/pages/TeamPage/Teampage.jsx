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
      name: "Union Body",
      members: [
        {
          id: "19",
          name: "Mriganga Jyoti Chutia",
          designation: "CONVENOR",
          linkedin: "https://www.linkedin.com/in/mriganga-jyoti-chutia-475b53202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/mriganga.jyotichutia?mibextid=ZbWKwL",
          inst: "https://www.instagram.com/_mri_ganga_?igsh=djV0ZmVvcHM1NXcx",
          image: "https://drive.google.com/open?id=1798-Bk_8iGVCsIiUkUPz-d5O-mEtlykC"
        },
      ],
    },
    {
      id: 2,
      name: "Core Team",
      members: [

        {
          id: "1",
          name: "Jyotishka Bhattacharjee",
          designation: "Executive Head ",
          linkedin: "https://www.linkedin.com/in/jyotishka-b-32995712b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/profile.php?id=100005647038947",
          inst: "https://www.instagram.com/_jyo.tishka_?igsh=MTdlMWw5aDA3NHU5cw==",
          image: "https://drive.google.com/open?id=1ltZ5rYgXfDc9X5uccF1ALeI0_WNFz5BD"
        },
        {
          id: "10",
          name: "DEBASISH KONWAR",
          designation: "EXECUTIVE HEAD",
          linkedin: "https://www.linkedin.com/in/debasishkonwar/",
          facebook: "https://www.facebook.com/debasish.konwar.25",
          image: "https://drive.google.com/open?id=1alrwdnFe7pKotgiYGjHXWu9nK4qMIzQV"
        },
        {
          id: "3",
          name: "Pankaj kumar meena ",
          designation: "Event management Head",
          linkedin: "https://www.linkedin.com/in/pankaj-meena-8305aa269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/profile.php?id=100084255485902&mibextid=ZbWKwL",
          inst: "https://www.instagram.com/pankaj56_06?igsh=MTBydXZ2YW5iam5nZQ==",
          image: "https://drive.google.com/open?id=17kF6PJcvzKKGzPsyaPWYENMJvTERbbxv"
        },
        {
          id: "2",
          name: "Shayan Debroy",
          designation: "Web Team Head",
          linkedin: " ",
          facebook: " ",
          git: " ",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/ijk4s35qv06jbumfqrvl"
        },
        {
          id: "13",
          name: "Pratik Majumdar",
          designation: "Web Team Head",
          linkedin: "https://www.linkedin.com/in/codadept/",
          facebook: "https://facebook.com/itspratikmaj",
          git: "https://www.github.com/codadept",
          image: "https://drive.google.com/open?id=1HiJd1EURgLv6Z2174rdQCWT59r_eAhNo"
        },
        {
          id: "17",
          name: "Saurav Pal",
          designation: "Web Team Head",
          linkedin: "https://www.linkedin.com/in/resyfer",
          facebook: "https://www.facebook.com/resyfer.dev",
          git: "https://github.com/resyfer",
          image: "https://drive.google.com/open?id=1A77g7YVzfOgltOmVY0qBOu04i5o3y__y"
        },
        {
          id: "5",
          name: "Truptee Vinod Undre",
          designation: " Marketing Head",
          linkedin: "https://www.linkedin.com/in/truptee-vinod-undre-9847b1187/",
          facebook: "https://www.facebook.com/truptee.undre?mibextid=ZbWKwL",
          inst: "https://www.instagram.com/_truptee__/",
          image: "https://drive.google.com/open?id=1tvMR714TnIFXYNUMZvCmvX9_IqQ4SJUw"
        },
        {
          id: "29",
          name: "Syed Intekhab Hussain",
          designation: "Marketing Head",
          linkedin: "https://www.linkedin.com/in/syed-intekhab-0b257a205/",
          facebook: "https://www.facebook.com/syedintekhab.hussain.9",
          inst: "https://www.instagram.com/inte_khaab_/",
          image: "https://drive.google.com/open?id=1LFplJg9Vlf7h8CwN2yAXF3Z1loxEj60z"
        },
        {
          id: "6",
          name: "Bhaskar Wary",
          designation: "UI/UX Head",
          linkedin: "https://www.linkedin.com/in/bhaskar-wary/",
          facebook: "https://www.facebook.com/bhaskar.wary.10/",
          inst: "https://www.behance.net/bhaskarwary",
          image: "https://drive.google.com/open?id=1OgabuQ-MXNtMpAw0a-HDyGd-JmNrLl6H"
        },
        {
          id: "9",
          name: "Eisha Halder ",
          designation: "PR Head ",
          linkedin: "https://www.linkedin.com/in/eisha-halder-a42367200/",
          facebook: "https://www.facebook.com/eisha.halder.16",
          inst: "https://www.instagram.com/eisha_s.halder/",
          image: "https://drive.google.com/open?id=1cQInye3YG8BZxQ311rRdQmpfujE83cmo"
        },


        {
          id: "14",
          name: "Biju Borah",
          designation: "App Team Head",
          linkedin: "https://www.linkedin.com/in/biju-borah-1bb78620a",
          facebook: "https://www.facebook.com/biju.borah.77582?mibextid=ZbWKwL",
          git: "https://github.com/biju-borah",
          image: "https://drive.google.com/open?id=1rmpTFKtfsllMNwvXhNGxHt8MyAqESR1b"
        },
        {
          id: "33",
          name: "Ayush Gupta ",
          designation: "App Team head",
          linkedin: "https://www.linkedin.com/in/gupta--ayush/",
          facebook: "https://www.facebook.com/profile.php?id=100058445922286",
          inst: "https://www.instagram.com/a_y_u_s_h_g__/",
          image: "https://drive.google.com/open?id=10atD9YwrTXzo-JNSMjlkcErGxqBA5cr3"
        },
        {
          id: "18",
          name: "Rohan Deb",
          designation: "Design Head",
          linkedin: "https://www.linkedin.com/in/rohan-deb-444ab8204",
          facebook: "https://www.facebook.com/rohan.deb.908579?mibextid=9R9pXO",
          inst: "https://www.instagram.com/rohan.pxl?igsh=MWRqM3VjMGh2Y3JseA==",
          image: "https://drive.google.com/open?id=1x9Q6wbDgOrS_vQGz8Q1J1P_H0WOqTowh"
        },
        {
          id: "20",
          name: "Hannan Afridi ",
          designation: "Logistics Head",
          linkedin: "https://www.linkedin.com/in/hannan-afridi-39ab0b203",
          facebook: "https://www.facebook.com/jack.ahmed.9237?mibextid=ZbWKwL",
          inst: "https://www.instagram.com/_the_thunder_emperor________?igsh=cmZmNWh6am05ZjAy",
          image: "https://drive.google.com/open?id=1OehjfH6FDvnJBO728gvn_X-Iu8ZFtM7_"
        },
        {
          id: "8",
          name: "Ansh Umathe",
          designation: "Logistics Co-Head",
          linkedin: "https://www.linkedin.com/in/anshumathe/",
          facebook: "https://www.facebook.com/ansh.umathe/",
          inst: "https://www.instagram.com/ansh.umathe/",
          image: "https://drive.google.com/open?id=109pl9YgruMCYPwXesNEgjBNjRrsVtlex"
        },
        {
          id: "22",
          name: "Priya Pal ",
          designation: "Hospitality Head",
          linkedin: "https://www.linkedin.com/in/priya-pal-477449208",
          facebook: "https://www.facebook.com/profile.php?id=100061192114590&mibextid=ZbWKwL",
          inst: "https://www.instagram.com/priiya_pal?igsh=dGV2b2ljeWJ0dG83",
          image: "https://drive.google.com/open?id=1MhUEqIw7m2Uz9bYicRPIJYxo_6TOawO-"
        },

        {
          id: "32",
          name: "Rishikesh Kumar Narayan Sinha",
          designation: "Conferenza team Head",
          linkedin: "https://www.linkedin.com/in/rishikesh-kumar-narayan-sinha-751552160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/rishikesh.krnarayansinha/",
          inst: "https://www.instagram.com/rishikesh_018/tagged/",
          image: "https://drive.google.com/open?id=1kMFtUVBYQyFvHiIJPkTBFqc-oS34hAHB"
        },
      ],
    },

    {
      id: 3,
      name: "Technical Team",
      members: [
        {
          id: "23",
          name: "Bijay Jiwrajka ",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/bijay-jiwrajka-6b308a225/",
          facebook: "https://www.facebook.com/bijay.jiwrajka.1",
          git: "https://github.com/bj-jiwrajka",
          image: "https://drive.google.com/open?id=1IqKPG7DjgE1Yur-aguH0xVfYh0cLUePG"
        },

        {
          id: "2",
          name: "Swarup Chanda",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/swarup-chanda-23053724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/swarup.chanda.984",
          git: "https://github.com/swarupecenits",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/ja3fyklkiijk1zoa3tzb"
        },
        {
          id: "30",
          name: "Zinal Potphode ",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/zinal-potphode-0484b8262",
          facebook: "https://www.facebook.com/profile.php?id=100089288271108&mibextid=ZbWKwL",
          git: "https://github.com/ZinalPotphode",
          image: "https://drive.google.com/open?id=1x68oG9RUQQDd_pn2HYReknIK4tyid1Cr"
        },
        {
          id: "4",
          name: "Barnil Sarma",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/barnil-sarma-34383a255?trk=contact-info",
          facebook: "https://m.facebook.com/profile.php/?id=100056956539956",
          git: "https://github.com/barnilsarma",
          image: "https://drive.google.com/open?id=1q2gz5O1_gWEztAL6IKfSpe9JEKBt23Ag"
        },
        {
          id: "7",
          name: "Dhiraj Das",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/dhiraj-das-a26042249/",
          facebook: "https://www.instagram.com/dheerajdas19/",
          git: "https://github.com/dheeraj1922d",
          image: "https://drive.google.com/open?id=142Y-E4fjCdEnFaKD-C3yCVuVz8a6r1Mj"
        },
        {
          id: "12",
          name: "Vivek Kumar Sahni",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/vivek-sahni-87b6a822b/",
          facebook: "https://www.facebook.com/profile.php?id=100076320845128",
          git: "https://github.com/VivekKumarSahni",
          image: "https://drive.google.com/open?id=1fYZ2T2wFq8zcD-tgA0UrmbPHUPtAKKWg"
        },
        {
          id: "15",
          name: "Rajdristant Ghose",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/rajdristant-ghose-286061231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/profile.php?id=100076066695970&mibextid=ZbWKwL",
          git: "https://github.com/Raj217",
          image: "https://drive.google.com/open?id=1tjURlnb74QCwq4j47WgiXRgl75TNnJ5b"
        },
        {
          id: "11",
          name: "Jugya Kamal Gogoi",
          designation: "Cloud Member",
          linkedin: "https://www.linkedin.com/in/jugya",
          facebook: "https://www.facebook.com/zhang.jike.311/",
          git: "https://github.com/Jugya07",
          image: "https://drive.google.com/open?id=19IwITPXblUN-0-bew1zTU8mC2bfWm_ns"
        },

        {
          id: "24",
          name: "Jacinth Mahanta",
          designation: "UI/UX Designer",
          linkedin: "https://www.linkedin.com/in/gitsentinel/",
          facebook: "https://www.facebook.com/jacinth.mahanta/",
          git: "https://github.com/GitSentinel",
          image: "https://drive.google.com/open?id=1KSCtMFJFvIQp_7_o5TvDyfQtlY-pGYpJ"
        },
        {
          id: "39",
          name: "Kaustav Dev",
          designation: "UI UX Designer",
          linkedin: "https://www.linkedin.com/in/kaustav-dev-429123248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/profile.php?id=100087939076312&mibextid=ZbWKwL",
          inst: "https://www.instagram.com/dev.kaustav?igsh=cm5jND\n\nN3bDV0emdo",
          image: "https://drive.google.com/open?id=1sJZIb-H00U_5KVmR5UnBJZtGMIypxBRt"
        },
        {
          id: "38",
          name: "Gracie G Rabha ",
          designation: "UI/UX Designer ",
          linkedin: "https://www.linkedin.com/in/gracie-g-rabha-4472621aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/profile.php?id=100087872117590&mibextid=ZbWKwL",
          inst: "https://www.instagram.com/gracie__ruth?igsh=N3UyNzRyZDA2Nmhy",
          image: "https://drive.google.com/open?id=1s85eYXfG1sONTpiQ3sMv9ah7NtbBhXnY"
        },
        {
          id: "35",
          name: "Siddharth Ghosh",
          designation: "UI/UX Designer",
          linkedin: "https://www.linkedin.com/in/siddharth-ghosh-18ba29251/",
          facebook: "https://www.facebook.com/profile.php?id=100070117330528",
          inst: "https://www.instagram.com/z_maniac_sidd/",
          image: "https://drive.google.com/open?id=1jCJAPqpE-9cwa1B2EKwh16M9wahr5O0R"
        },
        {
          id: "34",
          name: "Samarjit Roy",
          designation: "UI/UX Designer",
          linkedin: "https://www.linkedin.com/in/samarjit-roy-368071257/",
          facebook: "https://www.facebook.com/profile.php?id=100087733476599&mibextid=9R9pXO",
          git: "https://github.com/Samarjit25",
          image: "https://drive.google.com/open?id=1EYjT0AdPM7mM8c84LAL-PrVAaMvIqKH7"
        },
        {
          id: "16",
          name: "Priyabrat Duarah",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/priyabratduarah/",
          facebook: "https://www.facebook.com/profile.php?id=100076231446828",
          git: "https://github.com/Prybrt06",
          image: "https://drive.google.com/open?id=1IsLTMLPLF_f6zzCb83jzOSrOTtpySffn"
        },
        {
          id: "21",
          name: "Ayush Shahi ",
          designation: "App Developer",
          linkedin: "https://www.linkedin.com/in/ayush-shahi-5412b8123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/profile.php?id=100087912133756&mibextid=JRoKGi",
          git: "https://github.com/AyuTechLive",
          image: "https://drive.google.com/open?id=1U423s0eXVLTxIf__6oV5U8qC477HBJOt"
        },
        {
          id: "26",
          name: "Sameer Zaidi",
          designation: "App Developer",
          linkedin: "https://www.linkedin.com/in/sameer-zaidi-541261226/",
          facebook: "https://www.facebook.com/SyedSameerZaidi123",
          git: "https://github.com/Interstellar07",
          image: "https://drive.google.com/open?id=1lf7PKmInbioCSSFge9ljFo1lb4iHoGiD"
        },
        {
          id: "27",
          name: "Navneet",
          designation: "App Developer",
          linkedin: "https://www.linkedin.com/in/navneet-raj-08a720228/",
          facebook: "https://www.facebook.com/profile.php?id=100080411300265",
          git: "https://github.com/navneet098",
          image: "https://drive.google.com/open?id=12TRcVYfh1tOoD6OF5uiLftxepUuCZlSx"
        },
        {
          id: "28",
          name: "Diptangshu Chakraborty ",
          designation: "App Developer ",
          linkedin: "https://www.linkedin.com/in/diptangshu-chakraborty-463b77250",
          facebook: "NIL",
          git: "https://github.com/Diptanghsu-DC",
          image: "https://drive.google.com/open?id=1Bed6-V0SxnSLEZWW9ep8kJeiifIZBlRl"
        },
        {
          id: "36",
          name: "Kanika Punia",
          designation: "App Developer",
          linkedin: "https://www.linkedin.com/in/kanika-punia-5b15a5210/",
          facebook: ".",
          git: "https://github.com/KanikaPunia119",
          image: "https://drive.google.com/open?id=1-sUoiC0laB-c1TafDBmp_Szu7dmdc6e3"
        },
        {
          id: "37",
          name: "Diptabh Medhi",
          designation: "App Developer",
          linkedin: "https://www.linkedin.com/in/diptabh-medhi-4836a8229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/profile.php?id=100076196678788&mibextid=9R9pXO",
          git: "https://github.com/diptabhm",
          image: "https://drive.google.com/open?id=1pMtpnVzUnr5GfMMn1Ekn5jEmoZFihc2M"
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
        className={`${isSticky ? styles.sticky : ""} ${styles.rightFrameParent
          }`}
        style={{ "translate": isSidebarVisible ? "0px" : "250px" }}
      >
        <div className={styles.rightFrame}>
          {teams.map((TeamName, id) => (
            <div
              key={id}
              className={styles.teamName}
              onClick={() => {
                setIndex(id);
                if (isSmallScreen) {
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
