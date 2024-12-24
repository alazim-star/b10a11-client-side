import React from 'react';
import logo from '../../assets/1.png'
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  
   
  return (
  
        <footer className="bg-[#151515] text-white py-5 ">
          <div className="container mx-auto  grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
                <img className='w-32 h-32' src={logo} alt="" />
              <h2 className="text-2xl font-bold mb-4">THE GRAND PALACE</h2>
              <p className="text-gray-400 mb-4">
                Rapidiously myocardinate crossing the hotella model. Appropriately create interesting area holistically facilitate place done.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <i className="fas fa-phone text-yellow-400"></i>
                <span>+980 (1234) 567 220</span>
              </div>
              <div className="flex space-x-4 ">
           <a className='text-[#af9556] text-2xl'  href=""><FaFacebook /></a>
           <a className='text-[#af9556] text-2xl'  href=""><FaInstagramSquare /></a>
           <a className='text-[#af9556] text-2xl'  href=""><FaTwitter /></a>
           <a className='text-[#af9556] text-2xl'  href=""><FaYoutube /></a>
       
              </div>
            </div>
    
            {/* Useful Links */}
            <div className='mt-32'>
              <h4 className="text-lg font-semibold mb-4">USEFUL LINKS</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Hotel</li>
                <li>Rooms & Sui</li>
                <li>Reservation</li>
                <li>News & Blog</li>
                <li>Contact</li>
              </ul>
            </div>
    
            {/* Gallery */}
            <div className='mt-32'>
              <h4 className="text-lg font-semibold mb-4">GALLERY</h4>
              <div className="grid grid-cols-3 gap-2">
                <img src="https://i.ibb.co.com/GC1s1Tx/istockphoto-1732983887-612x612.jpg" alt="Gallery 1" className="w-full  rounded-md" />
                <img src="https://i.ibb.co.com/QNpQkwP/istockphoto-1418784247-612x612.jpg" alt="Gallery 2" className="w-full h-full rounded-md" />
                <img src="https://i.ibb.co.com/y4KRBnV/istockphoto-1815808691-612x612.jpg" alt="Gallery 3" className="w-full h-full rounded-md" />
                <img src="https://i.ibb.co.com/bzBk174/istockphoto-1677784097-612x612.jpg" alt="Gallery 4" className="w-full h-auto rounded-md" />
                <img src="https://i.ibb.co.com/qjV7tT4/istockphoto-1390233984-612x612.jpg" alt="Gallery 5" className="w-full h-auto rounded-md" />
                <img src="https://i.ibb.co.com/M9wYknb/istockphoto-1318363878-612x612.jpg" alt="Gallery 6" className="w-full h-auto rounded-md" />
              </div>
            </div>
    
            {/* Newsletter */}
            <div className='mt-32'>
              <h4 className="text-lg font-semibold mb-4">NEWSLETTER</h4>
              <p className="text-gray-400 mb-4">Subscribe to our Newsletter</p>
              <div>
                {/* Replace with your newsletter form */}
                <form>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 bg-gray-800 text-gray-400 rounded-md mb-4"
                  />
                  <button
                    type="submit"
                    className="bg-[#af9556] text-white px-4 py-2 rounded-md hover:bg-blue-500"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
    
          {/* Bottom Section */}
          <div className=" mb-20 border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2024,<span className='text-[#af9556]'> THE GRAND PALACE</span> All Rights Reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
             <p> Privacy Police</p>
          <p>    Terms & Condition</p>
            </div>
          </div>
        </footer>
      );
};

export default Footer;

    


