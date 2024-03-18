import "./programmingpage.css"

function ProgrammingPage() {
  return (
      <div className="programmingcontent">
          <div className={"progsummary"} >
              <h1>Programming</h1>
              <p>For my work, I mostly write in C#, C++, and Python. My professional experience began with a focus on algorithm development and optimization.
                  As I moved into leadership and senior roles,  I became more focused on software architecture and general software development.
              </p>
              <p>For my mathematics research, I write in Mathematica and Python, using the former mostly for symbolic computation and the latter for numerical computation.
              </p>
              <p>Outside of work and research, I have been enjoying learning MERN full stack development.
              </p>
          </div>


          <div className="projects">
              <p><strong>Projects</strong></p>
          <a href="https://github.com/brandontip/MERN" target="_blank">MERN Full Stack Project</a>
          <a href="https://github.com/brandontip/MapEnumeration" target="_blank">Map Enumeration in Mathematica</a>
          <a href="https://github.com/brandontip/brandontip.github.io" target="_blank">This Website in React</a>
          <a href="https://github.com/brandontip/ProjectEuler" target="_blank">Project Euler in Python</a>
          <a href="https://github.com/brandontip?tab=repositories" target="_blank">Other Small Projects in Several Languages</a>
              <a href="https://leetcode.com/btipp/" target="_blank">Leetcode</a>

          </div>

      </div>
  );
}

export default ProgrammingPage;