function Cart(props)
{
  return(
    <>
      <h1>Cart</h1>
      {props.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {props.cart.map(item => (
            <li key={item.id}>
              <p>{item.title} ${item.price}</p>
              <div>
                <button type="button" onClick={() => props.decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => props.increaseQuantity(item.id)}>+</button>
              </div>
              <button type="button" onClick={() => props.removeFromCart(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cart;
