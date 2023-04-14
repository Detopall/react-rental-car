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
							<h3> Car - <span> {carInfo.carType} </span></h3>
							<img src={"/src/assets/images/cars/" + carInfo.carType.toLowerCase() + ".png"} alt={carInfo.carType} />
						</div>
					</div>
					<div className="footer">
						<button id="reserve-car" onClick={closeModal}>Reserve Car</button>
					</div>
				</div>
			</div>
		</>
	);
}
