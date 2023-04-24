import Hero from "../components/Hero";
import { BookCar } from "../components/BookCar";
import { VehicleModels } from "../pages/VehicleModels";
import { CustomerStories } from "./CustomerStories";

export function Home() {
	return (
		<>
			<Hero />
			<BookCar />
			<VehicleModels />
			<CustomerStories />
		</>
	);
}
