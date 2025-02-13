import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'
import card from "../assets/card_placeholder.png";

import name from "../assets/name.png";
import aboutCard from "../assets/cardImages/about_card.png";
import artCard from "../assets/cardImages/art_card.png";
import homeCard from "../assets/cardImages/home_card.png";
import projectsCard from "../assets/cardImages/projects_card.png";
import linkedinCard from "../assets/cardImages/linkedin_card.png";

import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <>
            <Nav/>
            <div className = "home-content">
                <div className = "home-image">
                    <img className = "elena-name" src = {name} alt = "Elena Nguyen"></img>
                </div>
            </div>

            <div className = "home-1">
                <div className = "home-content-1">
                    <h1 className="home-title">Tickets Please! Behind the Scenes</h1>
                    <p>
                        Welcome to my personal website! This space showcases my collection of creative
                        works and technical projects, tied together and designed for engagement.

                        This website is a reflection of my drive and how I seek to inspire,
                        so take a look around!
                    </p>
                    <h2 className="subtitle-1">
                        Now featuring: <span className="highlight-1">Elena Nguyen</span>
                    </h2>

                </div>
            </div>

            <hr className = "home-divider"></hr>
            <div className = "home-2">
                <h1 className="home-title">A Perfect Hand!</h1>
                <div className = "home-content-2" >
                    <div className = "card">
                        <p><Link to = '/about' onClick={() => window.scrollTo(0, 0)}>
                            <img className="card" style = {{transform: "rotate(-3deg)"}} src={aboutCard} alt="Card to about page"></img>
                        </Link></p>
                    </div>
                    <div className = "card">
                        <p><Link to = '/illustration' onClick={() => window.scrollTo(0, 0)}>
                            <img className="card" style = {{transform: "rotate(3deg)"}} src={artCard} alt="Card to art page"></img>
                        </Link></p>
                    </div>
                    <div className = "card">
                        <p><a href="#">
                            <img className="card" style = {{transform: "rotate(-3deg)"}} src={homeCard} alt="Card to top of home page"></img>
                        </a></p>
                    </div>
                    <div className = "card">
                        <p><Link to = '/project' onClick={() => window.scrollTo(0, 0)}>
                            <img className="card" style = {{transform: "rotate(3deg)"}} src={projectsCard} alt="Card to projects page"></img>
                        </Link></p>
                    </div>
                    <div className = "card">
                        <p><a href="https://linkedin.com" target = "blank">
                            <img className="card" style = {{transform: "rotate(5deg)"}} src={linkedinCard} alt="Card to LinkedIn page"></img>
                        </a></p>       
                    </div>
                </div>
                <p className = "card-desc">
                    Think your finished? Check out your hand--a royal flush at your disposal!
                    Why don't you take a look your cards one more time,
                     you won't be disppointed!
                </p>
            </div>
            <Footer/>
        </>
    );
}

export default Homepage;