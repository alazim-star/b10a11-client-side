import React from 'react';

const SectionTitle = ({ heading,subheading}) => {
  return (
    <div className="text-center mx-auto uppercase">
      {/* Heading */}
      <h2 className="text-center text-4xl mt-5 mb-5">
      <span className="mr-5">{heading}</span>
        <span className="text-[#af9556]">{subheading}</span>
        
      </h2>
    </div>
  );
};

export default SectionTitle;
