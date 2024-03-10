import "./Header.css";
// @ts-ignore
import {useHistory} from "react-router-dom";



function Header() {
    const history = useHistory();
    const clickProgramming = () => {
        history.push('/programming');
    }

    const clickMath = () => {
        history.push('/math');
    }

    const clickContact = () => {
        history.push('/contact');
    }



  return (
    <header className="Header">
        <div className="first-child clickable"  onClick={() => history.push('/')}>Brandon</div>
        <div className="clickable" onClick={clickMath}><strong>.</strong>Math</div>
        <div   className="clickable" onClick={clickProgramming}><strong>.</strong>Programming</div>
        <div  className="clickable" onClick={clickContact}><strong>.</strong>Contact</div>
    </header>
  );
}

export default Header;