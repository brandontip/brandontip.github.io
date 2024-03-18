import "./mathpage.css";

type publication = {
    title: string;
    link: string;
    year: number;
    authors: string;
    journal: string;
}

const MapEnumerFromDynamiPerspective: publication = {
    title: "Map Enumeration from a Dynamical Perspective",
    link: "https://arxiv.org/pdf/2308.06369",
    year: 2023,
    journal: "Preprint.",
    authors: "Nicholas Ercolani, Joceline Lega, Brandon Tippings"
}

const NonRecursiveCounts: publication = {
    title: "Non-recursive Counts of Graphs on Surfaces",
    link: "https://arxiv.org/pdf/2210.00671",
    year: 2023,
    journal: "Enumerative Combinatorics and Applications.",
    authors: "Nicholas Ercolani, Joceline Lega, Brandon Tippings"
}

const MultipleScaleAsymptotics: publication = {
    title: "Multiple Scale Asymptotics of Map Enumeration",
    link: "https://arxiv.org/pdf/2210.00668",
    year: 2022,
    journal: "Nonlinearity.",
    authors: "Nicholas Ercolani, Joceline Lega, Brandon Tippings"
}

const DynamicsNonPolar: publication = {
    title: "Dynamics of Non-polar Solutions to the Discrete Painlevé I Equation",
    link: "https://arxiv.org/pdf/2109.03384",
    year: 2021,
    journal: "SIADS.",
    authors: "Nicholas Ercolani, Joceline Lega, Brandon Tippings"
}

const DiscretePainleve: publication = {
    title: "Discrete Painlevé Equations, Orthogonal Polynomials, and Counting Maps",
    link: "https://www.proquest.com/openview/1054b759b5d27ba4be04ede159a31f11/1.pdf?pq-origsite=gscholar&cbl=18750&diss=y",
    year: 2020,
    journal: "PhD Thesis, University of Arizona.",
    authors: "Brandon Tippings"
}

const MathPagePublications: publication[] = [MapEnumerFromDynamiPerspective, NonRecursiveCounts, MultipleScaleAsymptotics, DynamicsNonPolar, DiscretePainleve]

function Publication(props: publication) {
    return (
        <div className="publication">
            <a className="title" href={props.link} target="_blank">
                {props.title}
            </a>
            <div> {props.year}. {props.authors}. <em>{props.journal}</em></div>
        </div>
    )
}

function MathPage() {
  return (
      <div className="mathcontent">
          <div className={"mathsummary"} >
              <h1>Mathematics</h1>
              <p>My interests lie at the intersections of <a href={"https://en.wikipedia.org/wiki/Dynamical_system"} target="_blank"> dynamical systems</a>,&nbsp;
                  <a href={"https://en.wikipedia.org/wiki/Combinatorics"} target="_blank">combinatorics</a>, and
                      <a href={"https://en.wikipedia.org/wiki/Orthogonal_polynomials"} target="_blank"> orthogonal polynomial theory</a>.
                  Our research program uses dynamical systems and computing to derive numerical results, from which we formulate and prove conjectures using analytic methods.
              The numerical insight has been useful time and again, as it provides a source of experimental facts and intuition in a field which can be notoriously abstract.
              </p>
          </div>

        <p><strong>Publications</strong></p>
            {MathPagePublications.map((pub) => <Publication {...pub} />)}
    </div>
  );
}

export default MathPage;