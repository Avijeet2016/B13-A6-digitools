import React from 'react';

const Tab = ({tab, setTab, cart}) => {
    
    return (
      <div className="pt-30 pb-10 text-center space-y-4">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed
          <br /> to boost your productivity and creativity.
        </p>
        <div className="items-center border border-gray-200 inline-block p-1 rounded-full">
          <button
            onClick={() => setTab("products")}
            className={`px-6 py-3.5 font-bold rounded-full ${tab === "products" ? "text-white bg-linear-to-r from-[#622EF7] to-[#9216FA]" : " text-[#25065d] bg-white"}`}
          >
            Products
          </button>
          <button
            onClick={() => setTab("cart")}
            className={`px-6 py-3.5 font-bold rounded-full ${tab === "cart" ? "text-white bg-linear-to-r from-[#622EF7] to-[#9216FA]" : " text-[#25065d] bg-white"}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>
    );
};

export default Tab;