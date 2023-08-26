
import { useContext } from "react"
import { CartContext } from '../../components/CartContext/CartContext';


function Cart() {
  const {
    cart,
    addToCart,
    decreaseToCart,
    removeFromCart
  } = useContext(CartContext)
  
  const total = cart.reduce((acc,product)=>acc+product.total,0);
  
  return (
    <div className='products cart'>
        <div className="single-cart">
            <div className="container">
                <div className="wrapper">
                    <div className="column">
                        <div className="sectop flexitem">
                            <div className="page-title">
                                <h1><i className="ri-shopping-cart-2-line"></i> Carrito</h1>
                            </div>
                        </div>
                            <div className="flewrap">
                                <form action="" className="form-cart">
                                    <div className="item">
                                        <table className="cart-table">
                                            <thead>
                                                <tr>
                                                    <th>Producto</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th>Subtotal</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((product) => (
                                                    <tr key={product.id}>
                                                        <td style={{fontWeight: 600}}>{product.titulo}</td>
                                                        <td>S/ {product.precio}</td>
                                                        <td>{product.quantity}</td>
                                                        <td>S/ {product.total}</td>
                                                        <td>
                                                            <button onClick={() => decreaseToCart(product.id)}><i className="ri-indeterminate-circle-line"></i></button>
                                                            <button onClick={() => addToCart(product)}><i className="ri-add-circle-line"></i></button>
                                                            <button onClick={() => removeFromCart(product.id)}><i className="ri-close-circle-line"></i></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>

                                        </table>
                                    </div>
                                </form>
                                <div className="cart-summary styled">
                                    <div className="item">
                                        <h1>Total:</h1>
                                        <h3>S/ {total}</h3>
                                        <a href="#" className='secondary-button'><span>Pagar</span></a>
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

export default Cart