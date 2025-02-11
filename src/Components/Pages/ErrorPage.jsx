import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
            <img className='cover mx-auto w-screen h-screen relative ' src="https://i.ibb.co.com/Lxqg5cF/mistake-3085712-1280.jpg" alt="" />
    <Link to='/'><button className='hover:bg-red-700 btn absolute top-[530px] bg-primary ml-[680px]'>Back To Home</button></Link>
      
        </div>
       

    );
};

export default ErrorPage;