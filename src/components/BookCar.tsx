export function BookCar() {
	return (
		<section className="book-a-car">
			<h2> Book a car</h2>
			<form>
				<div className="book-form car-type">
					<label htmlFor="select-car-type">Select Your Car </label>
					<select id="select-car-type">
						<option>Select your car type</option>
						<option value="bmw">BMW</option>
						<option value="chevrolet">Chevrolet</option>
						<option value="mercedes">Mercedes</option>
						<option value="mustang">Mustang</option>
						<option value="volvo">Volvo</option>
					</select>
				</div>
				<div className="book-form car-pick-up-location">
					<label htmlFor="pick-up-location">Pick-Up</label>
					<select id="pick-up-location">
						<option> Select pick-up location </option>
						<option value="Bruges">Bruges</option>
						<option value="Ghent">Ghent</option>
						<option value="Antwerp">Antwerp</option>
						<option value="Brussels">Brussels</option>
						<option value="Hasselt">Hasselt</option>
					</select>
				</div>
				<div className="book-form car-drop-off-location">
					<label htmlFor="drop-off-location">Drop-Off</label>
					<select id="drop-off-location">
						<option> Select drop-off location </option>
						<option value="Bruges">Bruges</option>
						<option value="Ghent">Ghent</option>
						<option value="Antwerp">Antwerp</option>
						<option value="Brussels">Brussels</option>
						<option value="Hasselt">Hasselt</option>
					</select>
				</div>
				<div className="book-form car-pick-up-date">
					<label htmlFor="pick-up-date">Pick-Up Date</label>
					<input type="date" name="pick-up-date" id="pick-up-date" />
				</div>
				<div className="book-form car-drop-off-date">
					<label htmlFor="drop-off-date">Drop-Off Date</label>
					<input type="date" name="drop-off-date" id="drop-off-date" />
				</div>
				<button type="submit">Search</button>
			</form>
		</section>
	);
}
