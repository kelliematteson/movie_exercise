import React from 'react';

export default function MovieInfo(props) {
	let movieLibrary = props.movie.Search;

	return (
		<ul className="list">
			{movieLibrary.map(item => {
				return <li>{item.title}</li>;
			})}
		</ul>
	);
}
