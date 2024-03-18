import "./Header.css";
// @ts-ignore
import {useHistory} from "react-router-dom";
import {useState} from "react";



function Header() {
    const history = useHistory();
    const [activePage, setActivePage] = useState("self");
    const clickProgramming = () => {
        history.push('/programming');
        setActivePage("programming")
    }

    const clickMath = () => {
        history.push('/math');
        setActivePage("math")
    }

    const clickContact = () => {
        history.push('/contact');
        setActivePage("contact")
    }


const underline = "undered";
    let selfClass = "first-child clickable";
    let mathClass = "clickable";
    let programmingClass = "clickable";
    let contactClass = "clickable";
    if(activePage === "self") {
        selfClass += " " + underline;
    }
    if(activePage === "math") {
        mathClass += " " + underline;
    }
    if(activePage === "programming") {
        programmingClass += " " + underline;
    }
    if(activePage === "contact") {
        contactClass += " " + underline;
    }

    const clickSelf = () => {
        history.push('/');
        setActivePage("self")
    }


  return (
    <header className="Header">
        <div className={selfClass}  onClick={clickSelf}>Self</div>
        <div className={mathClass} onClick={clickMath}><strong>.</strong>Math</div>
        <div   className={programmingClass} onClick={clickProgramming}><strong>.</strong>Program</div>
        <div  className={contactClass} onClick={clickContact}><strong>.</strong>Enjoy</div>
    </header>
  );
}

export default Header;