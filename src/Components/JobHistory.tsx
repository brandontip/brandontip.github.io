type JobCardProps = {
    timespan: string;
    title: string;
    company: string;
    description: string;
    techstack: string[];
}

function JobCard(props : JobCardProps) {
    return (
        <li className="jobcard">
            <h1 className="timespan">{props.timespan}</h1>
            <div>
                <h2>{props.title} &#x2022; {props.company}  </h2>
                <p> {props.description}</p>
                <ul className="techstack">
                    {props.techstack.map((tech) => {
                        return <li className="tech">{tech}</li>;
                    })}
                </ul>
            </div>
        </li>
    );
}

const futurewei: JobCardProps = {
    timespan: "2023-Present",
    title: "Senior Software Engineer",
    description: "Creates algorithms focused around computer vision, human animation, and camera capturing. Builds and maintains pipeline, ensuring modularity in components and stability through unit testing.",
    techstack: ["C++", "C#", "Unity", "Python"],
    company: "Futurewei"
}

const ct: JobCardProps = {
    timespan: "2020-2023",
    title: "Software Engineer & Team Lead",
    description: "Mathematics consultant. Developed 3d cad algorithms for digital patternmaking. Developed algorithms for RGB-D camera fusion to automate real-to-lie human models.",
    techstack: ["C#", "Unity", "C++", "Python"],
    company: "Clothing Tech"
}

const ua: JobCardProps = {
    timespan: "2014-2020",
    title: "Research Associate",
    description: "Developed algorithms for 3d cad patternmaking. Developed algorithms for RGB-D camera fusion to automate real-to-lie human models.",
    techstack: ["Matlab", "Python", "Mathematica"],
    company: "University of Arizona"
}

const uci: JobCardProps = {
    timespan: "2010-2014",
    title: "BS in Mathematics, Minor in Philosophy",
    description: "My undergraduate research projects focused on group theory, Green's functions, and early modern notions of causality",
    techstack: ["Matlab", "LaTex"],
    company: "University of California, Irvine"
}

const uazedui: JobCardProps = {
    timespan: "2014-2020",
    title: "PhD in Mathematics, Minor in Philosophy",
    description: "My graduate research projects focused on Sobolev inequalities in hyperbolic space, logic, and map enumeration",
    techstack: ["Matlab", "LaTex", "Python", "Mathematica"],
    company: "University of Arizona"
}

export const allJobs = [futurewei, ct, ua];

export const allEducation = [uazedui, uci];






export default JobCard;