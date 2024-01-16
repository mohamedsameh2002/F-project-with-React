import "./slider.css"
export default function Slider() {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png" className="d-block w-100 height-500" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq" className="d-block w-100 height-500" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://imatrix.com/wp-content/uploads/sites/12/2021/03/ecommerce.jpg" className="d-block w-100 height-500" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>

    )
}