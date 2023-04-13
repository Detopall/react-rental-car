function Hero() {
	return (
		<div className="hero">
			<img
				src="/src/assets/media/big-hero-bg.png"
				alt="hero-bg"
				className="big-hero-bg"
			/>
			<div className="hero-content">
				<div className="hero-content-text">
					<h4>
						Choose a car
						<span className="hero-for-you"> for you </span>
					</h4>
					<p>
						Rent your next car now. Predictable prices, flexible
						pick-up options and much more.
					</p>

					<div className="hero-buttons">
						<a href="#book-a-ride">Book a car</a>
						<a href="#">Learn more</a>
					</div>
				</div>
			</div>
			<img
				src="/src/assets/media/bmw-bg.png"
				alt="bmw-bg"
				className="hero-bmw-bg"
			/>
		</div>
	);
}

export default Hero;
