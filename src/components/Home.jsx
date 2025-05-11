
function Home() {
	function handleDarkLightMode() {
		const togg = document.getElementById("body");
		togg.classList.toggle("switch")
	}

	return (
		<section className="home">
			<div className="me">
				{/* <button onClick={handleDarkLightMode}>Toggle</button> */}
				<img src="./sirjaey.png" alt="Joshua Abu" />
				<div className="intro">
					<h1>Joshua Abu</h1>
					<h2>Frontend Developer</h2>
					<p className="intro-text">
						I build accessible, pixel-perfect digital experiences for the web.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Home;