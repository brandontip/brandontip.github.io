type JobCardProps = {
    timespan: string;
    title: string;
    company: string;
    description: string;
    techstack: string[];
}

function JobCard(props : JobCardProps) {
    return (
        <div className="jobcard"><h1 className="timespan">{props.timespan}</h1>
            <div className={"jobsummary"}>
                <h2>{props.title} &#x2022; {props.company}  </h2>
                <p> {props.description}</p>
                <div className="techstack">
                    {props.techstack.map((tech) => {
                        return <li className="tech">{tech}</li>;
                    })}
                </div>
            </div>
        </div>
    );
}

const futurewei: JobCardProps = {
    timespan: "2023-Present",
    title: "Senior Software Engineer",
    description: "Creates algorithms focused around computer vision, human animation, and camera capturing. Builds and maintains pipeline, ensuring modularity in components, stability through unit testing, and speed through automation.",
    techstack: ["C++",  "Unity", "Python","C#"],
    company: "Futurewei"
}

const ct: JobCardProps = {
    timespan: "2020-2023",
    title: "Software Engineer & Team Lead",
    description: "Mathematics consultant with a focus on finite element methods and geometry. Developed 3d CAD algorithms for digital patternmaking. Developed algorithms for RGB-D camera alignment and fusion to automate real-to-life human models.",
    techstack: ["C#", "Unity", "C++", "Python"],
    company: "Clothing Tech"
}

const ua: JobCardProps = {
    timespan: "2014-2020",
    title: "Research Associate",
    description: "Researched in the areas of dynamical systems and analytic combinatorics, supported by NSF grants. Taught undergraduate courses in algebra, pre-calculus, calculus, vector calculus and linear algebra.",
    techstack: ["Matlab", "Python", "Mathematica"],
    company: "University of Arizona"
}

const uci: JobCardProps = {
    timespan: "2010-2014",
    title: "BS in Mathematics, Minor in Philosophy",
    description: "My undergraduate research projects focused on group theory, Green's functions, and early modern notions of causality.",
    techstack: ["Matlab", "LaTex"],
    company: "University of California, Irvine"
}

const uazedui: JobCardProps = {
    timespan: "2014-2020",
    title: "PhD in Mathematics, Minor in Philosophy",
    description: "My graduate research projects focused on isoperimetric inequalities in hyperbolic space, philosophy of mathematics, and map enumeration.",
    techstack: ["Matlab", "LaTex", "Python", "Mathematica"],
    company: "University of Arizona"
}

export const allJobs = [futurewei, ct, ua];

export const allEducation = [uazedui, uci];






export default JobCard;