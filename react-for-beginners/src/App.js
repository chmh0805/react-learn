import { useEffect } from "react";
import { useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<div key={movie.id}>
							<h2>
								{movie.title} ({movie.year})
							</h2>
							<img src={movie.medium_cover_image} alt="medium_cover_image" />
							<p>{movie.summary}</p>
							<ul>
								{movie.genres.map((genre) => (
									<li key={genre}>{genre}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
