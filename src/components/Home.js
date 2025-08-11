import './Home.css'; 
import profilePic from './assets/profpic.jpg';


function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="home-text">
      <h1>Alyssa Anastasi</h1>
      <h2>Graduate student in Biomedical Data Science at UW-Madison</h2>
      <h2>BS Statistics & Computer Science from UIUC</h2>
      <h3><b>Currently:</b></h3>
      <ul>
        <li>Located in: <span className="bullet-text">Madison, WI</span></li>
        <li>Working on: <span className="bullet-text">optimizing vaccination rates in Illinois in a "tripledemic" season</span></li>
        <li>Reading: <a href="https://www.goodreads.com/book/show/218559595-great-big-beautiful-life">Great Big Beautiful Life by Emily Henry</a> </li>
        <li>Listening to: <a href="https://open.spotify.com/track/4NczzeHBQPPDO0B9AAmB8d?si=99bfb5da6e1b4e2f">Assumptions by Sam Gellaitry</a> </li>
        <li>Obsessed with: <a href="https://strava.app.link/cR1DpRqHQTb">running & biking</a> </li>
      </ul>
      </div>
    </div>
    </section>
  );
}

export default Home;
