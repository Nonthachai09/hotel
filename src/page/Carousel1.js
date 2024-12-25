import React from 'react';

function Carousel() {
    return (
        <div classNam="row">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                </div>
                <div class="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="/img/back.jpg"
                        className="d-block w-100"
                        alt="..."
                        style={{ width: '00%', height: '800px', objectFit: 'cover', margin: '0', padding: '0' ,display: 'block', }} 
                    />
                </div>
                </div>

            </div>
        </div>
    );
}

export default Carousel;