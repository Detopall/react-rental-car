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
	price: string;
}

const VehicleDescription: Record<string, Vehicle> = {
	bmw: {
		price: "$43/day",
		model: "E30",
		year: 1989,
		seats: 5,
		doors: 2,
		transmission: "5-speed manual",
		fuel: "Diesel",
	},
	chevrolet: {
		price: "$32/day",
		model: "Corvair",
		year: 1965,
		seats: 5,
		doors: 2,
		transmission: "4-speed manual",
		fuel: "Gasoline",
	},
	mercedes: {
		price: "$53/day",
		model: "Mercedes-Benz 500 SE",
		year: 1985,
		seats: 5,
		doors: 4,
		transmission: "5-speed automatic",
		fuel: "Diesel",
	},
	mustang: {
		price: "$60/day",
		model: "Hardtop",
		year: 1970,
		seats: 2,
		doors: 2,
		transmission: "4-speed manual",
		fuel: "Gasoline",
	},
	volvo: {
		price: "$24/day",
		model: "700 sedan",
		year: 1986,
		seats: 5,
		doors: 4,
		transmission: "5-speed manual",
		fuel: "Diesel",
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
									<span className="vehicle-item-key">
										{key}
									</span>
									<span className="vehicle-item-value">
										{value}
									</span>
								</div>
							);
						})}
						<a href="#book-car">Book now</a>
					</div>
				</div>
			)}
		</>
	);
}
