import React from "react";

const Navbar = () => {
	return (
		<div className="container-fluid bg-dark sticky-top">
			<nav className="navbar navbar-expand-md navbar-dark bg-dark container mx-auto">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
							<a className="nav-link" href="#">
								About
							</a>
							<a className="nav-link" href="#">
								Services
							</a>
							<a className="nav-link" href="#">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
