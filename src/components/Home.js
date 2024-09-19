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
        <li>reading: <i><a href="https://www.goodreads.com/book/show/68428.The_Final_Empire">the final empire by brandon sanderson</a></i> </li>
        <li>listening to: <i><a href="https://open.spotify.com/artist/066X20Nz7iquqkkCW6Jxy6">lcd soundsystem</a></i> </li>
        <li>obsessed with: <i>watching illinois football</i> </li>
      </ul>
      </div>
    </div>
    </section>
  );
}

export default Home;
