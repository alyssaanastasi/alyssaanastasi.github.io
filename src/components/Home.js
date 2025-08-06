import React from 'react';
import './Home.css'; 
import profilePic from './assets/profpic.jpg';


function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="home-text">
      <h1>alyssa anastasi</h1>
      <h2>master's student in biomedical data science at uw-madison</h2>
      <h2>bs statistics & computer science from uiuc</h2>
      <p><b>currently:</b></p>
      <ul>
        <li>located in: chicago, il</li>
        <li>working as a:</li>
            <ul>
            <li>data science discovery instructor at <i><a href="https://dpi.uillinois.edu/tech-talent-development/high-school-and-community-college-student-programs/digital-scholars/">discovery partners institute</a></i></li>
            <li>research assistant in pamela martinez's lab</li>
            </ul>
        <li>reading: <i><a href="https://www.goodreads.com/book/show/41104077-invisible-women">invisible women: data bias in a world designed for men by caroline criado pérez</a></i> </li>
        <li>listening to: <i><a href="https://open.spotify.com/track/2KufM8PiQY4i52XhRL96Fd?si=a26f7a516511400c">champagne coast by blood orange</a></i> </li>
        <li>obsessed with: <i><a href="https://strava.app.link/cR1DpRqHQTb">running & biking</a></i> </li>
      </ul>
      </div>
    </div>
    </section>
  );
}

export default Home;
