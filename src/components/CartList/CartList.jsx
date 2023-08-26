import React from 'react'

function CartList( { title, price, quantity, subtotal } ) {
   
  return (
    <div>
        {
            title
        }
        {
            price
        }
        {
            quantity
        }
        {
            subtotal
        }
    </div>
  )
}

export default CartList