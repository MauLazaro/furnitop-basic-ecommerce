import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"


function Navbar() {
    const {
        cart,
        
      } = useContext(CartContext)
    
    const total = cart.reduce((acc,product)=>acc+product.total,0);
    return (
        <div>
            <div className="header-top mobile-hide">
                <div className="container">
                    <div className="wrapper flexitem">
                        <div className="left">
                            <ul className="flexitem main-links">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Productos recientes</a></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul className="flexitem second-links">
                                <li><a href="#">Cerrar sesión</a></li>
                                <li><a href="#">Mi cuenta</a></li>
                                <li><a href="#">Historial</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-nav">
                <div className="container">
                    <div className="wrapper flexitem">
                        <a href="#" className="trigger desktop-hide"><i className="ri-menu-2-line"></i></a>
                        <div className="left flexitem">
                            <div className="logo"><Link to="/"><i className="ri-price-tag-3-line"></i>.Furnitop</Link></div>
                            <nav className="mobile-hide">
                                <ul className="flexitem second-links">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/products">Tienda</Link></li>
                                    <li className="has-child">
                                        <Link to="/products/muebles">Muebles
                                            <div className="icon-small"><i className="ri-arrow-down-s-line"></i></div>
                                        </Link>
                                        <div className="mega">
                                            <div className="container">
                                                <div className="wrapper">
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Mesas</h4>
                                                            <ul>
                                                                <li><a href="#">Escritorio de oficina</a></li>
                                                                <li><a href="#">Mesas de comedor</a></li>
                                                                <li><a href="#">Mesas de salón</a></li>
                                                                <li><a href="#">Mesas de noche</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Armarios</h4>
                                                            <ul>
                                                                <li><a href="#">Armarios modulares</a></li>
                                                                <li><a href="#">Armarios con puertas corredoras</a></li>
                                                                <li><a href="#">Armarios infantiles</a></li>
                                                                <li><a href="#">Armarios con espejo</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Sofás</h4>
                                                            <ul>
                                                                <li><a href="#">Sofás de tela</a></li>
                                                                <li><a href="#">Sofás de piel</a></li>
                                                                <li><a href="#">Sofás cama</a></li>
                                                                <li><a href="#">Puffs y reposapiés</a></li>
                                                                <li><a href="#">Chaise longues y divanes</a></li>
                                                                <li><a href="#">Fundas de sofás y sillón</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>


                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Sillas</h4>
                                                            <ul>
                                                                <li><a href="#">Sillones</a></li>
                                                                <li><a href="#">Sillas de escritorio</a></li>
                                                                <li><a href="#">Sillas de gaming</a></li>
                                                                <li><a href="#">Sillas de comedor</a></li>
                                                                <li><a href="#">Sillas de cafetería</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Top Marcas</h4>
                                                            <ul className="furniture-brands">
                                                                <li><a href="#">Amazon Furniture</a></li>
                                                                <li><a href="#">Bolzan Letti</a></li>
                                                                <li><a href="#">Cattelan Italia</a></li>
                                                                <li><a href="#">Désirée Divani</a></li>
                                                                <li><a href="#">Felis</a></li>
                                                                <li><a href="#">Ikea</a></li>
                                                                <li><a href="#">La Primaveras</a></li>
                                                                <li><a href="#">Plust</a></li>
                                                            </ul>
                                                            <a href="#" className="view-all">Ver todas las marcas <i className="ri-arrow-right-s-line"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol products">
                                                        <div className="row">
                                                            <div className="media">
                                                                <div className="thumbnail object-cover">
                                                                    <Link to="/item/3">
                                                                        <img src="/public/img/menu/3.png" alt="mueble-mas-comprado" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="text-content">
                                                                <h4>El más comprado</h4>
                                                                <Link to="/item/3" className="primary-button">Ordena ahora</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/products/decoracion">Decoración</Link></li>
                                    <li>
                                        <Link to="/products/iluminacion">Iluminación
                                            <div className="fly-item"><span>New!</span></div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right">
                            <ul className="flexitem second-links">
                                <li className="mobile-hide"><a href="#">
                                    <div className="icon-large"><i className="ri-heart-line"></i></div>
                                    <div className="fly-item"><span className="item-number">0</span></div>
                                </a></li>
                                {/* Cart */}
                                <li><Link to="/cart" className="iscart">
                                    <div className="icon-large">
                                        <i className="ri-shopping-cart-2-line"></i>
                                        <div className="fly-item"><span className="item-number">{cart.length}</span></div>
                                    </div>
                                    <div className="icon-text">
                                        <div className="mini-text">Total</div>
                                        <div className="cart-total">S/ {total}</div>
                                    </div>
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="header-main mobile-hide">
                <div className="container">
                    <div className="wrapper flexitem">
                        <div className="left">
                            <div className="dpt-cat">
                                <div className="dpt-head">
                                    <div className="main-text">Todos los catalogos</div>
                                    <div className="mini-text mobile-hide">585 Productos</div>
                                    <a href="#" className="dpt-trigger mobile-hide">
                                        <i className="ri-menu-3-line"></i>
                                    </a>
                                </div>
                                <div className="dpt-menu">
                                    <ul className="second-links">
                                        <li className="has-child furniture">
                                            <a href="#">
                                                Muebles
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Mesas</a></li>
                                                <li><a href="#">Armarios</a></li>
                                                <li><a href="#">Sofás</a></li>
                                                <li><a href="#">Sillas</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-child textile">
                                            <a href="#">
                                                Textiles
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Cojines</a></li>
                                                <li><a href="#">Ropa</a></li>
                                                <li><a href="#">Manteles</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Decoración
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Espejos
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Camas
                                            </a>
                                        </li>
                                        <li className="has-child home-appliances">
                                            <a href="#">
                                                Electrodomesticos
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Placas de cocina</a></li>
                                                <li><a href="#">Lavavajillas</a></li>
                                                <li><a href="#">Microondas</a></li>
                                                <li><a href="#">Hornos</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Jardinería
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Alfombras
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Infantil
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Iluminación
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="search-box">
                                <form action="" className="search">
                                    <span className="icon-large"><i className="ri-search-2-line"></i></span>
                                    <input type="search" placeholder="Buscar productos" />
                                    <button type="submit">Buscar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar