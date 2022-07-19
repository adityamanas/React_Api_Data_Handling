import React from "react";
import "./Search.css";
import axios from "axios";
// import Popup from "reactjs-popup";
import Content from "./Content";
export const Search = () => {
	const [data, setData] = React.useState({ hits: [] });
	const [id, setId] = React.useState("");
	const [SearchData, setSearchData] = React.useState("");
	// const [SearchData1, setSearchData1] = React.useState("");
	// React.useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = await axios(`https://hn.algolia.com/api/v1/search?query=`);

	// 		setData(result.data);
	// 	};

	// 	fetchData();
	// 	// console.log(data);
	// }, []);

	const [modal, setModal] = React.useState(false);

	const toggleModal = (d) => {
		setModal(!modal);
		setId(d);
	};

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}
	const onSubmitHandle = () => {
		axios(`https://hn.algolia.com/api/v1/search?query=${SearchData}`)
			.then((res) => {
				console.log(res);
				setData(res?.data);
			})
			.catch((e) => {
				console.log(e);
			});
		// setSearchData1(SearchData);
	};
	return (
		<div className="SearchContainer">
			<div>
				<h1>Search Data Table</h1>
			</div>
			<div className="search Box">
				<div className="InputBox">
					<input
						type="text"
						placeholder="Search Data"
						onChange={(e) => setSearchData(e.target.value)}
					/>
				</div>
				<div className="btnBox">
					<button className="btnC" onClick={onSubmitHandle}>
						Search
					</button>
				</div>
			</div>
			<div className="contentBox">
				<table id="customers">
					<tr>
						<th>Object Id</th>
						<th>title </th>
						<th>Points</th>
					</tr>
					{data?.hits?.map((d) => {
						return (
							<tr onClick={() => toggleModal(d.objectID)}>
								<td>{d.objectID}</td>
								<td>{d.title}</td>
								<td>{d.points}</td>
							</tr>
						);
					})}
				</table>
			</div>
			{/* <button onClick={toggleModal} className="btn-modal">
				Open
			</button> */}

			{modal && <Content id={id} toggleModal={toggleModal} />}
		</div>
	);
};
