export default function ModalPersonalInfo() {
	return (
		<>
			<form className="personal-info">
				<h3 className="personal-info-title">Personal Info</h3>
				<div className="personal-info-item item-firstname">
					<label htmlFor="firstname">Firstname</label>
					<input
						type="text"
						id="firstname"
						autoComplete="off"
						required
					></input>
				</div>
				<div className="personal-info-item item-lastname">
					<label htmlFor="lastname">Lastname</label>
					<input
						type="text"
						id="lastname"
						autoComplete="off"
						required
					></input>
				</div>
				<div className="personal-info-item item-phone-number">
					<label htmlFor="phone-number">Phone Number</label>
					<input
						type="tel"
						id="phone-number"
						autoComplete="off"
						required
					></input>
				</div>
				<div className="personal-info-item item-age">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						autoComplete="off"
						min="18"
						required
					></input>
				</div>
				<div className="personal-info-item item-email">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						autoComplete="off"
						required
					></input>
				</div>
				<div className="personal-info-item item-address">
					<label htmlFor="address">Address</label>
					<input
						type="text"
						id="address"
						autoComplete="off"
						required
					></input>
				</div>
				<div className="personal-info-item item-city">
					<label htmlFor="city">City</label>
					<input
						type="text"
						id="city"
						autoComplete="off"
						required
					></input>
				</div>
				<div className="personal-info-item item-zip-code">
					<label htmlFor="zip-code">Zip Code</label>
					<input
						type="number"
						id="zip-code"
						autoComplete="off"
						required
					></input>
				</div>
			</form>
		</>
	);
}
