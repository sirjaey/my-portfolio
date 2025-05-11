import React, { useEffect, useRef } from "react";

function Interactivity({ children, id, setActiveSection }) {
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(id);
						entry.target.classList.add("active");

						console.log(id);
					} else {
						entry.target.classList.remove("active");
						setActiveSection("");
					}
				});
			},
			{
				threshold: 0.5,
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [id, setActiveSection]);

	return (
		<section
			ref={sectionRef}
			id={id}
			className={`section ${id === setActiveSection ? "active" : ""}`}>
			{children}
		</section>
	);
}

export default Interactivity;