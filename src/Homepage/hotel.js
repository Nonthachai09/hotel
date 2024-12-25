import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hotel = () => {
    const navigate = useNavigate();

    const handleBookingClick = () => {
        navigate('/booking');
    };

    return (
        <div className="container-fluid p-0">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img
                            src="../img/01.png"
                            className="d-block w-100"
                            alt="Hotel Image"
                            style={{ objectFit: 'cover', height: '500px' }}
                        />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center gap-3 my-4">
                <button className="btn btn-outline-brown px-4 py-2">Standard</button>
                <button className="btn btn-outline-brown px-4 py-2">Deluxe</button>
                <button className="btn btn-outline-brown px-4 py-2">Suite</button>
            </div>

            <div className="container my-5">
                <div className="row g-4">
                    <RoomCard
                        image="../img/room1.jpg"
                        title="ห้องดีลักซ์ ล้านนา"
                        size="20 ตร.ม."
                        capacity="2 คน"
                        price="฿1,000"
                        handleBookingClick={handleBookingClick}
                    />
                    <RoomCard
                        image="../img/room2.jpg"
                        title="ห้องพักอีโคซูพีเรีย ดีลักซ์"
                        size="25 ตร.ม."
                        capacity="2 คน"
                        price="฿1,700"
                        handleBookingClick={handleBookingClick}
                    />
                    <RoomCard
                        image="../img/room3.jpg"
                        title="ห้องสูทพรีเมียร์"
                        size="40 ตร.ม."
                        capacity="4 คน"
                        price="฿2,800"
                        handleBookingClick={handleBookingClick}
                    />
                </div>
            </div>

            <footer style={{ backgroundColor: "#A0522D", padding: "10px" }} className="text-center py-3 text-white w-200 position-relative m-0">
                <p className="mb-0">
                    © 2024 Khum Phucome Hotel. All rights reserved. by
                    <a href="#" className="text-decoration-none ms-1 text-white">Hotelbiz</a>
                </p>
            </footer>
        </div>

    );
};

const RoomCard = ({ image, title, size, capacity, price, handleBookingClick }) => {
    return (
        <div className="col-md-4">
            <div className="card shadow-sm border-0 rounded">
                <img src={image} alt={title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">ขนาด: {size}</p>
                    <p className="card-text">พักได้: {capacity}</p>
                    <p className="text-brown fw-bold">{price}</p>
                    <button className="btn btn-primary" onClick={handleBookingClick}>
                        จองเลย
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hotel;
