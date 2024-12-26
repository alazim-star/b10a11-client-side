

import { Outlet } from 'react-router-dom';
import Banner from './../Header/Banner';
import OurFacilities from '../HomPageShow/OurFacilities';
import Memory from '../HomPageShow/Memory';
import Map from '../HomPageShow/Map';
import ReviewShort from '../HomPageShow/ReviewShort';
import HomePage from '../HomPageShow/HomePage';




const Home = () => {
    return (
        <div>
       <Banner></Banner>
       <OurFacilities></OurFacilities>
       <Map></Map>
       <Outlet></Outlet>
       <Memory></Memory>
       <ReviewShort></ReviewShort>
       <HomePage></HomePage>

        </div>
    );
};

export default Home;