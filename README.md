# O-LURE

O-LURE is a React ecommerce storefront for a luxury fashion brand. The app uses the Fake Store API for product data, local storage for cart persistence, React Router for navigation, Swiper for the home carousel, and Framer Motion for page interactions and animated UI.

## Features

- Home page with luxury hero banner, Swiper product carousel, campaign banner, animated category cards, and About Us section.
- Products page with women, men, and jewelry collections.
- Product collections can be expanded or hidden with Framer Motion animation.
- Women collection starts with 4 products and supports Show more / Show less.
- Search page shows 8 randomized trending products, with title and price sorting.
- Product details page with product image, description, price, rating, reviews, and similar products.
- Cart page with quantity controls, delete item button, subtotal, 12% estimated tax, free shipping, and total.
- Cart data persists in `localStorage`.
- Animated Add to Cart modal appears when a product is added.
- Back to Top button appears after scrolling.
- 404 Not Found page.

## Packages Used

- `react`: Builds the component-based user interface.
- `react-router-dom`: Handles client-side routing, navigation links, URL params, and query params.
- `axios`: Fetches products from `https://fakestoreapi.com/products/`.
- `swiper`: Powers the home page product carousel.
- `framer-motion`: Animates the category cards, collection reveal/hide behavior, and Add to Cart modal.


## Local Storage

The cart is saved in local storage which allows cart items and quantities to persist after refreshing the browser.

## To run the app
[https://olabayode.github.io/o-lure/]