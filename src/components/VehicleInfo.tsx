interface VehicleInfoProps {
	carName: string;
}

interface Vehicle {
	model: string;
	year: number;
	seats: number;
	doors: number;
	transmission: string;
	fuel: string;
	price: number;
}

const VehicleDescription: Record<string, Vehicle> = {
	bmw: {
		model: "E30",
		year: 1989,
		seats: 5,
		doors: 2,
		transmission: "5-speed manual",
		fuel: "Diesel",
		price: 45,
	},
	chevrolet: {
		model: "Corvair",
		year: 1965,
		seats: 5,
		doors: 2,
		transmission: "4-speed manual",
		fuel: "Gasoline",
		price: 35,
	},
	mercedes: {
		model: "Mercedes-Benz 500 SE",
		year: 1985,
		seats: 5,
		doors: 4,
		transmission: "5-speed automatic",
		fuel: "Diesel",
		price: 60,
	},
	mustang: {
		model: "Hardtop",
		year: 1970,
		seats: 2,
		doors: 2,
		transmission: "4-speed manual",
		fuel: "Gasoline",
		price: 38,
	},
	volvo: {
		model: "700 sedan",
		year: 1986,
		seats: 5,
		doors: 4,
		transmission: "5-speed manual",
		fuel: "Diesel",
		price: 25,
	},
};

export function VehicleInfo({ carName }: VehicleInfoProps) {
	return (
		<>
			{carName && (
				<div className="vehicle-info">
					<div className="vehicle-image-container">
						<img
							src={`/src/assets/images/cars/${carName.toLowerCase()}.png`}
							alt={carName}
						/>
					</div>
					<div className="vehicle-description-container">
						{Object.entries(
							VehicleDescription[carName.toLowerCase()]
						).map(([key, value]) => {
							return (
								<div
									className="vehicle-description-item"
									key={key}
								>
									<h4>{key}</h4>
									<span>{value}</span>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
}
