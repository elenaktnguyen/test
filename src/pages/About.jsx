import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'

import myPhoto from "../assets/my_photo.png";
import email from "../assets/email.png";

function About() {
    return (
        <>
            <Nav/>
            <div className = "about-slide">
                <div className = "about-content">
                    <div className = "about-content-left">
                        <h1>About me</h1>
                        <p className = "bio">
                            Hi! My name is Elena Nguyen.
                            <br/><br/>
                            I love to express myself through arts and communicate new ideas
                            as a computer science student at SFU. Currently, I'm very inspired by immersive 
                            digital spaces, so expect something of the likes coming soon ;).
                            <br/><br/>
                            When I'm not doing any of the above, I like to play piano, make donuts, and 
                            go on walks with my dog Luka (he's the cutest).


                        </p>
                        <a href = "mailto:ena43@sfu.ca"><img src = {email}></img></a>
                    </div>
                    <div className = "about-content-right">
                        <img src = {myPhoto}></img>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default About;