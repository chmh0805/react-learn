import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ id, title, year, mediumCoverImage, summary, genres }) {
	return (
		<div>
			<h2>
				<Link to={`/movie/${id}`}>
					{title} ({year})
				</Link>
			</h2>
			<img src={mediumCoverImage} alt="medium_cover_image" />
			<p>{summary}</p>
			<ul>
				{genres.map((genre) => (
					<li key={genre}>{genre}</li>
				))}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	mediumCoverImage: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
