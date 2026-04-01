import React, { useState } from 'react';
import cartImg from '../assets/products/shopping-cart.png';
import { Menu, X } from 'lucide-react';

const Navbar = ({cart}) => {
  const [open, setOpen] = useState(false);
  console.log(open);
    return (
      <div className="shadow-sm sticky top-0 bg-white z-50">
        <div className="max-w-300 mx-auto flex justify-between items-center py-6">
          <div className="p-4 lg:p-0 relative">
            <div className="flex gap-1 items-center">
              <div onClick={() => setOpen(!open)}>
                {open ? <X></X> : <Menu className="lg:hidden" />}
              </div>
              {/* Logo: DigiTools */}
              <div className="text-3xl font-bold">
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
              </div>
            </div>
            <div>
              <ul
                className={`lg:hidden px-10 mx-5 py-3 font-bold text-lg border-b-2 bg-gray-400 rounded-lg absolute ${open ? "top-15  " : "-top-70"} duration-1000`}
                
              >
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="hidden lg:flex items-center gap-8 font-semibold">
              <li>Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative">
              <span className="px-1.5 py-0.1 bg-red-500 text-white rounded-full absolute -top-5">
                {cart.length ? cart.length : ""}
              </span>
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