import styles from './Registration.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BASE_URL;
const Card = ({ id, setMembers, name, minMember }) => {
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
                        <input type="text" placeholder={`${id < minMember - 1 ? `Member username ${id + 1} (required)` : `Member username ${id + 1}`}`} value={name} onChange={handleChange} className={styles.memberInput} required={id < minMember - 1} />
                    </div>
                </div>
            </div>
        </div>
    );
}
const Registration = () => {
    const { id } = useParams();
    const [maxMember, setmaxMember] = useState();
    const [minMember, setminMember] = useState();
    const [teamName, setTeamName] = useState("");
    const [typeofevent, setTypeofevent] = useState("TEAM NAME");
    const [members, setMembers] = useState([]);
    const [loadingMsg, setloadingMsg] = useState("Loading fields......");
    const [error, setError] = useState(null);
    const [required, setRequired] = useState(true);
    async function submitForm(e) {
        e.preventDefault();
        let filter = members.filter((item) => item != "");
        try {
            // let response = await fetch("https://tecnoesis-api.onrender.com/api/team/event/65a5849d3232bd1424b3ef55/add", {
            const token = localStorage.getItem("token");
            for (var i = 0; i < minMember - 1; i++) {
                if (members[i] === '') {
                    setRequired(false);
                    console.log(i);
                    break;
                }
            }
            if (required && teamName !== '') {
                let response = await fetch(`${BACKEND_URL}/api/team/event/${id}/add`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
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
                        setError("Successfully registered!!");
                    }
                    else if (response.status == 409) {
                        setError("Error! Conflict in registration!!");
                    }
                    else {
                        setError("Problem in registration!!");
                    }
                }
            }
            else {
                toast('Please fill the required fields');
            }
        } catch (err) {
            setError(err.message);
            alert(err.message);
        }
    }
    async function fetchData() {
        // let response = await fetch("https://tecnoesis-api.onrender.com/api/event", { method: 'GET' });
        let response = await fetch(`${BACKEND_URL}/api/event`, { method: 'GET' });
        let maxNumber = await response.json();
        let arr = maxNumber.msg;
        let arrFilter = arr.filter((item) => item.id = id);
        let msg = arrFilter[0].maxTeamSize;
        let minSg = arrFilter[0].minTeamSize;
        setminMember(minSg);
        setmaxMember(msg);
        setloadingMsg(null);
        if (msg === 1) {
            setTypeofevent("TEAM NAME");
        }
        // console.log(msg);
        let temp = Array.from({ length: msg - 1 }, () => "");
        setMembers(temp);
    }

    useEffect(() => {
        fetchData();
    }, []);
    if (localStorage.getItem("token")) {
        return (
            <div className={styles.regCont}>
                <h1 className={styles.mainHeading}>REGISTRATION FORM</h1>
                <div className={styles.innerCont}>
                    <div className={styles.lottieCont}>
                        <img className={styles.alienComp} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1705322365/tecnoesis/alien-gif_lcycsq.gif' alt='alien static loading...' />
                    </div>
                    <form className={styles.formCont}>
                        <div className={styles.teamNameCont}>
                            <h1 className={styles.teamName}>{typeofevent}</h1>
                            <input type="text" className={styles.teamField} value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder={`${typeofevent === 'TEAM NAME' ? 'Enter your team name here...' : 'Enter your name here'}`} />
                        </div>
                        <div className={styles.memberCont}>
                            <h1 style={{ color: '#ffffff' }}>ADD MEMBERS</h1>
                            <h1 style={{ color: '#ffffff' }}>{error}</h1>
                            <h1 style={{ color: '#ffffff' }}>{loadingMsg}</h1>
                            {
                                members.map((member, index) =>
                                    <Card key={index} BACKEND_URL={BACKEND_URL} id={index} name={member} minMember={minMember} setMembers={setMembers} />
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
    else {
        window.location.href = '/';
    }
}
export default Registration;