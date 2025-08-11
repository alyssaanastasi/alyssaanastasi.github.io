import './Projects.css';
import gnnPoster from './assets/sropposter.pdf';

function Projects() {
  return (
    <div className="projects-text">
      <h1>Projects</h1>
      {/* <h2>Analyzing the Risk of Zoonotic Virus Spill Over into Human Populations</h2>
      <h3>UW-Madison &#x2022; PI: Mark Craven &#x2022; Sep. 2025 - Present </h3>
      <p>In this project, ...</p> */}
      <h2>Optimizing Vaccination Rates in a RSV, Influenza, and COVID “Tripledemic”</h2>
      <h3>UIUC &#x2022; PIs: Soren Larsen & Pamela Martinez &#x2022; Jan. 2025 - Present</h3>
      <p>The aim of this project is to characterize the optimal age-based distribution of vaccines for RSV, influenza, and
         COVID-19 in a "tripledemic" season with finite healthcare resources. I developed an SIR (Susceptible-Infected-Recovered) 
         model in R to simulate disease transmission dynamics across these three viruses simultaneously. By analyzing how different 
         vaccination coverages across age groups influence infection peaks and overall disease burden, this work provides insights 
         into targeted vaccine allocation in Illinois.</p>
      <h2>Assessing Explanations of Graph Neural Networks</h2>
      <h3>UW-Madison &#x2022; PI: Mark Craven &#x2022; Summer 2024 &#x2022; <a href={gnnPoster} target="_blank">Poster</a></h3>
      <p>In this project, I worked with a graph neural network (GNN) that integrated diverse biological 
        to predict how gene perturbations affect gene expression, specifically in looking at the phenotype of cholesterol homeostasis. 
        To better understand the model’s decisions, I applied GNN explanation methods including GNNExplainer, PGExplainer, & Graph Mask
        using PyTorch Geometric to evaluate the model's reliability. </p>
      <h2>Impact of Environmental Drivers on Rotavirus Transmission in Bangladesh</h2>
      <h3>UIUC &#x2022; PI: Pamela Martinez &#x2022; Aug. 2023 - May 2024</h3>
      <p> The goal of this project is to understand how climate factors including flooding, temperature, & humidity can predict rotavirus
        incidence across the different districts of Bangladesh. I conducted extensive data cleaning and preprocessing of multiple data 
        sources including rotavirus case data, climate data, and flooding data in R.
        I then applied generalized linear models to identify key climate factors influencing rotavirus incidence in Bangladesh.</p>
    </div>
    );
}

export default Projects;