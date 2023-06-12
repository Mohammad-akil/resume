import { projectList } from "../utils/projects";

const RightChild = () => {
  const topHeading = "text-3xl font-thin text-gray-600 uppercase";
  const midHeading = "font-semibold text-xl";
  const lowHeading = "font-medium";
  return (
    <div className={`flex flex-col gap-8  w-3/5`}>
      <section>
        <p className={`${topHeading}`}>Experience</p>
        <p className="mt-1">
          Total Experience - 6 months internship + 5 months freelancing
        </p>
        <div className="flex flex-col ">
          <p className="mt-2">
            <span className={midHeading}>KodeCreators |</span>{" "}
            <span className="capitalize">
              Websitedeveloper + Reactjs Intern
            </span>
          </p>
          <p className="capitalize">
            Augest 2022 - september 2023 | vadodra,india
          </p>
          <p>
            <ul className="list-disc ml-10 mt-1 ">
              <li>
                Working on company website for update from old version to higher
                version
              </li>
              <li>
                Building new headers footers and custom pages for case studies
              </li>
              <li>
                Learn react js and their core principles and flow of execution
              </li>
              <li>Complete reactjs internship</li>
            </ul>
          </p>
        </div>

        <div className="flex flex-col ">
          <p className="mt-2">
            <span className={midHeading}>Freelancing |</span>{" "}
            <span className="capitalize">Jilani Tyres</span>
          </p>
          <p className="capitalize">february 2022 - present | vadodra,india</p>
          <p>
            <ul className="list-disc ml-10 mt-1 ">
              <li>Jilanityres a tyrebased company located in nagarvada </li>
              <li>Building custom website according to their needs</li>
              <li>Increase sales upto 30%</li>
              <li>Connect with multiple clients accross vadodra</li>
            </ul>
          </p>
        </div>
      </section>

      <section>
        <p className={topHeading}>Projects</p>
        {projectList.length &&
          projectList.map((data) => {
            const { title, link, tech, type } = data;
            return (
              <div className="flex flex-col gap-1 ml-5">
                <p>
                  <span className={midHeading}>{title}</span> |{" "}
                  <span>{type}</span> | <span>{tech}</span>
                </p>
                <span>
                  <span className={lowHeading}>Checkout</span>:{" "}
                  <a href={link}>{link}</a>
                </span>
              </div>
            );
          })}
      </section>

      <section>
        <p className={topHeading}>Portfolio</p>
        <span className={lowHeading}>
          <span className={`${midHeading} ml-5 mt-2`}>Checkout</span> :{" "}
        </span>
        <a href="https://mohammad-akil.netlify.app/">
          https://mohammad-akil.netlify.app/
        </a>
      </section>
    </div>
  );
};

export default RightChild;
