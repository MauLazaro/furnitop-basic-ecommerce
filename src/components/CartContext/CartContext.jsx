import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	useEffect(() => {
		const cartStorage = localStorage.getItem('cartSave')

		if (cartStorage) {
			const cartParsed = JSON.parse(cartStorage)
			setCart(cartParsed)
			return
		}

		localStorage.setItem('cartSave', JSON.stringify(cart))
	}, [])

	const addToCart = product => {
		const productInCart = cart.findIndex(
			item => item.id === product.id
		)

		if (productInCart >= 0) {
			const newCart = JSON.parse(JSON.stringify(cart))
			newCart[productInCart].quantity += 1
			newCart[productInCart].total =
				parseFloat(newCart[productInCart].precio) *
				newCart[productInCart].quantity
			localStorage.setItem('cartSave', JSON.stringify(newCart))
			return setCart(newCart)
		}

		const { precio, quantity } = product

		const newCart = [...cart, { ...product, total: precio * quantity }]
		setCart(newCart)
		localStorage.setItem('cartSave', JSON.stringify(newCart))
	}

	const decreaseToCart = productId => {
		const productInCartIndex = cart.findIndex(
			item => item.id === productId
		)

		if (productInCartIndex >= 0) {
			const newCart = JSON.parse(JSON.stringify(cart))
			const newQuantity = newCart[productInCartIndex].quantity - 1

			if (newQuantity > 0) {
				newCart[productInCartIndex].quantity = newQuantity
				newCart[productInCartIndex].total =
					parseFloat(newCart[productInCartIndex].precio) * newQuantity
				setCart(newCart)
			} else {
				newCart.splice(productInCartIndex, 1)
				setCart(newCart)
			}

			localStorage.setItem('cartSave', JSON.stringify(newCart))
		}
	}

	const removeFromCart = productId => {
		const newCart = cart.filter(item => item.id !== productId)
		setCart(newCart)
		localStorage.setItem('cartSave', JSON.stringify(newCart))
	}

	console.log(cart)

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				decreaseToCart,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
