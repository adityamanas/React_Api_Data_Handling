import React from "react";
import axios from "axios";
const Content = (props) => {
	const [Data1, setData1] = React.useState({ hits: [] });
	React.useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				`http://hn.algolia.com/api/v1/items/${props.id}`
			);

			setData1(result.data);
		};

		fetchData();
		console.log(Data1);
	}, []);
	console.log(props);
	console.log(Data1);
	return (
		<div className="modal">
			<div onClick={props.toggleModal} className="overlay"></div>
			<div className="modal-content">
				<h2>Hello Modal</h2>
				<div className="BoxObjID">
					<h3>Object ID</h3>
					<p>{Data1.id}</p>
				</div>
				<div className="BoxTitle">
					<h3>Title</h3>
					<p>{Data1.title}</p>
				</div>
				<div className="BoxPoints">
					<h3>Title</h3>
					<p>{Data1.points}</p>
				</div>
				<button className="close-modal" onClick={props.toggleModal}>
					close
				</button>
			</div>
		</div>
	);
};
export default Content;
