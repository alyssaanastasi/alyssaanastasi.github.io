import './Projects.css';
import gnnPoster from './assets/sropposter.pdf';

function Projects() {
  return (
    <div className="projects-text">
      <h1>Projects</h1>
      <h2>Optimizing vaccination rates in a RSV, Influenza, and COVID “tripledemic”</h2>
      <h3>UIUC &#x2022; PI: Pamela Martinez &#x2022; Jan. 2025 - Present</h3>
      <h2>Assessing explanations of graph neural networks for predicting effects of gene perturbations</h2>
      <h3>UW-Madison &#x2022; PI: Mark Craven &#x2022; Summer 2024 &#x2022; <a href={gnnPoster} target="_blank">Poster</a></h3>
      <p></p>
      <h2>Disentangling the impact of environmental drivers on Rotavirus transmission in Bangladesh</h2>
      <h3>UIUC &#x2022; PI: Pamela Martinez &#x2022; Aug. 2023 - May 2024</h3>
    </div>
    );
}

export default Projects;