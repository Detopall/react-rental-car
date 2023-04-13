function Hero() {
	return (
		<section className="hero">
			<img
				src="/src/assets/media/big-hero-bg.png"
				alt="hero-bg"
				className="big-hero-bg"
			/>
			<div className="hero-content">
				<div className="hero-content-text">
					<h4>
						Choose <span className="hero-for-you"> your </span>  next car
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
		</section>
	);
}

export default Hero;
