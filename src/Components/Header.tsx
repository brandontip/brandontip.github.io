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
        <div className="first-child"  onClick={() => history.push('/')}>Brandon</div>
        <div onClick={clickMath}><strong>.</strong>Math</div>
        <div  onClick={clickProgramming}><strong>.</strong>Programming</div>
        <div onClick={clickContact}><strong>.</strong>Contact</div>
    </header>
  );
}

export default Header;