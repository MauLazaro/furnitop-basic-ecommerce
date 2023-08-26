import { Link } from "react-router-dom"


const Item = ({ products }) => {
    return (
        <>
            <div className="product-json">
                <div className="item">
                    <div className="media">
                        <div className="thumbnail object-cover">
                            <Link to={`/item/${products.id}`}>
                                <img src={products.imagen} alt="Producto" />
                            </Link>
                        </div>
                        <div className="hoverable">
                            <ul>
                                <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                                <li><a href="#"><i className="ri-eye-line"></i></a></li>
                                <li><a href="#"><i className="ri-shuffle-line"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <div className="rating">
                            <div className="starts"></div>
                        </div>
                        <h3 className="main-links"><a href="#">{products.titulo}</a></h3>
                        <div className="price">
                            <span className="current">S/ {products.precio}</span>
                        </div>
                        <div className="mini-text">
                            <p>Envio Gratis</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Item