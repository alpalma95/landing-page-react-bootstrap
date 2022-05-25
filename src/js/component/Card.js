import React from "react";

const Card = ({ title, description, buttonText, imgUrl }) => {
	return (
		<div className="card col-12 col-md px-0">
			<img src={imgUrl} className="card-img-top" alt="..." />
			<div className="card-body text-center px-0">
				<h5 className="card-title">{title}</h5>
				<p className="card-text p-2">{description}</p>
				<hr class="dropdown-divider" />
				<a href="#" className="btn btn-primary">
					{buttonText}
				</a>
			</div>
		</div>
	);
};

export default Card;
