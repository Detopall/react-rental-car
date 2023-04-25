export default function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="footer-top-left">
					<h2>Vintage Car Rental</h2>
					<p>
						We are a company that rents out vintage cars for events and
						special occasions.
					</p>
				</div>
				<div className="footer-top-right">
					<h2>Company</h2>
					<ul>
						<a href="#">Bruges</a>
						<a href="#">Careers</a>
						<a href="#">Mobile App</a>
						<a href="#">Blog</a>
					</ul>
				</div>
				<div className="footer-bottom-left">
					<h2>Working ours</h2>
					<ul>
						<li>Monday - Friday: 9am - 5pm</li>
						<li>Saturday: 10am - 4pm</li>
						<li>Sunday: Closed</li>
					</ul>
				</div>
				<div className="footer-bottom-right">
					<h2>Contact</h2>
					<ul>
						<li>Phone: 123-456-7890</li>
						<li>Email: vintage-car-rental@gmail.com </li>
						<li>Address: 1234 Some Street, Bruges, Belgium</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
