import styles from './Registration.module.css';
import { useState, useRef } from 'react'
const Card = (props) => {
    const [active, setActive] = useState(false);
    const toggleStatement = useRef(null);
    const toggleIcon = useRef(null);
    var t = document.querySelector(':root');
    var u = window.getComputedStyle(t, null);
    var closed = u.getPropertyValue('--inactive');
    var opened = u.getPropertyValue('--active');
    const detailsClick = (e) => {
        e.preventDefault();
        e.target.innerHTML = "EDIT";
        setActive(active === false ? true : false);

    }
    return (
        <div className={styles.parent}>
            <div key={props.id} className={styles.memberBox}>
                <div className={styles.leftPortion}>
                    <h1 className={styles.memberName}>{props.username}</h1>
                </div>
                <div className={styles.toggler}>
                    <button className={styles.addDetails} name={props.username} onClick={detailsClick} style={{ opacity: `${active === false ? '1' : '0'}`, transition: 'ease 500ms' }} ref={toggleStatement} >
                        Add Details
                    </button>
                    <button className={styles.addDetailsIcon} style={{ background: 'transparent', border: 'none', transition: 'ease 500ms', opacity: `${active === false ? '0' : '1'}` }} onClick={detailsClick} ref={toggleIcon}>
                        <img src='https://res.cloudinary.com/dhry5xscm/image/upload/v1705506833/tecnoesis/toggle_arrow_io69yk.svg' alt="toggle button..." />
                    </button>
                </div>
            </div>
            <div className={styles.toggleActiveState} style={{ opacity: `${active === false ? '0' : '1'}`, height: `${active === false ? closed : opened}`, transition: 'ease 500ms' }}>
                <div className={styles.memberInfo}>
                    <input type="text" placeholder='Enter your name' className={styles.memberInput} />
                    <input type="text" placeholder='Enter your phone number' className={styles.memberInput} />
                </div>
            </div>
        </div>
    );
}
const Registration = () => {
    const [count, setCount] = useState(1);
    var db = [
        {
            id: 1,
            username: 'Member 1',
            phone: 'xxxxxxxxxx',
        }
    ];
    const [DB, setDB] = useState(db);
    const addMember = (e) => {
        e.preventDefault();
        db = DB;
        db.push(
            {
                id: count + 1,
                username: `Member ${count + 1}`,
                phone: 'xxxxxxxxxx'
            }
        );
        setCount(count + 1);
        setDB(db);
    }
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
                        <input type="text" className={styles.teamField} placeholder="Enter your team name here.." />
                    </div>
                    <div className={styles.memberCont}>
                        {
                            DB.map((item) =>
                                <Card id={item.id} username={item.username} />
                            )
                        }
                        <button className={styles.addMember} onClick={addMember}>
                            + Add Member
                        </button>
                    </div>
                    <div className={styles.subCont}><input type="submit" className={styles.submit} value="SUBMIT" /></div>
                </form>
            </div>
        </div>
    );
}
export default Registration;