import React from 'react';

const Stats = () => {
    return (
      <div className="flex justify-center items-center gap-30 py-15 bg-linear-to-r from-[#622EF7] to-[#9216FA]">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">50K+</h2>
          <p className="text-white">Active Users</p>
        </div>
        <div className="w-0.5 h-12 bg-gray-300"></div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">200+</h2>
          <p className="text-white">Premium Tools</p>
        </div>
        <div className="w-0.5 h-12 bg-gray-300"></div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">4.9</h2>
          <p className="text-white">Rating</p>
        </div>
      </div>
    );
};

export default Stats;