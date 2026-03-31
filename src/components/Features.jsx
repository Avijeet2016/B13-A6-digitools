import React from 'react';

const Features = ({ feature }) => {
  return (
    <div>
      <ul className="text-[#627382] font-medium flex items-center gap-2">
        <i className="fa-solid fa-check text-[#30b868]"></i>
        <li>{feature}</li>
      </ul>
    </div>
  );
};

export default Features;