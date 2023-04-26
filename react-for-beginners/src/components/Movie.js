import PropTypes from "prop-types";

function Movie({ title, year, mediumCoverImage, summary, genres }) {
	return (
		<div>
			<h2>
				{title} ({year})
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
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	mediumCoverImage: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
