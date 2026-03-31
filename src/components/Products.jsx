import React, { use } from 'react';
import Product from './Product';

const Products = ({ productsPromise, cart, setCart }) => {
  const products = use(productsPromise);

  return (
    <div className="max-w-300 mx-auto grid grid-cols-3 gap-7 mb-30">
      {products.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart}></Product>
      ))}
    </div>
  );
};

export default Products;