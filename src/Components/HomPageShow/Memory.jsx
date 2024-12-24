import React from 'react';

const Memory = () => {
    const images = [
        {
            src: "https://i.ibb.co.com/L8BYKSX/Morton-Arboretum-Wedding-0102.jpg",
            colSpan: "col-span-1",
            rowSpan: "row-span-1",
        },
        {
            src: "https://i.ibb.co.com/RGFfDSh/images-2.jpg",
            colSpan: "col-span-2",
            rowSpan: "row-span-1",
        },
        {
            src: "https://i.ibb.co.com/dmQ7G60/istockphoto-2159024494-612x612.jpg",
            colSpan: "col-span-",
            rowSpan: "row-span-1",
        },
        {
            src: "https://i.ibb.co.com/TMHJZwY/istockphoto-1146023235-612x612.jpg",
            colSpan: "col-span-2",
            rowSpan: "row-span-2",
        },
        {
            src: "https://i.ibb.co.com/WtGZ1gx/lovepik-rest-for-business-men-in-hotel-rooms-picture-501117371.jpg",
            colSpan: "col-span-2",
            rowSpan: "row-span-2",
        },
        
    ];

    return (
        <div className="container mx-auto my-10 px-4">
            <h1 className="text-center text-4xl font-bold mb-8 text-[#af9556]">Memorable Moments</h1>
            <div className="grid grid-cols-4  gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-lg shadow-lg group border border-[#af9556] ${image.colSpan} ${image.rowSpan}`}
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
