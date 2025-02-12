import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar1 from '../Header/Navbar1';
import Navbar2 from '../Header/Navbar2';

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar2 />
            <Navbar1 />
            {
                navigation.state === "loading" ? 
                <div className="flex justify-center items-center h-screen">
                    <div className="text-[#af9556] text-xl loading loading-dots loading-lg"></div>
                
                </div> :
                <Outlet />
            }
            <Footer />
        </div>
    );
};

export default MainLayout;
