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
        <li><span className="bullet-text">Data Science Intern @ Gilead Sciences</span></li>
        <li><span className="bullet-text">Graduate Research Assistant in Mark Craven's Lab</span></li>
        <li>Reading <a href="https://www.goodreads.com/en/book/show/208931300-intermezzo">Intermezzo by Sally Rooney</a> </li>
        <li>Listening to <a href="https://open.spotify.com/album/2PfGKHtqEX58bHtkQxJnWG?si=aMAs59PeTe-xBcKZjRe1Qw">Love Deluxe by Sade</a> </li>
        <li>Obsessed with <a href="https://ebird.org/profile/ODk5NjAxNw">finding cool birds</a></li>
        <li>Located in <span className="bullet-text">San Mateo, CA</span></li>
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
