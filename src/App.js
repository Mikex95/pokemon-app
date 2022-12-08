import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import TypePage from "./pages/TypePage";

function App() {
	return (
		<div className="App">
			<div class="tablet">
				<div class="content">
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<HomePage />}></Route>
							<Route path="/details/:id" element={<DetailsPage />}></Route>
							<Route path="/types" element={<TypePage />}></Route>
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</div>
	);
}

export default App;
