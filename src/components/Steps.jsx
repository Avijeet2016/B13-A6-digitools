import React from 'react';
import userImg from '../assets/user.png';
import productImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png';

const Steps = () => {
    return (
      <div className="bg-[#f9fafc]">
        <div className="max-w-300 mx-auto py-30 ">
          <div className="flex flex-col items-center  mb-10">
            <h1 className="font-bold text-5xl mb-4">Get Started in 3 Steps</h1>
            <p className="text-[#627382]">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>
          <div className="flex justify-between items-center gap-7">
            {/* card-1  */}
            <div className="flex flex-col justify-center items-center gap-4 border border-zinc-200 rounded-2xl shadow-xs px-6 py-15 bg-[#ffffff] relative">
              <button className="bg-linear-to-r from-[#622EF7] to-[#9216FA] text-white font-bold px-3 py-2 rounded-full absolute right-5 top-5">
                01
              </button>
              <div className="bg-[#F0E9FE] p-6 rounded-full">
                <img src={userImg} alt="User Image" />
              </div>
              <h3 className="text-2xl font-bold">Create Account</h3>
              <p className="text-[#627382] text-center">
                Sign up for free in seconds. No credit card
                <br /> required to get started.
              </p>
            </div>
            {/* card-2  */}
            <div className="flex flex-col justify-center items-center gap-4 border border-zinc-200 rounded-2xl shadow-xs px-6 py-15 bg-[#ffffff] relative">
              <button className="bg-linear-to-r from-[#622EF7] to-[#9216FA] text-white font-bold px-3 py-2 rounded-full absolute right-5 top-5">
                02
              </button>
              <div className="bg-[#F0E9FE] p-6 rounded-full">
                <img src={productImg} alt="Product Image" />
              </div>
              <h3 className="text-2xl font-bold">Choose Products</h3>
              <p className="text-[#627382] text-center">
                Browse our catalog and select the tools
                <br /> that fit your needs.
              </p>
            </div>
            {/* card-3  */}
            <div className="flex flex-col justify-center items-center gap-4 border border-zinc-200 rounded-2xl shadow-xs px-6 py-15 bg-[#ffffff] relative">
              <button className="bg-linear-to-r from-[#622EF7] to-[#9216FA] text-white font-bold px-3 py-2 rounded-full absolute right-5 top-5">
                03
              </button>
              <div className="bg-[#F0E9FE] p-6 rounded-full">
                <img src={rocketImg} alt="Rocket Image" />
              </div>
              <h3 className="text-2xl font-bold">Start Creating</h3>
              <p className="text-[#627382] text-center">
                Download and start using your premium
                <br /> tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Steps;