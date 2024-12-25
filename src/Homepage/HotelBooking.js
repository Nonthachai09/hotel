import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate(); 

    const handleBackClick = () => {
        navigate(-1); 
    };

    return (
        <div>
            <header className="bg-brown text-white py-3 px-4 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src="../img/logo.png" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                    <h1>โรงแรมคุ้มคำ</h1>
                </div>
                <nav>
                    <a href="#" className="text-white text-decoration-none mx-2">Home</a>
                    <a href="#" className="text-white text-decoration-none mx-2">Room</a>
                </nav>
            </header>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3>ข้อมูล</h3>
                        <p>วันที่เช็คอินและเช็คเอาท์</p>
                        <p>วันจันทร์ ที่ 7 มีนาคม พ.ศ.2570 - วันศุกร์ ที่ 25 มีนาคม พ.ศ.2570</p>

                        <div className="mb-3">
                            <label className="fw-bold">การชำระเงิน</label>
                            <input type="text" className="form-control mb-2" placeholder="ธนาคารกรุงไทย" readOnly />
                            <input type="text" className="form-control mb-2" placeholder="1-111111-11-1" readOnly />
                            <p className="mt-2">โรงแรมคุ้มคำ</p>
                        </div>

                        <div className="mb-3">
                            <label className="fw-bold">ชื่อ</label>
                            <input type="text" className="form-control mb-2" placeholder="นายสมชาย ลูกค้า" readOnly />
                            <label className="fw-bold">ที่อยู่ลูกค้า</label>
                            <textarea className="form-control mb-2" placeholder="111 หมู่ 1 บ้านดอน เมือง เชียงใหม่ 50230" rows="3" readOnly></textarea>
                            <label className="fw-bold">Email ลูกค้า</label>
                            <input type="email" className="form-control mb-2" placeholder="GEEZ@gmail.com" readOnly />
                            <label className="fw-bold">เบอร์โทรลูกค้า</label>
                            <input type="tel" className="form-control" placeholder="09874563210" readOnly />
                        </div>

                        <div className="text-center">
                            <img src="/img/qr-code.png" alt="QR Code" style={{ width: '150px', height: '150px' }} />
                        </div>

                        <div className="d-flex justify-content-between mt-3">
                            <button className="btn btn-danger" onClick={handleBackClick}>กลับ</button> {/* Back Button */}
                            <button className="btn btn-success">ยืนยัน</button>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3>จำนวนผู้เข้าพัก</h3>
                            <div className="text-end">
                                <p className="mb-1">ผู้ใหญ่: 1</p>
                                <p>เด็ก: 1 - จำนวน 1 ห้อง</p>
                            </div>
                        </div>
                        <img
                            src="../img/room1.jpg"
                            alt="Room"
                            className="img-fluid rounded mb-3"
                        />
                        <h3>ห้องดีลักซ์ ล้านนา</h3>
                    </div>
                </div>
            </div>

            <footer className="text-center py-4" style={{ backgroundColor: '#A0522D', color: '#fff' }}>
                &copy; 2024 Khum Phucome Hotel. All rights reserved. by Hotelbiz
            </footer>
        </div>
    );
};

export default Checkout;
