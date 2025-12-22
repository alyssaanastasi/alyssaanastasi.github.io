import './Projects.css';
import gnnPoster from './assets/sropposter.pdf';

function Projects() {
  return (
    <div className="projects-text">
      <h1>Projects</h1>
      <h2>Identifying Risk of Zoonotic Virus Spillover into Human Populations</h2>
      <h3>UW-Madison &#x2022; PI: Mark Craven &#x2022; Sep. 2025 - Present </h3>
      <p> I develop machine learning models to predict zoonotic spillover risk using viral protein sequences. 
          Current work explores CNNs, LSTMs, and protein language models for host classification for Influenza A protein sequences. 
          Previously, I built and evaluated CNNs and fine-tuned transformer-based protein language models for host prediction of Coronavirus spike proteins, 
          using large-scale and leave-one-out benchmarking frameworks. </p>
      <h2>Optimizing Vaccination Rates in a RSV, Influenza, and COVID “Tripledemic”</h2>
      <h3>UIUC &#x2022; PIs: Soren Larsen & Pamela Martinez &#x2022; Jan. 2025 - Present &#x2022; <a href="https://github.com/alyssaanastasi/shield" target="_blank">GitHub</a> </h3>
      <p>This project models optimal age-based vaccine allocation during a “tripledemic” under finite 
          healthcare resources. I developed an age-structured SIR model in R to simulate simultaneous 
          transmission of RSV, influenza, and COVID-19, and analyzed how vaccination coverage impacts 
          infection peaks and disease burden in Illinois.</p>
      <h2>Assessing Explanations of Graph Neural Networks</h2>
      <h3>UW-Madison &#x2022; PI: Mark Craven &#x2022; Summer 2024 &#x2022; <a href={gnnPoster} target="_blank">Poster</a> &#x2022; <a href="https://github.com/alyssaanastasi/srebp2-explanations" target="_blank">GitHub</a> </h3>
      <p>I evaluated explanation methods for graph neural networks predicting gene expression changes 
          under gene perturbations in cholesterol homeostasis. Using PyTorch Geometric, I applied 
          GNNExplainer, PGExplainer, and GraphMask to assess model interpretability and reliability. </p>
      <h2>Impact of Environmental Drivers on Rotavirus Transmission in Bangladesh</h2>
      <h3>UIUC &#x2022; PI: Pamela Martinez &#x2022; Aug. 2023 - May 2024 &#x2022; <a href="https://docs.google.com/presentation/d/1ZZ4QvTnO0juwynNAXrg4tScfxbvUr5Cs/edit?usp=drive_link&ouid=112362901873534580997&rtpof=true&sd=true" target="_blank">Presentation</a></h3>
      <p> I investigated how climate factors such as flooding, temperature, and humidity influence 
          rotavirus incidence across districts in Bangladesh. This work involved data 
          preprocessing of netCDF files and generalized linear modeling in R to identify key environmental drivers.</p>
    </div>
    );
}

export default Projects;