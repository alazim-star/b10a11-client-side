import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
       
               
 

        <motion.div>
            
          
            {/* Button with hover effect */}
            <motion.button
                whileHover={{ scale: 1.1 }} // Scale up on hover
                whileTap={{ scale: 0.9 }} // Scale down on click
                className="mt-6 px-8 py-3 text-white bg-blue-600 rounded-full"
            >
                Book Now
            </motion.button>
        </motion.div>
    );
};

export default HomePage;
