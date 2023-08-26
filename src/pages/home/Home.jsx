import "./home.css";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules'
import { SliderItem } from "../../components/SliderItem/SliderItem";
import { SwiperNavButtons } from "../../components/SwiperNavButtons/SwiperNavButtons";
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Countdown from "../../components/Countdown/Countdown";

import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";



function Home() {


  return (
    <div className="home">
      <div className="header-main mobile-hide">
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
                                            <Link to="/products/muebles">
                                                Muebles
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </Link>
                                            <ul>
                                                <li><a href="#">Mesas</a></li>
                                                <li><a href="#">Armarios</a></li>
                                                <li><a href="#">Sofás</a></li>
                                                <li><a href="#">Sillas</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-child textile">
                                            <Link to="/products/textiles">
                                                Textiles
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </Link>
                                            <ul>
                                                <li><a href="#">Cojines</a></li>
                                                <li><a href="#">Ropa</a></li>
                                                <li><a href="#">Manteles</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/products/decoracion">
                                                Decoración
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products/espejos">
                                                Espejos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products/camas">
                                                Camas
                                            </Link>
                                        </li>
                                        <li className="has-child home-appliances">
                                            <Link to="/products/electrodomesticos">
                                                Electrodomesticos
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </Link>
                                            <ul>
                                                <li><a href="#">Placas de cocina</a></li>
                                                <li><a href="#">Lavavajillas</a></li>
                                                <li><a href="#">Microondas</a></li>
                                                <li><a href="#">Hornos</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/products/jardineria">
                                                Jardinería
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products/alfombras">
                                                Alfombras
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products/infantil">
                                                Infantil
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products/iluminacion">
                                                Iluminación
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <Search />
                        </div>
                    </div>
                </div>
      </div> 

      <main>
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <SliderItem
              title='Muebles'
              backgroundImg='./../../../public/img/slider/1.jpeg'
            >
              Descuentos en sofás y sillas.
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='Iluminación'
              backgroundImg='./../../../public/img/slider/2.jpeg'
            >
              Explora nuestra nueva sesión.
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='Electrodomesticos'
              backgroundImg='./../../../public/img/slider/3.png'
            >
              Nuevos productos para ti.
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='Infantil'
              backgroundImg='./../../../public/img/slider/4.jpeg'
            >
              Cunas, Juguetes y más.
            </SliderItem>
          </SwiperSlide>
          <SwiperNavButtons />
        </Swiper>

        <div className="brands">
          <div className="container">
            <div className="wrapper flexitem">
              <div className="item">
                <a href="#">
                  <img src="./../../../public/img/brands/1.png" alt="marcas" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="./../../../public/img/brands/2.png" alt="marcas" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="./../../../public/img/brands/3.png" alt="marcas" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="./../../../public/img/brands/4.png" alt="marcas" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="trending">
          <div className="container">
            <div className="wrapper">
              <div className="sectop flexitem">
                <h2><i className="ri-line-chart-line"></i> Productos en Tendencia</h2>
              </div>
              <div className="column">
                <div className="flexwrap">
                  <div className="row products big">

                    <div className="item">
                      <div className="offer">
                        <p>La oferta termina en</p>
                        <div className="flexcenter countdown">
                          <Countdown/>
                        </div>
                      </div>
                      <div className="media">
                        <div className="image">
                          <Link to="/item/3">
                            <img src="./../../../public/img/menu/3.png" alt="Producto" />
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
                          <span className="mini-text">(265)</span>
                        </div>
                        <h3 className="main-links"><a href="#">LÁMPARA COLGANTEANTE OBREGON</a></h3>
                        <div className="price">
                          <span className="current">S/ 299</span>
                          <span className="normal mini-text">S/ 599</span>
                        </div>
                        <div className="stock mini-text">
                          <div className="qty">
                            <span>Stock:<strong className="qty-available">168</strong></span>
                            <span>Vendidos:<strong className="qty-sold">368</strong></span>
                          </div>
                          <div className="bar">
                            <div className="available">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row products mini">
                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/4">
                            <img src="./../../../public/img/menu/4.jpg" alt="Producto" />
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
                          <span className="mini-text">(453)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 2100</span>
                          <span className="normal mini-text">S/ 6999</span>
                        </div>
                        <div className="mini-text">
                          <p>86 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/5">
                            <img src="./../../../public/img/menu/5.png" alt="Producto" />
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
                          <span className="mini-text">(351)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 1599</span>
                          <span className="normal mini-text">S/ 1699</span>
                        </div>
                        <div className="mini-text">
                          <p>124 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/6">
                            <img src="./../../../public/img/menu/6.jpg" alt="Producto" />
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
                          <span className="mini-text">(51)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 422</span>
                          <span className="normal mini-text">S/ 469</span>
                        </div>
                        <div className="mini-text">
                          <p>467 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/7">
                            <img src="./../../../public/img/menu/7.png" alt="Producto" />
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
                          <span className="mini-text">(213)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 199</span>
                          <span className="normal mini-text">S/ 289</span>
                        </div>
                        <div className="mini-text">
                          <p>392 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                     <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/8">
                            <img src="./../../../public/img/menu/8.jpg" alt="Producto" />
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
                          <span className="mini-text">(65)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 96</span>
                          <span className="normal mini-text">S/ 110</span>
                        </div>
                        <div className="mini-text">
                          <p>791 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/9">
                            <img src="./../../../public/img/menu/9.png" alt="Producto" />
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
                          <span className="mini-text">(54)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 53</span>
                          <span className="normal mini-text">S/ 60</span>
                        </div>
                        <div className="mini-text">
                          <p>54 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/10">
                            <img src="./../../../public/img/menu/10.png" alt="Producto" />
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
                          <span className="mini-text">(566)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 529</span>
                          <span className="normal mini-text">S/ 599</span>
                        </div>
                        <div className="mini-text">
                          <p>777 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/11">
                            <img src="./../../../public/img/menu/11.jpg" alt="Producto" />
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
                          <span className="mini-text">(35)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 26</span>
                          <span className="normal mini-text">S/ 30</span>
                        </div>
                        <div className="mini-text">
                          <p>964 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                     <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/12">
                            <img src="./../../../public/img/menu/12.png" alt="Producto" />
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
                          <span className="mini-text">(654)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 738</span>
                          <span className="normal mini-text">S/ 820</span>
                        </div>
                        <div className="mini-text">
                          <p>967 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/13">
                            <img src="./../../../public/img/menu/13.jpg" alt="Producto" />
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
                          <span className="mini-text">(41)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 59</span>
                          <span className="normal mini-text">S/ 79</span>
                        </div>
                        <div className="mini-text">
                          <p>84 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  
                </div>
              </div>
              

            </div>
          </div>
        </div> 

        <div className="features">
          <div className="container">
            <div className="wrapper">
              <div className="column">
                <div className="sectop flexitem">
                  <h2><i className="ri-arrow-up-double-line"></i> Productos Recientes</h2>
                  <div className="second-links">
                    <Link to="/products" className="view-all">Ver Todos<i className="ri-arrow-right-s-line"></i></Link>
                    </div>
                </div>
                <div className="products main flexwrap">
                  <div className="item">
                    <div className="media">
                        <div className="thumbnail object-cover">
                              <Link to="/item/1">
                                  <img src="./../../../public/img/menu/1.jpg" alt="Producto" />
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
                              <span className="mini-text">(04)</span>
                          </div>
                          <h3 className="main-links"><a href="#"></a></h3>
                          <div className="price">
                              <span className="current">S/ 1999</span>
                              <span className="normal mini-text">S/ 2000</span>
                          </div>
                          <div className="mini-text">
                              <p>232 Vendidos</p>
                              <p>Envio Gratis</p>
                          </div>
                      </div>
                  </div>

                  <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/8">
                            <img src="./../../../public/img/menu/8.jpg" alt="Producto" />
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
                          <span className="mini-text">(65)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 96</span>
                          <span className="normal mini-text">S/ 110</span>
                        </div>
                        <div className="mini-text">
                          <p>791 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/7">
                            <img src="./../../../public/img/menu/7.png" alt="Producto" />
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
                          <span className="mini-text">(213)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 199</span>
                          <span className="normal mini-text">S/ 289</span>
                        </div>
                        <div className="mini-text">
                          <p>392 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/11">
                            <img src="./../../../public/img/menu/11.jpg" alt="Producto" />
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
                          <span className="mini-text">(35)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 26</span>
                          <span className="normal mini-text">S/ 30</span>
                        </div>
                        <div className="mini-text">
                          <p>964 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/9">
                            <img src="./../../../public/img/menu/9.png" alt="Producto" />
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
                          <span className="mini-text">(54)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 53</span>
                          <span className="normal mini-text">S/ 60</span>
                        </div>
                        <div className="mini-text">
                          <p>54 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link to="/item/5">
                            <img src="./../../../public/img/menu/5.png" alt="Producto" />
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
                          <span className="mini-text">(351)</span>
                        </div>
                        <h3 className="main-links"><a href="#"></a></h3>
                        <div className="price">
                          <span className="current">S/ 1599</span>
                          <span className="normal mini-text">S/ 1699</span>
                        </div>
                        <div className="mini-text">
                          <p>124 Vendidos</p>
                          <p>Envio Gratis</p>
                        </div>
                      </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home