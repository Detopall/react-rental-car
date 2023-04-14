interface ModalProps {
	closeModal: () => void;
}

export default function Modal({ closeModal }: ModalProps) {
	return (
		<>
			<div className="modal">
				<div className="modal-container">
					<div className="title-container">
						<h2>Complete reservation</h2>
						<button onClick={closeModal}> &times; </button>
					</div>
					<div className="title">
					</div>
					<div className="body">
						<p> this is the body </p>
					</div>
					<div className="footer">
						<button id="reserve-car" onClick={closeModal}>Reserve Car</button>
					</div>
				</div>
			</div>
		</>
	);
}
