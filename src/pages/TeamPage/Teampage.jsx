import React, { useState, useEffect } from "react";
import styles from "./Teampage.module.css";
import { Card } from "../../components/Team/Card";
import toggleLeft from "/images/teamPage/toggle1.svg";
import toggleRight from "/images/teamPage/toggleRight.svg";
import { Footer, Navbar2 } from "../../components";

const Teampage = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // const offset = window.scrollY;

      // // Adjust the offset
      // if (offset < 500) {
      //   setIsSticky(true);
      // } else {
      //   setIsSticky(false);
      // }

      const footer = document.getElementById("footer");
      const footerRect = footer.getBoundingClientRect();

      if (footerRect.top - window.innerHeight > 0) {
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
          id: "93",
          name: " Ashish kumar",
          designation: "Chief Coordinator",
          linkedin:
            "https://www.linkedin.com/in/ashish-kumar-5b0a24207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook:
            "https://www.facebook.com/profile.php?id=100013905035630&mibextid=ZbWKwL",
          inst: "https://www.instagram.com/ashish_45_k?igsh=MWVxMTNsMXZyNjAxag==",
          image:
            "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/uxmzjjkgbz3elflkyhjp",
        },
        {
          id: "19",
          name: "Mriganga Jyoti Chutia",
          designation: "CONVENOR",
          linkedin:
            "https://www.linkedin.com/in/mriganga-jyoti-chutia-475b53202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook:
            "https://www.facebook.com/mriganga.jyotichutia?mibextid=ZbWKwL",
          inst: "https://www.instagram.com/_mri_ganga_?igsh=djV0ZmVvcHM1NXcx",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1706210678/tecnoesis/IMG20221003210912_-_Mriganga_Jyoti_Chutia_b5c78g.webp",
        },
        {
          id: "92",
          name: "MIRAJ DEKA",
          designation: "CONVENOR",
          linkedin:
            "http://www.linkedin.com/in/miraj-deka-32a78720a",
          facebook:
            "https://www.facebook.com/miraz.deka",
          inst: "https://www.instagram.com/not_miraj_/?hl=en",
          image:
            "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/cvsjl6ea2rlcwzyhoor5",
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
          designation: "Executive Head",
          linkedin:
            "https://www.linkedin.com/in/jyotishka-b-32995712b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/profile.php?id=100005647038947",
          inst: "https://www.instagram.com/_jyo.tishka_?igsh=MTdlMWw5aDA3NHU5cw==",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706204614/IMG_20240121_104534038_HDR_-_Jyotishka_Bhattacharjee_v2vvwn.jpg",
        },
        {
          id: "10",
          name: "Debashish Konwar",
          designation: "Executive Head",
          linkedin: "https://www.linkedin.com/in/debasishkonwar/",
          facebook: "https://www.facebook.com/debasish.konwar.25",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706206024/DSC_0174_2_-_Debasish_Konwar_qwqaq9.jpg",
        },
        // {
        //   id: "3",
        //   name: "Pankaj kumar meena ",
        //   designation: "Event Management Head",
        //   linkedin:
        //     "https://www.linkedin.com/in/pankaj-meena-8305aa269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        //   facebook:
        //     "https://www.facebook.com/profile.php?id=100084255485902&mibextid=ZbWKwL",
        //   inst: "https://www.instagram.com/pankaj56_06?igsh=MTBydXZ2YW5iam5nZQ==",
        //   image:
        //     "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706204894/Snapchat-662942085_-_BadBoy_Panku_cxxxau.jpg",
        // },
        {
          id: "80",
          name: "Kavya Sharma",
          designation: "Event management Head",
          linkedin: "https://www.linkedin.com/in/kavya-sharma-b143651ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          inst: "https://www.instagram.com/bhardwaj_",
          facebook: "https://www.facebook.com/profile.php?id=100008131120392&mibextid=ZbWKwL",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/dapglknefuhts7tckf4w"
        },
        {
          id: "44",
          name: "Yuvraj Singh ",
          designation: "Event management Head",
          linkedin: "",
          inst: "https://www.instagram.com/singhyuvraj1102/",
          facebook: "https://www.facebook.com/profile.php?id=100056971062674&mibextid=ZbWKwL",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/lgdnb55ywripzrjekpb9"
        },
        {
          id: "81",
          name: "Ankit Srivastava ",
          designation: "Event management Head",
          linkedin: "https://www.linkedin.com/in/srivastavaankit15/",
          git: "https://github.com/Srivastavaankit15",
          facebook: "https://www.facebook.com/ankit.srivastava.0015",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/hkmakxcwgqzrtjp0kdgc"
        },
        {
          id: "82",
          name: "Ranjan Kumar Mandal",
          designation: "Event management Head",
          linkedin: "https://www.linkedin.com/in/ranjan-kumar-mandal-0501b420b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          inst: "https://www.instagram.com/_ranjan_200?igsh=MTRhMmszMnhobGlrcg%3D%3D&utm_source=qr",
          facebook: "https://www.facebook.com/ranjan.kumarii.90?mibextid=tPfjzR",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/wmkt6aoleebtjfxzqwh1"
        },
        {
          id: "2",
          name: "Shayan Debroy",
          designation: "Technical Head",
          linkedin:
            "https://www.linkedin.com/in/shayan-debroy?trk=contact-info",
          facebook: "https://www.facebook.com/shayan.debroy.90",
          git: "https://github.com/shayan-cyber",
          image:
            "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/ijk4s35qv06jbumfqrvl",
        },
        {
          id: "13",
          name: "Pratik Majumdar",
          designation: "Web Team Head",
          linkedin: "https://www.linkedin.com/in/codadept/",
          facebook: "https://facebook.com/itspratikmaj",
          git: "https://www.github.com/codadept",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1706210714/tecnoesis/Pratik_Majumdar_Square_-_Pratik_Majumdar_rnsiga.webp",
        },
        {
          id: "17",
          name: "Saurav Pal",
          designation: "Web Team Head",
          linkedin: "https://www.linkedin.com/in/resyfer",
          facebook: "https://www.facebook.com/resyfer.dev",
          git: "https://github.com/resyfer",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1706210758/tecnoesis/IMG_20240122_122121_2_-_Saurav_Pal_uelt1r.webp",
        },
        {
          id: "50",
          name: "Aniruddha Dutta",
          designation: "Web Team Head",
          linkedin:
            "https://www.linkedin.com/in/aniruddha-dutta-naz/",
          facebook:
            "https://www.facebook.com/aniruddha.dutta.naz/",
          git: "https://github.com/username-naz",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1694017416/gdsc%20seniors/team_pics/AniruddhaDutta_ipghak.webp",
        },
        {
          id: "5",
          name: "Truptee Vinod Undre",
          designation: "Marketing Head",
          linkedin:
            "https://www.linkedin.com/in/truptee-vinod-undre-9847b1187/",
          facebook: "https://www.facebook.com/truptee.undre?mibextid=ZbWKwL",
          inst: "https://www.instagram.com/_truptee__/",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706205163/IMG20231013164902-removebg-preview_1_-_EEB-098_Truptee_Undre_cu2uby.png",
        },
        {
          id: "87",
          name: "ABHISHEK RAJ",
          designation: "Marketing Head",
          linkedin: "https://www.linkedin.com/in/abhishekrajceoarfglobal/",
          facebook: "",
          inst: "",
          image:
            "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/jijaagjfqst0wpx3dro0",
        },
        {
          id: "29",
          name: "Syed Intekhab Hussain",
          designation: "Marketing Head",
          linkedin: "https://www.linkedin.com/in/syed-intekhab-0b257a205/",
          facebook: "https://www.facebook.com/syedintekhab.hussain.9",
          inst: "https://www.instagram.com/inte_khaab_/",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706212700/IMG_20230102_130503_-_SYED_INTEKHAB_HUSSAIN_rxkftn.jpg",
        },
        {
          id: "85",
          name: "Agneesh Dasgupta",
          designation: "Marketing Head",
          linkedin: "https://www.linkedin.com/in/agneesh-dasgupta-81090a1bb/",
          facebook: "https://www.facebook.com/agneesh.dasgupta/",
          git: "https://github.com/Agneeshz",
          image:
            "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/virwtygfm8rhhfw5ldam",
        },
        {
          id: "6",
          name: "Bhaskar Wary",
          designation: "UI/UX Head",
          linkedin: "https://www.linkedin.com/in/bhaskar-wary/",
          facebook: "https://www.facebook.com/bhaskar.wary.10/",
          inst: "https://www.behance.net/bhaskarwary",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706205317/Wary_Profile_-_Bhaskar_Wary_ijpbdt.jpg",
        },
        {
          id: "84",
          name: "ABHISHEK RAJ",
          designation: "Content and Documentation Head",
          linkedin: "https://www.linkedin.com/in/abhishekrajceoarfglobal/",
          facebook: "",
          inst: "",
          image:
            "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/jijaagjfqst0wpx3dro0",
        },
        {
          id: "9",
          name: "Eisha Halder ",
          designation: "PR Head",
          linkedin: "https://www.linkedin.com/in/eisha-halder-a42367200/",
          facebook: "https://www.facebook.com/eisha.halder.16",
          inst: "https://www.instagram.com/eisha_s.halder/",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706205888/WhatsApp_Image_2024-01-22_at_00.04.54_-_CSE_045_Eisha_Halder_n4nmyh.jpg",
        },
        {
          id: "45",
          name: "Jadav Anusha ",
          designation: "PR Head",
          linkedin: "https://www.linkedin.com/in/jadav-anusha-34b56320a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          facebook: "https://www.facebook.com/share/y9JAR3mqXWCBXd5j/?mibextid=WC7FNe",
          inst: "https://www.instagram.com/jadhav._.anusha?igsh=cXF3M3dsZWl2MTFp",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/vnoohxhwcaggab4o68ru"
        },
        {
          id: "14",
          name: "Biju Borah",
          designation: "App Team Head",
          linkedin: "https://www.linkedin.com/in/biju-borah-1bb78620a",
          facebook: "https://www.facebook.com/biju.borah.77582?mibextid=ZbWKwL",
          git: "https://github.com/biju-borah",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1706210724/tecnoesis/IMG-20221208-WA0012_1_-_Biju_Borah_h1g3st.webp",
        },
        {
          id: "33",
          name: "Ayush Gupta ",
          designation: "App Team Head",
          linkedin: "https://www.linkedin.com/in/gupta--ayush/",
          facebook: "https://www.facebook.com/profile.php?id=100058445922286",
          inst: "https://www.instagram.com/a_y_u_s_h_g__/",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706213457/WhatsApp_Image_2023-12-12_at_18.47.34_1_-_Ayush_Gupta_pk5pwv.jpg",
        },
        {
          id: "18",
          name: "Rohan Deb",
          designation: "Design Head",
          linkedin: "https://www.linkedin.com/in/rohan-deb-444ab8204",
          facebook: "https://www.facebook.com/rohan.deb.908579?mibextid=9R9pXO",
          inst: "https://www.instagram.com/rohan.pxl?igsh=MWRqM3VjMGh2Y3JseA==",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1706210775/tecnoesis/1705913533019-01_-_Rohan_Deb_merstq.webp",
        },
        {
          id: "51",
          name: "Mudra Das",
          designation: "Design Head",
          linkedin: "https://www.linkedin.com/in/mudra-das-594620200/",
          facebook: "https://www.facebook.com/profile.php?id=100082138975470&sfnsn=wiwspwa&mibextid=RUbZ1f",
          git: "https://github.com/mud-pot",
          image:
            "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/cplfujulzrz2cyleonvh",
        },
        {
          id: "20",
          name: "Hannan Afridi ",
          designation: "Logistics Head",
          linkedin: "https://www.linkedin.com/in/hannan-afridi-39ab0b203",
          facebook: "https://www.facebook.com/jack.ahmed.9237?mibextid=ZbWKwL",
          inst: "https://www.instagram.com/_the_thunder_emperor________?igsh=cmZmNWh6am05ZjAy",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1706210499/tecnoesis/IMG-20230802-WA0001_-_Hannan_Afridi_bdfgue.webp",
        },
        {
          id: "48",
          name: "Abhishek bairwa ",
          designation: "Logistics Head ",
          linkedin: "https://www.linkedin.com/in/abhishek-bairwa-a39ba2224",
          inst: "https://www.instagram.com/abhishek__bairwa/",
          facebook: "https://www.facebook.com/abhi.bairwa.562?mibextid=JRoKGi",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/riuecbase15tzucacseq"
        },
        {
          id: "8",
          name: "Ansh Umathe",
          designation: "Logistics Co-Head",
          linkedin: "https://www.linkedin.com/in/anshumathe/",
          facebook: "https://www.facebook.com/ansh.umathe/",
          inst: "https://www.instagram.com/ansh.umathe/",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706205817/PPTIMG_-_EE-B_131_Ansh_Umathe_sjvlxq.jpg",
        },
        {
          id: "22",
          name: "Priya Pal ",
          designation: "Hospitality Head",
          linkedin: "https://www.linkedin.com/in/priya-pal-477449208",
          facebook:
            "https://www.facebook.com/profile.php?id=100061192114590&mibextid=ZbWKwL",
          inst: "https://www.instagram.com/priiya_pal?igsh=dGV2b2ljeWJ0dG83",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706211967/IMG_20231008_021040_984_-_EE-B_118_Priya_Pal_px70bz.jpg",
        },
        {
          id: "49",
          name: "Abhishek Soni",
          designation: "Hospitality Head",
          linkedin: "https://www.linkedin.com/in/abhishek-soni-8371b3238/",
          facebook: "https://www.facebook.com/profile.php?id=100010523790887",
          git: "https://github.com/abyssoni",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/obgtqmtzvztl8c49scfz"
        },

        {
          id: "32",
          name: "Rishikesh Kumar Narayan Sinha",
          designation: "Conferenza Head",
          linkedin:
            "https://www.linkedin.com/in/rishikesh-kumar-narayan-sinha-751552160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/rishikesh.krnarayansinha/",
          inst: "https://www.instagram.com/rishikesh_018/tagged/",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706213207/WhatsApp_Image_2024-01-23_at_14.13.34_-_R.K.N._Sinha_cxkckb.jpg",
        },
        {
          id: "41",
          name: "Suman Goswami",
          designation: "V-warz Module head",
          linkedin: "",
          facebook: "https://www.facebook.com/profile.php?id=100058459812857&mibextid=9R9pXO",
          inst: "https://www.instagram.com/fatty_thigh/",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/dqvrq9zkurfxshvygp24"
        },
        {
          id: "42",
          name: "Arnab Deka",
          designation: "V-Warz Module Head",
          linkedin: "https://www.linkedin.com/in/arnab-deka-624793218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/profile.php?id=100082138975470&sfnsn=wiwspwa&mibextid=RUbZ1f",
          inst: "https://www.instagram.com/arna_b_d?igsh=NzJpaTZnbWppaW90",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/yfgwbz0e7caqfy2o1a1e"
        },
        {
          id: "43",
          name: "Aaditya Vikram",
          designation: "Decoration team Head",
          linkedin: "https://www.linkedin.com/in/aaditya-vikram-a9b78420a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/aditya.vikram.754570?mibextid=ZbWKwL",
          inst: "https://www.instagram.com/vikram___adi?igsh=NjBmNjY1dnE0NHVt",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/dqv6rmemeywxlkmaovjg"
        },
        {
          id: "86",
          name: "Dhiraj Deka",
          designation: "Decoration team Head",
          linkedin: "https://www.linkedin.com/in/dhiraj-deka-04a952224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/dhiraj.deka.3538039",
          inst: "https://www.instagram.com/dhirajdeka332?igsh=OThob3VtN3ZzZTR5",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/juisdawaa9x5vpqvkc7h"
        },
        {
          id: "46",
          name: "Gautam Yadav",
          designation: "Infra Head",
          linkedin: "https://www.linkedin.com/in/gautam-yadav-00819120b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/gautam.yadavv.315",
          inst: "https://www.instagram.com/_the_gautam___/",
          image: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/m2xdvhzl4bskpcn5see9"
        }
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
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706212091/IMG_20240121_230459_-_Bijay_Jiwrajka_w6vif9.jpg",
        },
        {
          id: "16",
          name: "Priyabrat Duarah",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/priyabratduarah/",
          facebook: "https://www.facebook.com/profile.php?id=100076231446828",
          git: "https://github.com/Prybrt06",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1706210750/tecnoesis/IMG_1316-removebg-preview_1_-_Priyabrat_i1tqs1.webp",
        },
        {
          id: "2",
          name: "Swarup Chanda",
          designation: "Web Developer",
          linkedin:
            "https://www.linkedin.com/in/swarup-chanda-23053724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook: "https://www.facebook.com/swarup.chanda.984",
          git: "https://github.com/swarupecenits",
          image:
            "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/tsy2gxw8hoadnjus0mao",
        },
        {
          id: "30",
          name: "Zinal Potphode ",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/zinal-potphode-0484b8262",
          facebook:
            "https://www.facebook.com/profile.php?id=100089288271108&mibextid=ZbWKwL",
          git: "https://github.com/ZinalPotphode",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706213050/IMG_20230902_114735_063_-_Zinal_Potphode_oiia2f.jpg",
        },
        {
          id: "4",
          name: "Barnil Sarma",
          designation: "Web Developer",
          linkedin:
            "https://www.linkedin.com/in/barnil-sarma-34383a255?trk=contact-info",
          facebook: "https://m.facebook.com/profile.php/?id=100056956539956",
          git: "https://github.com/barnilsarma",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706205056/Screenshot_2024-01-16-17-55-56-476_com.whatsapp-edit_-_Barnil_Sarma_uapdbl.jpg",
        },
        {
          id: "7",
          name: "Dhiraj Das",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/dhiraj-das-a26042249/",
          facebook: "https://www.instagram.com/dheerajdas19/",
          git: "https://github.com/dheeraj1922d",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706205523/myPhoto_-_dhiraj_das_i68slq.png",
        },
        {
          id: "12",
          name: "Vivek Kumar Sahni",
          designation: "Web Developer",
          linkedin: "https://www.linkedin.com/in/vivek-sahni-87b6a822b/",
          facebook: "https://www.facebook.com/profile.php?id=100076320845128",
          git: "https://github.com/VivekKumarSahni",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1706211096/tecnoesis/IMG_20240122_022345_-_vivek_sahni_iiky8q.webp",
        },
        {
          id: "15",
          name: "Rajdristant Ghose",
          designation: "Web Developer",
          linkedin:
            "https://www.linkedin.com/in/rajdristant-ghose-286061231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook:
            "https://www.facebook.com/profile.php?id=100076066695970&mibextid=ZbWKwL",
          git: "https://github.com/Raj217",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1706210747/tecnoesis/IMG_20230102_160505_-_035_Rajdristant_Ghose_bhchy6.webp",
        },
        {
          id: "11",
          name: "Jugya Kamal Gogoi",
          designation: "Cloud Member",
          linkedin: "https://www.linkedin.com/in/jugya",
          facebook: "https://www.facebook.com/zhang.jike.311/",
          git: "https://github.com/Jugya07",
          image:
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1706210700/tecnoesis/IMG_1159_1_-_098_Jugya_Kamal_Gogoi_lwuioh.webp",
        },

        {
          id: 90,
          name: "Pragya Annesha Baruah",
          designation: "UI/UX Designer",
          linkedin:
            "https://www.linkedin.com/in/pragya-annesha-baruah-34a043229",
          facebook: "https://www.facebook.com/profile.php?id=100075204826742",
          git: "https://github.com/Prag03",
          image:
            "https://res.cloudinary.com/dl19r276g/image/upload/v1705513973/imagegdsc2_zdgzcm.webp",
        },

        {
          id: "24",
          name: "Jacinth Mahanta",
          designation: "UI/UX Designer",
          linkedin: "https://www.linkedin.com/in/gitsentinel/",
          facebook: "https://www.facebook.com/jacinth.mahanta/",
          git: "https://github.com/GitSentinel",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706212181/me_-_Jacinth_Mahanta_n999iy.webp",
        },
        {
          id: "39",
          name: "Kaustav Dev",
          designation: "UI/UX Designer",
          linkedin:
            "https://www.linkedin.com/in/kaustav-dev-429123248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook:
            "https://www.facebook.com/profile.php?id=100087939076312&mibextid=ZbWKwL",
          inst: "https://www.instagram.com/dev.kaustav?igsh=cm5jND\n\nN3bDV0emdo",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706214492/IMG_20240116_111745_-_Kaustav_Dev_cr558z.jpg",
        },
        {
          id: "38",
          name: "Gracie G Rabha ",
          designation: "UI/UX Designer ",
          linkedin:
            "https://www.linkedin.com/in/gracie-g-rabha-4472621aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook:
            "https://www.facebook.com/profile.php?id=100087872117590&mibextid=ZbWKwL",
          inst: "https://www.instagram.com/gracie__ruth?igsh=N3UyNzRyZDA2Nmhy",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706214239/IMG_20240124_195007_-_CSE_012__Gracie_mznup5.jpg",
        },
        {
          id: "35",
          name: "Siddharth Ghosh",
          designation: "UI/UX Designer",
          linkedin: "https://www.linkedin.com/in/siddharth-ghosh-18ba29251/",
          facebook: "https://www.facebook.com/profile.php?id=100070117330528",
          inst: "https://www.instagram.com/z_maniac_sidd/",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706213760/IMG_20230730_162639_resized_1_-_EI_044_SIDDHARTH_GHOSH_xpynhp.jpg",
        },
        {
          id: "34",
          name: "Samarjit Roy",
          designation: "UI/UX Designer",
          linkedin: "https://www.linkedin.com/in/samarjit-roy-368071257/",
          facebook:
            "https://www.facebook.com/profile.php?id=100087733476599&mibextid=9R9pXO",
          git: "https://github.com/Samarjit25",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706213561/dcdcf409-64f0-44ef-8175-26e67b1ab432-removebg-preview-removebg-preview_2_-_Samarjit_Roy_cfjjzs.png",
        },

        {
          id: "21",
          name: "Ayush Shahi ",
          designation: "App Developer",
          linkedin:
            "https://www.linkedin.com/in/ayush-shahi-5412b8123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook:
            "https://www.facebook.com/profile.php?id=100087912133756&mibextid=JRoKGi",
          git: "https://github.com/AyuTechLive",
          image:
            "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/d2rhqgnkxqepily7qqsc",
        },
        {
          id: "26",
          name: "Sameer Zaidi",
          designation: "App Developer",
          linkedin: "https://www.linkedin.com/in/sameer-zaidi-541261226/",
          facebook: "https://www.facebook.com/SyedSameerZaidi123",
          git: "https://github.com/Interstellar07",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706212423/DSC_0068_-_Sameer_Zaidi_snorlt.jpg",
        },
        {
          id: "27",
          name: "Navneet",
          designation: "App Developer",
          linkedin: "https://www.linkedin.com/in/navneet-raj-08a720228/",
          facebook: "https://www.facebook.com/profile.php?id=100080411300265",
          git: "https://github.com/navneet098",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706212519/unnamed_-_Navneet_Raj_jlptjx.jpg",
        },
        {
          id: "28",
          name: "Diptangshu Chakraborty ",
          designation: "App Developer ",
          linkedin:
            "https://www.linkedin.com/in/diptangshu-chakraborty-463b77250",
          facebook: "NIL",
          git: "https://github.com/Diptanghsu-DC",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706212591/PSX_20240116_132155_-_Diptangshu_Chakraborty_kroftk.jpg",
        },
        {
          id: "36",
          name: "Kanika Punia",
          designation: "App Developer",
          linkedin: "https://www.linkedin.com/in/kanika-punia-5b15a5210/",
          facebook: ".",
          git: "https://github.com/KanikaPunia119",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706214043/WhatsApp_Image_2024-01-23_at_20.52.22_-_Kanika_Punia_kwovcy.jpg",
        },
        {
          id: "37",
          name: "Diptabh Medhi",
          designation: "App Developer",
          linkedin:
            "https://www.linkedin.com/in/diptabh-medhi-4836a8229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          facebook:
            "https://www.facebook.com/profile.php?id=100076196678788&mibextid=9R9pXO",
          git: "https://github.com/diptabhm",
          image:
            "https://res.cloudinary.com/dfa0k8sry/image/upload/v1706214109/WhatsApp_Image_2024-01-24_at_3.58.45_AM_-_Diptabh_Medhi_fqz8mj.jpg",
        },
      ],
    },
  ]);

  const [index, setIndex] = useState(0);

  return (
    <>
    <Navbar2/>
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
            linkedin={member.linkedin}
            facebook={member.facebook}
            github={member.git}
            inst={member.inst}
            />
            ))}
        </div>
      </div>

      {/* rightFrame */}
      <div
        className={`${isSticky ? styles.sticky : styles.absolute} ${styles.rightFrameParent
        }`}
        id="sidebar"
        style={{ translate: isSidebarVisible ? "0px" : "250px" }}
        >
        <div className={styles.rightFrame}>
          {teams.map((TeamName, id) => (
            <div
            key={id}
            className={styles.teamName}
            onClick={() => {
              setIndex(id);
              if (isSmallScreen) {
                setIsSidebarVisible(false);
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
              <Footer/>
              </>
  );
};
export default Teampage;
