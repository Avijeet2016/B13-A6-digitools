import React, { use } from 'react';
import Product from './Product';

const Products = ({ productsPromise, cart, setCart }) => {
  const products = use(productsPromise);

  return (
    <div className="max-w-300 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-7 mb-30 px-5 lg:px-0">
      {products.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart}></Product>
      ))}
    </div>
  );
};

export default Products;