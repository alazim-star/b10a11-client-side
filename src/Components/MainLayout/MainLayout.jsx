


import Footer from '../Footer/Footer';
import Navbar1 from '../Header/Navbar1';

import { Outlet } from 'react-router-dom';
import Navbar2 from '../Header/Navbar2';


const MainLayout = () => {
    return (
        <div>
        <Navbar2></Navbar2>
            <Navbar1></Navbar1>
            
            <Outlet></Outlet>
        
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;