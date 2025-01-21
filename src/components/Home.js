import React from 'react';
import './Home.css'; // Add a CSS file if needed
import profilePic from './assets/profpic.jpg';

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="home-text">
      <h1>alyssa anastasi</h1>
      <h2>senior in computer science + statistics with a minor in public health at uiuc</h2>
      <p>she is currently:</p>
      <ul>
        <li>located in: <i>champaign, il</i> </li>
        <li>working as a:</li>
            <ul>
            <li><i>course assistant</i> for stat 107</li>
            <li><i>research assistant</i> in the martinez lab</li>
            <li><i>data analyst</i> for illini women's basketball</li>
            </ul>
        <li>reading: <i><a href="https://www.goodreads.com/book/show/34051011-pachinko">pachinko by min jin lee</a></i> </li>
        <li>listening to: <i><a href="https://open.spotify.com/track/1qfJ6OvxrspQTmcvdIEoX6?si=3f8b772f61404ac6">places to be by fred again...</a></i> </li>
        <li>obsessed with: <i>star wars</i> </li>
      </ul>
      </div>
    </div>
    </section>
  );
}

export default Home;
