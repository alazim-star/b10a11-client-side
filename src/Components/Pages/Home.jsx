

import { Outlet } from 'react-router-dom';
import Banner from './../Header/Banner';
import OurFacilities from '../HomPageShow/OurFacilities';
import Memory from '../HomPageShow/Memory';
import Map from '../HomPageShow/Map';




const Home = () => {
    return (
        <div>
       <Banner></Banner>
       <OurFacilities></OurFacilities>
       <Map></Map>
       <Outlet></Outlet>
       <Memory></Memory>

        </div>
    );
};

export default Home;