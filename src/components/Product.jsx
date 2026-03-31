import React, { useState } from 'react';
import Features from './Features';

const Product = ({product, cart, setCart}) => {
    
    const {id, name, description, price, period, tag, features, icon} = product;
    const [isBought, setIsBought] = useState(false);

    const tagStyle = {
      popular: "bg-[#E1E7FF] rounded-full px-3 py-1.5",
      new: "bg-[#DAFBE6] text-[#0A8A54] rounded-full px-3 py-1.5",
      "best seller": "bg-[#FEF3C6] text-[#BB4D00] rounded-full px-3 py-1.5",
    };

    const handleBuy = (product) => {
        setIsBought(true);
        console.log(product);
        setCart([...cart, product]);
        
    } 
    
    return (
      <div className="bg-[#FFFFFF] shadow-sm rounded-2xl border border-zinc-200 p-6 relative">
        {/* <span className="bg-[#E1E7FF] rounded-full px-3 py-1.5">
          <button
            className={`px-3 py-1.5 rounded-full font-medium bg-[#E1E7FF] ${tagStyle[tag]}`}
          >
            {tag}
          </button>
        </span> */}

        <div className="absolute right-2.5 top-4">
          <span className={tagStyle[tag]}>
            {tag === "popular" ? (
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}
              </span>
            ) : (
              tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
            )}
          </span>
        </div>

        <div className="space-y-4 mb-4">
          <img
            src={icon}
            alt=""
            className="w-15 h-15 p-2 rounded-full border border-zinc-200"
          />
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="line-clamp-2 text-[#627382]">{description}</p>
          <div className="flex items-end">
            <h3 className="font-bold text-2xl">${price}</h3>
            <span className="text-[#627382]">/{period}</span>
          </div>
        </div>
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}

        <button
          onClick={() => handleBuy(product)}
          className={`rounded-full w-full mt-4 px-4 py-3 font-bold text-white ${isBought ? "bg-green-500" : "bg-linear-to-r from-[#622EF7] to-[#9216FA]"}`}
        >
          {isBought ? (
            <>
              <i className="fa-solid fa-check mr-2"></i> Added to Cart
            </>
          ) : (
            "Buy Now"
          )}
        </button>
      </div>
    );
};

export default Product;