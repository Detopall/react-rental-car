import { useState } from "react";
import { VehicleInfo } from "../components/VehicleInfo";

export function VehicleModels() {
	const [carName, setCarName] = useState("");

	function changeStyle(e: React.MouseEvent<HTMLButtonElement>) {
		if (e.target === null) return;
		const buttons = document.querySelectorAll(
			".vehicle-models-buttons button"
		);
		buttons.forEach((button) => {
			button.classList.remove("picked");
		});
		(e.target as HTMLButtonElement).classList.add("picked");
		setCarName(e.currentTarget.innerText);
	}
	return (
		<div className="vehicle-models-container">
			<h2>Vehicle Models</h2>
			<p>
				Not sure which car to choose? Explore our amazing vehicles for
				your next adventure. You can also find all the information about
				your next rental in this section.
			</p>
			<div className="vehicle-models-content">
				<div className="vehicle-models-buttons">
					<button onClick={changeStyle}>BMW</button>
					<button onClick={changeStyle}>Chevrolet</button>
					<button onClick={changeStyle}>Mercedes</button>
					<button onClick={changeStyle}>Mustang</button>
					<button onClick={changeStyle}>Volvo</button>
				</div>
				<VehicleInfo carName={carName} />
			</div>
		</div>
	);
}
