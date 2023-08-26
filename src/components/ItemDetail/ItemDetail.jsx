import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({ item }) => {
  const {
    addToCart
  } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)

  const handleCart = () => {
    const product = {
      ...item,
      quantity
    }
    addToCart(product)
  }

  return (
    <div className="single-cart">
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="sectop flexitem">
              <div className="page-title">
                <h1><i className="ri-box-2-line"></i> Producto</h1>
              </div>
            </div>
            <div className="products one">
              <div className="flexwrap">
                <div className="row">
                  <div className="item">
                    <div className="big-image">
                      <div className="big-image-wrapper">
                        <div className="image-show">
                          <img src={item.imagen} alt={item.titulo} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="item">
                    <h1 className="titulo">{item.titulo}</h1>
                    <div className="content">
                      <div className="stock-sku">
                        <span className="stock">En stock: {item.stock}</span>
                      </div>
                      <div className="info-product">
                        <h3>DETALLES DEL PRODUCTO</h3> <br />
                        <span>{(item.category).toUpperCase()}</span> <br />
                        <span>{item.descripcion}</span>
                      </div>
                      <div className="price"> <br />
                        <span className="current">S/ {item.precio}</span>
                      </div>
                      <div className="actions">
                        <div className="button-cart">
                          <button className="primary-button" onClick={() => handleCart()}>Agregar al carrito</button>
                        </div>
                      </div>
                      <div className="wish-share">
                        <ul className="flexitem second-links">
                          <li><Link to="#">
                            <span className="icon-large"><i className="ri-heart-line"></i></span>
                            <span>Favoritos</span>
                          </Link></li>
                          <li><Link to="#">
                            <span className="icon-large"><i className="ri-share-line"></i></span>
                            <span>Compartir</span>
                          </Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail