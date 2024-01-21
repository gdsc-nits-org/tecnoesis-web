import styles from './Registration.module.css';
import { useState, useEffect, useRef } from 'react';

const BACKEND_URL = import.meta.env.VITE_BASE_URL;
const Card = ({ id, setMembers, name }) => {
    const [active, setActive] = useState(false);
    const toggleStatement = useRef(null);
    const toggleIcon = useRef(null);
    var t = document.querySelector(':root');
    var u = window.getComputedStyle(t, null);
    var closed = u.getPropertyValue('--inactive');
    var opened = u.getPropertyValue('--active');
    // const detailsClick = (e) => {
    //     e.preventDefault();
    //     e.target.innerHTML = "EDIT";
    //     setActive(active === false ? true : false);

    // }
    const handleChange = (e) => {
        setMembers(prevMembers => {
            const newMembers = [...prevMembers];
            newMembers[id] = e.target.value;
            return newMembers;
        });
    }
    return (
        <div className={styles.parent}>
            <div key={id} className={styles.memberBox}>
                <div className={styles.leftPortion}>
                    <h1 className={styles.memberName}>USERNAME</h1>
                    <div className={styles.memberInfo}>
                        <input type="text" placeholder='Enter your name' value={name} onChange={handleChange} className={styles.memberInput} />
                    </div>
                </div>
            </div>
        </div>
    );
}
const Registration = () => {
    const [maxMember, setmaxMember] = useState();
    const [teamName, setTeamName] = useState("");
    const [members, setMembers] = useState([]);
    const [eventId, seteventId] = useState('65a5849d3232bd1424b3ef55');
    const [loadingMsg, setloadingMsg] = useState("Loading fields......");
    async function submitForm(e) {
        e.preventDefault();
        let filter = members.filter((item) => item != "");
        // let response = await fetch("https://tecnoesis-api.onrender.com/api/team/event/65a5849d3232bd1424b3ef55/add", {
        let response = await fetch(`${BACKEND_URL}/api/team/event/65a5849d3232bd1424b3ef55/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer 1000000"
            },
            body: JSON.stringify({
                "name": teamName,
                "members": filter,
                "extrainformation": "This team specialises in AI and machine learning projects"
            })
        });
        if (!response) {
            console.log("Processing");
        }
        else {
            if (response.status == 200) {
                alert("Successfully registered!!");
            }
            else {
                alert("Problem in registration! Retry after a few minutes.");
            }
        }
    }
    async function fetchData() {
        // let response = await fetch("https://tecnoesis-api.onrender.com/api/event", { method: 'GET' });
        let response = await fetch(`${BACKEND_URL}/api/event`, { method: 'GET' });
        let maxNumber = await response.json();
        let arr = maxNumber.msg;
        let arrFilter = arr.filter((item) => item.id = eventId);
        let msg = arrFilter[0].maxTeamSize;
        setmaxMember(msg);
        setloadingMsg(null);
        // console.log(msg);
        let temp = Array.from({ length: msg - 1 }, () => "");
        setMembers(temp);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.regCont}>
            <h1 className={styles.mainHeading}>REGISTRATION FORM</h1>
            <div className={styles.innerCont}>
                <div className={styles.lottieCont}>
                    <img className={styles.alienComp} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1705322365/tecnoesis/alien-gif_lcycsq.gif' alt='alien static loading...' />
                </div>
                <form className={styles.formCont}>
                    <div className={styles.teamNameCont}>
                        <h1 className={styles.teamName}>TEAM NAME</h1>
                        <input type="text" className={styles.teamField} value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Enter your team name here.." />
                    </div>
                    <div className={styles.memberCont}>
                        <h1 style={{ color: '#ffffff' }}>{loadingMsg}</h1>
                        {
                            members.map((member, index) =>
                                <Card key={index} BACKEND_URL={BACKEND_URL} id={index} name={member} setMembers={setMembers} />
                            )
                        }

                        {/* <button className={styles.addMember} onClick={addMember}>
                            + Add Member
                        </button> */}
                    </div>
                    <div className={styles.subCont}><input type="submit" className={styles.submit} value="SUBMIT" onClick={submitForm} /></div>
                </form>
            </div>
        </div>
    );
}
export default Registration;