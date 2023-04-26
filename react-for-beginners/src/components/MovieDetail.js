import { Link } from "react-router-dom";

function MovieDetail({ title, year, coverImage, genres, description }) {
	return (
		<div>
			<div
				style={{
					fontWeight: "bold",
					fontSize: "32px",
					display: "flex",
					justifyContent: "center",
					marginBottom: "10px",
				}}
			>
				{`${title} (${year})`}
			</div>
			<img src={coverImage} alt={"cover-img"} />
			<ul>
				{genres.map((genre) => (
					<li>{genre}</li>
				))}
			</ul>
			<div style={{ maxWidth: "400px", marginBottom: "20px" }}>
				{description}
			</div>
			<Link to="/">Go Home</Link>
		</div>
	);
}

export default MovieDetail;
