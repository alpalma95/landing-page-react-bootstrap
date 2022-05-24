import React from "react";

const Card = ({ title, description, buttonText }) => {
	return (
		<div className="card col-12 col-sm px-0 m-3">
			<img
				src="https://picsum.photos/500/325"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body text-center px-0">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<hr class="dropdown-divider" />
				<a href="#" className="btn btn-primary">
					{buttonText}
				</a>
			</div>
		</div>
	);
};

export default Card;
