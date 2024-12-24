import React from 'react';
import Theme from './Theme';

const Navbar2 = () => {
    return (
        <div className='bg-[#af9556]'>
          
                {/* Contact and Address */}
                <div className="flex flex-row  lg:gap-4  items-center mx-auto container lg:ml-96 ">
                    <p className="text-sm ">
                        CALL NOW: <span className="font-bold">+1900 887 869</span>
                    </p>
                    <p className="text-sm">11-12 North-South Road, Old Dhaka, Bangladesh</p>
                      {/* Language Selector */}
                <div className="flex items-center gap-4">
                    <p className="text-sm">LNG</p>
                    <select
                        className="bg-[#af9556] h-10 border border-[#af9556] px-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#af9556]"
                        aria-label="Language Selector"
                    >
                        <option>English</option>
                        <option>Bangla</option>
                    </select>
                    <Theme></Theme>
                </div>

                </div>
        </div>
    );
};

export default Navbar2;