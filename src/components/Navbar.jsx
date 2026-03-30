import React from 'react';
import cartImg from '../assets/products/shopping-cart.png';

const Navbar = () => {
    return (
      <div className="shadow-sm sticky top-0">
        <div className="max-w-300 mx-auto flex justify-between items-center py-6">
          <div>
            {/* <h1 className='text-3xl font-bold'>DigiTools</h1> */}
            <h1 className="text-3xl font-bold">
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                D
              </span>
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                i
              </span>
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                g
              </span>
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                i
              </span>
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                T
              </span>
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                o
              </span>
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                o
              </span>
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                l
              </span>
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                s
              </span>
            </h1>
          </div>
          <div>
            <ul className="flex items-center gap-8 font-semibold">
              <li>Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <img src={cartImg} alt="Cart Image" />
            </button>
            <p className="font-semibold">Login</p>
            <button className="font-semibold text-white bg-linear-to-r from-[#622EF7] to-[#9216FA] rounded-full px-4 py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;