import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
        <div className="row">
            <div style={{ backgroundColor: "#A0522D", padding: "10px" }}>
                <nav
                    className="navbar navbar-expand-lg"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src="/img/logo1.png"
                            alt="Khum Phucome Hotel Logo"
                            style={{
                                width: "80px", 
                                height: "80px", 
                                marginRight: "10px",
                                borderRadius: "50%", 
                                border: "3px solid #fff", 
                            }}
                        />
                        <span style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}>
                            โรงแรมคุ้มภูคำ
                        </span>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarNav"
                        style={{ justifyContent: "flex-end" }}
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    to="/home"
                                    className="nav-link"
                                    style={{ color: "#fff", margin: "0 10px" }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/hotel" 
                                    className="nav-link"
                                    style={{ color: "#fff", margin: "0 10px" }}
                                >
                                    Room
                                </Link>
                            </li>
                            <li className="nav-item"> 
                                <Link
                                    to="/Booking" 
                                    className="nav-link"
                                    style={{ color: "#fff", margin: "0 10px" }}
                                >
                                    Booking
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
