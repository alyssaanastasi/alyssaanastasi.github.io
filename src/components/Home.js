import './Home.css'; 
import profilePic from './assets/profpic.jpg';


function Home() {
  return (
    <section className="home">
      <div className="home-content">
        {/* <img src={profilePic} alt="Profile" className="profile-pic" /> */}
        <div className="home-text">
      <h1>Alyssa Anastasi</h1>
      <h2>Graduate student in Biomedical Data Science at UW-Madison</h2>
      <h2>BS Statistics & Computer Science from UIUC</h2>
      <h3><b>Currently:</b></h3>
      <ul>
        <li><span className="bullet-text">Graduate Research Assistant in <a href="https://www.biostat.wisc.edu/~craven/research.html">Mark Craven's Lab</a></span></li>
        <li>Incoming <span className="bullet-text">Data Science Intern @ Gilead Sciences</span></li>
        <li>Reading <a href="https://www.goodreads.com/book/show/4981.Slaughterhouse_Five">Slaughterhouse-Five by Kurt Vonnegut</a> </li>
        <li>Listening to <a href="https://open.spotify.com/album/4oniyB3TRFhjglVSqVgy9e?si=pI70hfC8SAifL71M7Xpmyw">Wuthering Heights by charli xcx</a> </li>
        <li>Obsessed with <span className="bullet-text">Illinois basketball </span></li>
        <li>Located in <span className="bullet-text">Madison, WI</span></li>
      </ul>
      <h3><b>Previously:</b></h3>
      <ul>
        <li>Undergraduate Research Assistant in Pamela Martinez's Lab @ UIUC</li>
        <li>Data Science Instructor @ Discovery Partners Institute</li>
        <li>Quality Analyst Intern @ AbbVie</li>
      </ul>
      <br></br>
      <h2> Contact me @ <a href="mailto:aranastasi@wisc.edu">aranastasi@wisc.edu</a></h2>
      </div>
    </div>
    </section>
  );
}

export default Home;
