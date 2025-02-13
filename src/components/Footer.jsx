import instagram from "../assets/instagram_icon.png";
import linkedin from "../assets/linkedin_icon.png";
import github from "../assets/github_icon.png";

function Footer() {
    return (
        <>
        <footer>
            <div className="socials">
                <a href="https://instagram.com" target = "blank">
                    <p>
                        <img class="s-icon" src={instagram} alt="Instagram icon"></img>
                    </p>
                </a>
                <a href="https://linkedin.com" target = "blank">
                    <p>
                        <img class="s-icon" src={linkedin} alt="LinkedIn icon"></img>
                    </p>
                </a>
                <a href="https://github.com" target = "blank">
                    <p>
                        <img class="s-icon" src={github} alt="GitHub icon"></img>
                    </p>
                </a>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Elena Nguyen</p>
        </footer>
        </>
    );
}

export default Footer;