import React from 'react';

const Transform = () => {
    return (
      <div className="py-30 text-center bg-linear-to-r from-[#622EF7] to-[#9216FA]">
        <h1 className="text-[40px] font-bold text-white mb-4">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-white mb-10">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br /> Start your free trial today.
        </p>
        <div className="flex justify-center items-center gap-4 mb-4">
          <button className="bg-white rounded-full px-4 py-3">
            <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent font-bold">
              Explore Products
            </span>
          </button>
          <button className='outline outline-white text-white px-8 py-3 rounded-full'>View Pricing</button>
        </div>
        <p className="text-white">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    );
};

export default Transform;