// @ts-ignore
import cacti from '../images/cacti.JPEG';
// @ts-ignore
import bigFiddle from '../images/bigfiddle.JPEG';
// @ts-ignore
import smallFiddle from '../images/smallFiddle.JPEG';
// @ts-ignore
import monstera from '../images/monstera.JPEG';
// @ts-ignore
import croton from '../images/croton.JPEG';
// @ts-ignore
import p1 from '../images/1000000191.jpg';
// @ts-ignore
import p2 from '../images/1000000192.jpg';
// @ts-ignore
import p3 from '../images/1000002452.jpg';
// @ts-ignore
import p4 from '../images/1000002454.jpg';

import './funpage.css';


function FunPage() {
    return (
        <div className={"funcontent"}>
        <div className={"funsummary"} >
            <h1>Personal</h1>
            <p> I love plants! I have a small collection of houseplants that I care for. I also spend a lot of my time studying music theory and playing guitar.
            </p>
        </div>
        <div className={"row"}>
            <div className={"column"}>
                <img src={bigFiddle} alt="Logo"/>
                <img src={monstera} alt="Logo" />
            </div>
            <div className={"column"}>
                <img src={smallFiddle} alt="Logo" />
                <img src={p3} alt="Logo" />

            </div>
            <div  className={"column"}>
                <img src={p1} alt="Logo" />
                <img src={croton} alt="Logo" />

            </div>
            <div className={"column"}>
                <img src={cacti} alt="Logo" />
                <img src={p4} alt="Logo" />
            </div>
            <div className={"column"}>

            </div>
        </div>
        </div>
    );
}

export default FunPage;
