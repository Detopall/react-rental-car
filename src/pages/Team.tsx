export function Team() {
	return (
		<div className="team-container">
			<h2>Our Team</h2>
			<p className="team-container-description">
				We are a team of passionate car enthusiasts who are dedicated to
				providing you with the best car rental experience possible. We
				are committed to providing you with the best service and the
				best cars at the best prices. We are here to help you find the
				perfect car for your next adventure.
			</p>
			<div className="team-members">
				<div className="team-member">
					<img
						src="/src/assets/images/team/saitama.png"
						alt="team member"
					/>
					<h3> Caped Baldy </h3>
					<p>CEO</p>
				</div>
				<div className="team-member">
					<img
						src="/src/assets/images/team/light.png"
						alt="team member"
					/>
					<h3>Light Yagami</h3>
					<p>Sales Advisory</p>
				</div>
				<div className="team-member">
					<img
						src="/src/assets/images/team/gon.png"
						alt="team member"
					/>
					<h3>Gon Freecss</h3>
					<p>Mechanic</p>
				</div>
			</div>
		</div>
	);
}
