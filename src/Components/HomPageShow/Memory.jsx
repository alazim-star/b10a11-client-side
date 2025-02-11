import React from 'react';
import SectionTitle from '../sheard/SectionTitle';

const Memory = () => {
    const images = [
        {
            src: "https://i.ibb.co.com/L8BYKSX/Morton-Arboretum-Wedding-0102.jpg",
            colSpan: "col-span-1",
            rowSpan: "row-span-1",
        },
        {
            src: "https://i.ibb.co.com/SwVRH4sx/DSC-1068-Copy-Copy-Copy-scaled.jpg",
            colSpan: "col-span-2",
            rowSpan: "row-span-1",
        },
        {
            src: "https://i.ibb.co.com/3y2312pr/What-Do-You-Wear-to-a-Hotel-Pool.jpg",
            colSpan: "col-span-",
            rowSpan: "row-span-1",
        },
        {
            src: "https://i.ibb.co.com/TMHJZwY/istockphoto-1146023235-612x612.jpg",
            colSpan: "col-span-2",
            rowSpan: "row-span-2",
        },
        {
            src: "https://i.ibb.co.com/rRvqLW1k/istockphoto-957245818-612x612.jpg",
            colSpan: "col-span-2",
            rowSpan: "row-span-2",
        },
        
    ];

    return (
        <div className="container mx-auto mt-10 mb-10">
           
        <div className='mb-10'>  <SectionTitle subheading='Moments'heading='Memorable'></SectionTitle></div>
            <div className="grid grid-cols-4  gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-xl shadow-lg group border border-[#af9556] ${image.colSpan} ${image.rowSpan}`}
                    >
                        <img
                            src={image.src}
                            alt={`Memory ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Memory;
