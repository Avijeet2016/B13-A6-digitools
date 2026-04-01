import React from 'react';
import bannerImg from '../assets/banner.png';
import { Triangle } from "lucide-react";

const Banner = () => {
    return (
      <div className="flex flex-col-reverse max-w-300 mx-auto py-15 md:flex-row md:justify-between md:items-center gap-15">
        <div className="space-y-8">
          <div className='flex justify-center items-center md:justify-start'>
            <div className="flex justify-center  items-center w-100  bg-[#E1E7FF] text-center lg:text-left px-3 py-1 rounded-full">
              <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent font-bold rounded-full">
                <i className="fa-regular fa-circle-dot text-transparent bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text"></i>
                &nbsp; New: AI-Powered Tools Available
              </span>
            </div>
          </div>

          <h1 className="text-center text-2xl md:text-start font-bold lg:text-6xl">
            Supercharge Your
            <br /> Digital Workflow
          </h1>
          <p className="text-[#627382] text-center md:text-left">
            Access premium AI tools, design assets, templates, and productivity
            <br />
            software—all in one place. Start creating faster today.
            <br /> Explore Products
          </p>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <button className="bg-linear-to-r from-[#622EF7] to-[#9216FA] rounded-full px-4 py-3 text-white font-bold">
              Explore Products
            </button>
            <button className=" bg-linear-to-r from-[#622EF7] to-[#9216FA]  rounded-full p-[1px]">
              <span className="flex items-center gap-1 bg-white rounded-full px-3 py-3 ">
                <>
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient
                        id="gradTriangle"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#622EF7" />
                        <stop offset="100%" stopColor="#9216FA" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Icon */}
                  <Triangle
                    className="rotate-90"
                    style={{ stroke: "url(#gradTriangle)" }}
                  />
                </>
                <span className="font-bold text-transparent bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text">
                  Watch Demo
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className='mx-auto md:mx-0'>
          <img src={bannerImg} alt="banner image"/>
        </div>
      </div>
    );
};

export default Banner;