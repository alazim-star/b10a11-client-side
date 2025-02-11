import React from 'react';
import { BiBowlHot } from 'react-icons/bi';
import { FaHotel, FaWifi } from "react-icons/fa";
import { GiBalloons } from 'react-icons/gi';
import { IoIosRestaurant } from 'react-icons/io';
import SectionTitle from '../sheard/SectionTitle';

const OurFacilities = () => {
    return (
    <div className='mt-10 mb-10'>
      
      <SectionTitle subheading="FACILITIES"  heading=' OUR'></SectionTitle>
            <div className="mt-10 container mx-auto grid lg:grid-cols-5 gap-5">
        
            {/* ROOM Facility */}
            <div className="flex flex-col border border-[#af9556] p-5 rounded-xl items-center max-w-xs ">
                <FaHotel className="w-20 h-20 mb-5 text-[#af9556]" />
                <p className="font-semibold text-2xl">ROOM</p>
                <p className="mt-4 ">
                    Enjoy our spacious and elegantly designed rooms, perfect for relaxation with premium bedding and modern amenities to make your stay unforgettable.
                </p>
            </div>

            {/* RESTAURANT Facility */}
            <div className="flex flex-col border border-[#af9556] p-5 rounded-xl items-center max-w-xs ">
                <IoIosRestaurant className="w-20 h-20 mb-5 text-[#af9556]" />
                <p className="font-semibold text-2xl">RESTAURANT</p>
                <p className="mt-4 ">
                    Savor delicious cuisines crafted by our expert chefs, offering a blend of local and international flavors in an elegant dining setting.
                </p>
            </div>

            {/* SPA Facility */}
            <div className="flex flex-col border border-[#af9556] p-5 rounded-xl items-center max-w-xs ">
                <BiBowlHot className="w-20 h-20 mb-5 text-[#af9556]" />
                <p className="font-semibold text-2xl">SPA</p>
                <p className="mt-4 ">
                    Rejuvenate your senses with our luxurious spa treatments, featuring massages, facials, and wellness therapies in a serene atmosphere.
                </p>
            </div>

            {/* FREE WIFI Facility */}
            <div className="flex flex-col border border-[#af9556] p-5 rounded-xl items-center max-w-xs ">
                <FaWifi className="w-20 h-20 mb-5 text-[#af9556]" />
                <p className="font-semibold text-2xl">FREE WIFI</p>
                <p className="mt-4 ">
                    Stay connected with high-speed internet available throughout our property, ensuring you never miss a moment online.
                </p>
            </div>

            {/* WEDDINGS Facility */}
            <div className="flex flex-col border border-[#af9556] p-5 rounded-xl items-center max-w-xs ">
                <GiBalloons className="w-20 h-20 mb-5 text-[#af9556]" />
                <p className="font-semibold text-2xl">WEDDINGS</p>
                <p className="mt-4 ">
                    Celebrate your special day in our stunning venues, with dedicated wedding planning services to make your dream event a reality.
                </p>
            </div>
        </div>
    </div>
    );
};

export default OurFacilities;
