import { IBookCar } from "./BookCar";

interface ModalProps {
	closeModal: () => void;
	carInfo: IBookCar;
}

export default function Modal({ closeModal, carInfo }: ModalProps) {
	return (
		<>
			<div className="modal">
				<div className="modal-container">
					<div className="title-container">
						<h2>Complete reservation</h2>
						<button onClick={closeModal}> &times; </button>
					</div>
					<div className="body">
						<div className="modal-location-dates">
							<h3> Location & Dates </h3>
							<div className="modal-location-dates-item">
								<h4> Pick-Up Date</h4>
								<span> {carInfo.pickUpDate} </span>
							</div>

							<div className="modal-location-dates-item">
								<h4> Drop-Off Date</h4>
								<span> {carInfo.dropOffDate} </span>
							</div>

							<div className="modal-location-dates-item">
								<h4> Pick-Up Location</h4>
								<span> {carInfo.pickUpLocation} </span>
							</div>

							<div className="modal-location-dates-item">
								<h4> Drop-Off Location</h4>
								<span> {carInfo.dropOffLocation} </span>
							</div>
						</div>
						<div className="modal-img">
							<h3>
								Car - <span> {carInfo.carType} </span>
							</h3>
							<img
								src={
									"/src/assets/images/cars/" +
									carInfo.carType.toLowerCase() +
									".png"
								}
								alt={carInfo.carType}
							/>
						</div>
						<div className="personal-info">
							<h3 className="personal-info-title">
								Personal Info
							</h3>
							<div className="personal-info-item item-firstname">
								<label htmlFor="firstname">Firstname</label>
								<input
									type="text"
									id="firstname"
									autoComplete="off"
								></input>
							</div>
							<div className="personal-info-item item-lastname">
								<label htmlFor="lastname">Lastname</label>
								<input
									type="text"
									id="lastname"
									autoComplete="off"
								></input>
							</div>
							<div className="personal-info-item item-phone-number">
								<label htmlFor="phone-number">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone-number"
									autoComplete="off"
								></input>
							</div>
							<div className="personal-info-item item-age">
								<label htmlFor="age">Age</label>
								<input
									type="number"
									id="age"
									autoComplete="off"
									min="18"
								></input>
							</div>
							<div className="personal-info-item item-email">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									autoComplete="off"
								></input>
							</div>
							<div className="personal-info-item item-address">
								<label htmlFor="address">Address</label>
								<input
									type="text"
									id="address"
									autoComplete="off"
								></input>
							</div>
							<div className="personal-info-item item-city">
								<label htmlFor="city">City</label>
								<input
									type="text"
									id="city"
									autoComplete="off"
								></input>
							</div>
							<div className="personal-info-item item-zip-code">
								<label htmlFor="zip-code">Zip Code</label>
								<input
									type="number"
									id="zip-code"
									autoComplete="off"
								></input>
							</div>
						</div>
					</div>
					<div className="footer">
						<button id="reserve-car" onClick={closeModal}>
							Reserve Car
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
