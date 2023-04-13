import "./App.css";
import { Home } from "./pages/Home";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Team } from "./pages/Team";
import { CustomerStories } from "./pages/CustomerStories";
import { VehicleModels } from "./pages/VehicleModels";
import { About } from "./pages/About";

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/vehicle-models" element={<VehicleModels />} />
				<Route path="/customer-stories" element={<CustomerStories />} />
				<Route path="/team" element={<Team />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
