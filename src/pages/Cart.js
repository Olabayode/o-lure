import cartBannerImage from "../assets/womens clothing.avif";

function Cart(props)
{
  const subtotal = props.cart.reduce((total, item) => (
    total + (item.price * item.quantity)
  ), 0);
  const estimatedTax = subtotal * 0.12;
  const total = subtotal + estimatedTax;

  return(
    <>
      <section className="cart-banner">
        <img src={cartBannerImage} alt="" />
        <div className="cart-banner-content">
          <p>SHOPPING BAG</p>
          <h1>Your Collection</h1>
        </div>
      </section>
      {props.cart.length === 0 ? (
        <div className="empty-cart">

  <h2>Your cart is empty</h2>
    <p>
      Discover timeless pieces and build your collection.
    </p>
  </div>
      ) : (
        <section className="cart-page">
          <div className="cart-content">
            <div className="cart-items-column">
              <div className="cart-heading">
                <h2>Your Selection</h2>
                <p>{props.cart.length} item{props.cart.length === 1 ? '' : 's'}</p>
              </div>
              <ul className="cart-list">
              {props.cart.map(item => (
                <li className="cart-item" key={item.id}>
                  <img className="cart-item-image" src={item.image} alt={item.title} />
                  <div className="cart-item-details">
                    <p className="cart-item-category">{item.category}</p>
                    <h3>{item.title}</h3>
                    <div className="cart-item-actions">
                      <div className="quantity-control">
                        <button type="button" onClick={() => props.decreaseQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => props.increaseQuantity(item.id)}>+</button>
                      </div>
                      <button className="delete-button" type="button" onClick={() => props.removeFromCart(item.id)}>Delete</button>
                    </div>
                  </div>
                  <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                </li>
              ))}
              </ul>
            </div>
            <aside className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Estimated tax</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="checkout-button" type="button">Checkout</button>
            </aside>
          </div>
        </section>
      )}
    </>
  );
}

export default Cart;
