import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const HomePage = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.div>
            {/* Button with hover effect */}
            <motion.button
                whileHover={{ scale: 1.1 }} // Scale up on hover
                whileTap={{ scale: 0.9 }} // Scale down on click
                onClick={scrollToTop}
                className="mt-6 px-8 py-3 text-white bg-[#af9556] rounded-full flex items-center justify-center"
            >
                <FaArrowUp className="mr-2" />
                Go to Top
            </motion.button>
        </motion.div>
    );
};

export default HomePage;
