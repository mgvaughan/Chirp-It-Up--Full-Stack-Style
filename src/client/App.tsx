import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import Create from './views/Create';
import AllChirps from './views/AllChirps';
import SingleChirp from './views/SingleChirp';
import EditChirp from './views/EditChirp';

const App = () => {

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<Create />} />
				<Route path="/chirps" element={<AllChirps />} />
				<Route path="/chirps/:id" element={<SingleChirp />} />
				<Route path="/chirps/:id/edit" element={<EditChirp />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
