import React from 'react';


const Home = () => {
  return (

    <div class="row">
      <div classNam="row">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          </div>
          <div class="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./img/back.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: '00%', height: '800px', objectFit: 'cover', margin: '0', padding: '0', display: 'block', }}
              />
            </div>
          </div>

        </div>
      </div>
      <div className="container mt-4">

        <section className="container">

          <div className="row align-items-center">

            <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "20vh" }}>
              <h2 className="fw-bold mb-2">ยินดีต้อนรับ</h2>
              <h1 className="">โรงแรมคุ้มภูคำ เชียงใหม่</h1>
            </div>


            <div className="col-md-6">
              <img
                src="../img/back.jpg"
                alt="Khum Phucome Hotel"
                className="img-fluid rounded"
              />
            </div>


            <div className="col-md-6 text-start">
              <p>
                ความสุขสมบูรณ์แบบที่พบได้ในโรงแรมคุ้มคำเชียงใหม่ ที่ซึ่งความสง่างามสไตล์ล้านนาผสมผสาน
                เข้ากับความซับซ้อนที่ทันสมัย โรงแรมตั้งอยู่รอบ ๆ สถานที่สำคัญหลายแห่ง
                พร้อมด้วยห้องประชุม ไม้สักทอง และห้องพักหรูหรา 180 ห้อง
                พร้อมตอบสนองทุกความต้องการของคุณ
              </p>
              <h4 className="fw-bold">จุดเด่น</h4>
              <ul>
                <li>ตั้งอยู่ใกล้สนามบินและสถานที่สำคัญ</li>
                <li>ห้องพักหรูหรา 180 ห้อง</li>
                <li>ห้องประชุมขนาดใหญ่และเล็ก</li>
                <li>บริการร้านอาหารและคาเฟ่</li>
                <li>สระว่ายน้ำระบบเกลือ</li>
                <li>Wi-Fi ความเร็วสูง</li>
                <li>ที่จอดรถฟรี</li>
              </ul>
            </div>
          </div>
        </section>


        <section className="container my-5">
          <h2 className="mb-3">โปรโมชั่นโรงแรม</h2>
          <div className="card shadow-sm">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="../img/01.jpg"
                  alt="Room"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">ห้องดีลักซ์ เตียงคู่</h3>
                  <p className="card-text">
                    2 ท่าน / ราคาเริ่มต้น 1,000 บาท
                  </p>
                  <p className="card-text">
                    สิ่งอำนวยความสะดวก: ฟรีอินเทอร์เน็ต, อาหารเช้า
                  </p>
                  <button className="btn btn-primary">ดูรายละเอียด</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container my-5">
          <h2 className="mb-3">รีวิวโรงแรม</h2>
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="col-md-4 mb-3" key={item}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">8.5 / 10 คะแนน</h5>
                    <p className="card-text">
                      การให้บริการดีเยี่ยม พนักงานน่ารัก
                    </p>
                    <p className="text-muted">- คุณสมชาย</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7553.8096390815235!2d98.95715841252363!3d18.802394626685135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a67902647f9%3A0x8d88a68d283919a5!2z4LmC4Lij4LiH4LmB4Lij4Lih4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI4Lig4Li54LiE4Liz!5e0!3m2!1sth!2sth!4v1733295220343!5m2!1sth!2sth"
                  allowFullScreen
                  loading="lazy"
                  className="rounded border"
                ></iframe>
              </div>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold">ที่อยู่</h2>
              <p>โรงแรมคุ้มคำ เชียงใหม่</p>
              <p>14/23 ถนนคลองชลประทาน ต.ช้างเผือก</p>
              <p>อ.เมือง จ.เชียงใหม่ 50300</p>
              <p>โทร: (66) 53 400 450 - 2</p>
              <p>มือถือ: (66) 86 428 0401</p>
              <p>อีเมล: Khumphucomehotel</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold">แผนที่</h2>
              <img
                src="../img/11.jpg"
                alt="Hotel Location Map"
                className="img-fluid rounded border"
              />
            </div>
          </div>
        </section>



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

export default Home;