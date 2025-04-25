

import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import Banner from './../Header/Banner';
import OurFacilities from '../HomPageShow/OurFacilities';
import Memory from '../HomPageShow/Memory';
import Map from '../HomPageShow/Map';
import ReviewShort from '../HomPageShow/ReviewShort';
import HomePage from '../HomPageShow/HomePage';
import Video from '../HomPageShow/Video';





const Home = () => {

    return (
        <div>
       <Banner></Banner>
       <OurFacilities></OurFacilities>
   
    <Outlet></Outlet>
     
       <Memory></Memory>
      
      <div className='lg:flex lg:gap-5 container mx-auto'>
      <Map></Map>
   <Video></Video>
      </div>
      <ReviewShort></ReviewShort>
       <HomePage></HomePage>

        </div>
    );
};

export default Home;