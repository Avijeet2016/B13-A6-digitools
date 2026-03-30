import React from 'react';

const Tab = () => {
    return (
      <div className="pt-30 pb-10 text-center space-y-4">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed
          <br /> to boost your productivity and creativity.
        </p>
        <div className="items-center border border-gray-200 inline-block p-1 rounded-full">
          <button className="px-6 py-3.5 text-white font-bold bg-linear-to-r from-[#622EF7] to-[#9216FA] rounded-full">
            Products
          </button>
          <button className="px-6 py-3.5 text-[#25065d] font-bold">
            Cart (2)
          </button>
        </div>
      </div>
    );
};

export default Tab;