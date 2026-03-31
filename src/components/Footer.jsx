import React from 'react';

const Footer = () => {
    return (
      <div className="bg-black">
        <div className="max-w-300 mx-auto pt-30 pb-5">
          <div className="flex justify-between items-start mb-20 text-white">
            <div className=" space-y-4">
              <h1 className="text-3xl font-bold ">DigiTools</h1>
              <p className="">
                Premium digital tools for creators,
                <br /> professionals, and businesses. Work smarter
                <br /> with our suite of powerful tools.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Product</h3>
              <ul className="space-y-4">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Company</h3>
              <ul className="space-y-4">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Resources</h3>
              <ul className="space-y-4">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Social Links</h3>
              <div className="flex justify-center items-center gap-3">
                <button className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                  <i className="fa-brands fa-instagram text-black text-xl"></i>
                </button>

                <button className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                  <i className="fa-brands fa-square-facebook text-black text-xl"></i>
                </button>
                <button className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                  <i className="fa-brands fa-x-twitter text-black text-xl"></i>
                </button>
              </div>
            </div>
          </div>
          <hr className="border-t-[0.5px] border-gray-700 mb-4" />
          <div className="flex justify-between items-center text-[#7F838A]">
            <p className="">©2026 DigiTools. All rights reserved.</p>
            <div>
              <ul className="flex justify-center items-center gap-10">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;