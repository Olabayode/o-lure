import { AnimatePresence, motion } from "framer-motion";

function AddToCartModal(props)
{
  return(
    <AnimatePresence>
      {props.product && (
        <motion.aside
          className="add-cart-modal"
          initial={{opacity: 0, x: 80, y: -12}}
          animate={{opacity: 1, x: 0, y: 0}}
          exit={{opacity: 0, x: 80, y: -12}}
          transition={{duration: 0.3, ease: "easeOut"}}
          aria-live="polite"
        >
          <img src={props.product.image} alt={props.product.title} />
          <div>
            <p>Item added to cart</p>
            <h2>{props.product.title.split(' ').slice(0, 4).join(' ')}</h2>
            <strong>${props.product.price}</strong>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default AddToCartModal;
