import React from 'react';

const Map = () => {
    return (
        <div className="p-4">
          
            <address className="text-center text-lg font-semibold mb-4">
            <p className='text-3xl font-bold mb-5 '>Location</p> 11-12 North-South Road, Old Dhaka, Bangladesh
            </address>
            <div className="w-full h-[450px]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116856.72824128186!2d90.27130909726559!3d23.755481600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9f6053ce88f%3A0x97109e168f08e069!2z4KaX4KeN4Kaw4KeN4Kav4Ka-4Kao4KeN4KahIOCmquCnjeCmr-CmvuCmsuCnh-CmuA!5e0!3m2!1sbn!2sbd!4v1735035095279!5m2!1sbn!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{ border: "none" }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;
