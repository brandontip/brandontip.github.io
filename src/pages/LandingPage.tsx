// @ts-ignore
import { CgMail } from "react-icons/cg";
// @ts-ignore
import { CiInstagram } from "react-icons/ci";
import "./landingpage.css";
// @ts-ignore
import { FaGithub } from "react-icons/fa";
import JobCard, {allEducation} from "../Components/JobHistory";
import { allJobs } from "../Components/JobHistory";
// @ts-ignore
import { FaLinkedin } from "react-icons/fa";



function LandingPage() {
    return (
        <>
        <div className="landingcontent">
            <div className="summaryside">
                <h1 className="myname"> Brandon Tippings</h1>
                <h3>Mathematician and Software Engineer</h3>
                <p>I love mathematics and computing, so I often find myself in the middle of projects that synthesize the two.</p>

                <div className="finalitem">  <a href="https://www.instagram.com/btippings/"><CiInstagram size={35} />  </a>
                    <a href="https://github.com/brandontip"> <FaGithub size={30} /> </a>
                    <a href="https://www.linkedin.com/in/brandontippings"><FaLinkedin  size={33}/></a>
                    <a href="mailto:tippingsbrandon@gmail.com"><CgMail size={40} /></a></div>
            </div>
            <ul>
                {allJobs.map((job) => {
                    return <JobCard timespan={job.timespan} title={job.title} company={job.company} description={job.description} techstack={job.techstack} />
                })}
                <div className="vl"/>
                {allEducation.map((job) => {
                    return <JobCard timespan={job.timespan} title={job.title} company={job.company} description={job.description} techstack={job.techstack} />
                })}
            </ul>

        </div>
        </>
    );
}

export default LandingPage;