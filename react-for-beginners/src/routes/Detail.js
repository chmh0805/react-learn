import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const { id } = useParams();

	const getMovieDetail = async () => {
		const response = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(response.data.movie);
		setLoading(false);
		console.log(response);
	};

	useEffect(() => {
		getMovieDetail(id);
	}, []);

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<MovieDetail
					title={movie.title}
					year={movie.year}
					coverImage={movie.large_cover_image}
					genres={movie.genres}
					description={movie.description_full}
				/>
			)}
		</div>
	);
}

export default Detail;
