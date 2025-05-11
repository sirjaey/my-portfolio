import {
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faXTwitter,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Contact({ FontAwesomeIcon }) {
	return (
		<footer className="contact" id="contact">
			<h1>CONTACT ME</h1>
			<p>
				<span>
					<FontAwesomeIcon icon={faEnvelope} />
				</span>
				joshuaabu1995@gmail.com
			</p>
			<p>
				<span>
					<FontAwesomeIcon icon={faPhone} />
				</span>
				+234 810 942 8027
			</p>
			<div className="socials">
				<a href="https://github.com/sirjaey">
					<span className="social-icons">
						<FontAwesomeIcon icon={faGithub} style={{ color: "#B197FC" }} />
					</span>
				</a>
				<a href="https://www.linkedin.com/in/joshua-abu-3180b0284/">
					<span className="social-icons">
						<FontAwesomeIcon icon={faLinkedin} />
					</span>
				</a>
					<a href="https://x.com/sirjaey_">
					<span className="social-icons">
						<FontAwesomeIcon icon={faXTwitter} />
					</span>
				</a>
				<span className="social-icons">
					<FontAwesomeIcon icon={faDiscord} />
				</span>
			</div>
		</footer>
	);
}

export default Contact;