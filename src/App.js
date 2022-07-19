import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { Search } from "./components/SearchResukt/Search";
// import { JSHash, CONSTANTS } from "react-native-hash";

function App() {
	const clearCacheData = () => {
		caches.keys().then((names) => {
			names.forEach((name) => {
				caches.delete(name);
			});
		});
		// alert('Complete Cache Cleared')
	};

	clearCacheData();

	return (
		<Router>
			{/* <Header /> */}
			{/* <ResponsiveAppBar /> */}
			<Search />
		</Router>
	);
}

export default App;
