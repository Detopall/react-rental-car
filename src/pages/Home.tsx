import Hero from "../components/Hero";
import { BookCar } from "../components/BookCar";
import { VehicleModels } from "../pages/VehicleModels";

export function Home() {
	return (
		<>
			<Hero />
			<BookCar />
			<VehicleModels />
		</>
	);
}
