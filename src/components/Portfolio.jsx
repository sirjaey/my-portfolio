function Portfolio() {
	return (
		<section className="portfolio skills" id="portfolio">
			<h1>PROJECTS & SKILLS</h1>
			<ul className="projects-list">
				<li>
					<a href="https://sirjaey.github.io/Mortgage-Calculator/">
						<img
							src="./mortgageCalc.jpeg"
							alt="mortgage calculator"
							className="project-icon"
						/>
						<span className="skill-name">Mortgage Calc</span>
					</a>
				</li>
				<li>
					<a href="https://sirjaey.github.io/Ecommerce-lightbox-ecommerce-product-page/">
						<img src="./eCommerce.avif" alt="CSS" className="project-icon" />
						<span className="skill-name">E-comm product page</span>
					</a>
				</li>
				<li>
					<a href="https://group12-slidev.netlify.app/1">
						<img src="./slidev.avif" alt="slidev" className="project-icon" />
						<span className="skill-name">Js/React Project</span>
					</a>
				</li>
				<li>
					<a href="https://sirjaey.github.io/flashcards-react/">
						<img src="./flashcards.jpg" alt="React" className="project-icon" />
						<span className="skill-name">Flashcards</span>
					</a>
				</li>
				<li>
					<a href="https://sirjaey.github.io/AltSchool-CSS-Assignment/">
						<img src="./altSchool.png" alt="project" className="project-icon" />
						<span className="skill-name">Mini-Project</span>
					</a>
				</li>
				<li>
					<a href="https://sirjaey.github.io/Omelette-recipe-page/">
						<img src="./omelette.jpeg" alt="omelette" className="project-icon" />
						<span className="skill-name">Omelette Recipe</span>
					</a>
				</li>
			</ul>
			<h2>Skills</h2>
			<ul className="skills-list">
				<li>
					<a href="https://www.w3schools.com/css/">
						<img src="./css.png" alt="CSS" className="skill-icon" />
						<span className="skill-name">CSS</span>
					</a>
				</li>
				
				<li>
					<a href="https://www.w3schools.com/html/">
						<img src="./html.png" alt="HTML" className="skill-icon" />
						<span className="skill-name">HTML</span>
					</a>
				</li>
				<li>
					<a href="https://www.w3schools.com/js/">
						<img
							src="./javascript.png"
							alt="JavaScript"
							className="skill-icon"
						/>
						<span className="skill-name">JavaScript</span>
					</a>
				</li>
				<li>
					<a href="https://reactjs.org/">
						<img src="./react.png" alt="React" className="skill-icon" />
						<span className="skill-name">React</span>
					</a>
				</li>
			</ul>
		</section>
	);
}

export default Portfolio;
