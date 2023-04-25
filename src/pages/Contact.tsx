export function Contact() {
	return (
		<div className="contact-container">
			<h2>Contact</h2>
			<p>
				If you have any questions or comments, you can always send us a
				message.
			</p>
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" />
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" />
				<label htmlFor="message">Message</label>
				<textarea id="message" name="message"></textarea>
				<button type="submit">Send</button>
			</form>

			<p> Or you can directly contact us.</p>
			<p>Phone: 123-456-7890</p>
			<p>Email: vintage-car-rental@gmail.com </p>
		</div>
	);
}
