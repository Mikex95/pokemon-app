import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<div className="App">
			<Header />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/details" element={<DetailsPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
