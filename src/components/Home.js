import React from 'react';
import './Home.css'; // Add a CSS file if needed
import profilePic from './assets/profpic.jpg';
import sropPoster from './assets/sropposter.pdf'; 

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="home-text">
      <h1>alyssa anastasi</h1>
      <h2>master's in biomedical data science at uw-madison</h2>
      <p><b>currently:</b></p>
      <ul>
        <li>located in: chicago, il</li>
        <li>working as a:</li>
            <ul>
            <li>instructor at <i><a href="https://dpi.uillinois.edu/tech-talent-development/high-school-and-community-college-student-programs/digital-scholars/">discovery partners institute</a></i></li>
            <li>research assistant in pamela martinez's lab</li>
            </ul>
        <li>reading: <i><a href="https://www.goodreads.com/book/show/1885.Pride_and_Prejudice">pride and prejudice by jane austen</a></i> </li>
        <li>listening to: <i><a href="https://open.spotify.com/track/2KufM8PiQY4i52XhRL96Fd?si=a26f7a516511400c">champagne coast by blood orange</a></i> </li>
        <li>obsessed with: <i><a href="https://strava.app.link/cR1DpRqHQTb">running</a></i> </li>
      </ul>
      <p><b>previously:</b></p>
      <ul>
        <li>biomedical data science research assistant at uw-madison working on <i><a href={sropPoster} target="_blank" rel="noopener noreferrer">assessing explanations of graph neural networks for predicting effects of gene perturbations</a></i></li>
        <li>undergraduate research experience in statistics working on disentangling the impact of environmental drivers on rotavirus transmission in bangladesh</li>
        <li>quality analyst intern at <i><a href="https://www.abbvie.com/abbvie">abbvie</a></i></li>
      </ul>
      </div>
    </div>
    </section>
  );
}

export default Home;
