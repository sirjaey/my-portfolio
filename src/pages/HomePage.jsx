import { useState } from "react";

import Home from "../components/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import Interactivity from "../components/Interactivity.jsx";
import About from "../components/About.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Contact from "../components/Contact.jsx";

import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import {
	faUser,
	faBriefcase,
	faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
	const [activeSection, setActiveSection] = useState(null);

	const sections = [
		{ id: "About", name: <FontAwesomeIcon icon={faUser} /> },
		{ id: "Portfolio", name: <FontAwesomeIcon icon={faBriefcase} /> },
		{
			id: "Contact",
			name: <FontAwesomeIcon icon={faAddressBook} />,
		},
	];

	return (
		<main className="main-body">
            <section className="fixed">
				<Home />
				<Navbar activeSection={activeSection} sections={sections} />
			</section>

			<section className="content">
				<div>
					<Interactivity id="About" setActiveSection={setActiveSection}>
						<About />
					</Interactivity>
					<Interactivity id="Portfolio" setActiveSection={setActiveSection}>
						<Portfolio />
					</Interactivity>
					<Interactivity id="Contact" setActiveSection={setActiveSection}>
						<Contact FontAwesomeIcon={FontAwesomeIcon} />
					</Interactivity>
				</div>
			</section>
		</main>
	);
}

export default HomePage;