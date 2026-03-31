import React from 'react';

const Pricing = () => {
    return (
      <div className="max-w-300 mx-auto py-30">
        <div className="space-y-4 mb-10 text-center">
          <h1 className="text-5xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-7">
          {/* price card-1  */}
          <div className="bg-[#f9fafc] space-y-6 p-6 rounded-2xl shadow-sm">
            <div>
              <h2 className="font-bold text-2xl">Starter</h2>
              <p className="text-[#627382]">Perfect for getting started</p>
            </div>
            <div className="flex items-end">
              <h3 className="text-4xl font-bold">$0</h3>
              <p className="text-[#627382]">/Month</p>
            </div>
            <div>
              <ul>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i> Access to
                  10 free tools
                </li>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i> Basic
                  templates
                </li>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i> Community
                  support
                </li>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i> 1 project
                  per month
                </li>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i> Perfect
                  for getting started
                </li>
              </ul>
            </div>
            <div>
              <button className="bg-linear-to-r from-[#622EF7] to-[#9216FA] rounded-full w-full text-white font-bold py-2">
                Get Started Free
              </button>
            </div>
          </div>

          {/* price card-2  */}
          <div className="space-y-6 p-6 rounded-2xl shadow-sm bg-linear-to-r from-[#622EF7] to-[#9216FA] relative">
            {/* most popular  */}
            <button className="rounded-full bg-[#FEF3C6] text-[#BB4D00] py-1.5 px-3 text-sm font-semibold absolute left-33 -top-4">
              Most Popular
            </button>
            <div className="text-white">
              <h2 className="font-bold text-2xl">Pro</h2>
              <p className="">Best for professionals</p>
            </div>
            <div className="flex items-end text-white">
              <h3 className="text-4xl font-bold">$29</h3>
              <p className="">/Month</p>
            </div>
            <div>
              <ul className="text-white">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-white"></i> Access to all
                  premium tools
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-white"></i> Unlimited
                  templates
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-white"></i> Priority
                  support
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-white"></i> Cloud sync
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-white"></i> Advanced
                  analytics
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-white"></i> Perfect for
                  getting started
                </li>
              </ul>
            </div>
            <div>
              <button className="bg-white rounded-full w-full font-bold py-2">
                <span className="bg-linear-to-r from-[#622EF7] to-[#9216FA] bg-clip-text text-transparent">
                  Start Pro Trial
                </span>
              </button>
            </div>
          </div>

          {/* price card-3  */}
          <div className="bg-[#f9fafc] space-y-6 p-6 rounded-2xl shadow-sm">
            <div>
              <h2 className="font-bold text-2xl">Enterprise</h2>
              <p className="text-[#627382]">For teams and businesses</p>
            </div>
            <div className="flex items-end">
              <h3 className="text-4xl font-bold">$99</h3>
              <p className="text-[#627382]">/Month</p>
            </div>
            <div>
              <ul>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i>
                  Everything in Pro
                </li>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i> Team
                  collaboration
                </li>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i> Custom
                  integrations
                </li>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i> Dedicated
                  support
                </li>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i> SLA
                  guarantee
                </li>
                <li className="text-[#627382] flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#30b868]"></i> Custom
                  branding
                </li>
              </ul>
            </div>
            <div>
              <button className="bg-linear-to-r from-[#622EF7] to-[#9216FA] rounded-full w-full text-white font-bold py-2">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Pricing;