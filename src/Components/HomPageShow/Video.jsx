import React from "react";
import roomVideo from "../../assets/Green Yellow and White Travel Vlog YouTube Thumbnail.mp4";
import SectionTitle from "../sheard/SectionTitle";
const Video = () => {
  return (
<div className="w-1/2 mt-10  ">
    
   <SectionTitle subheading="Explore Our Luxurious Rooms"></SectionTitle>
   <p className="text-center mb-4">Experience comfort and elegance</p>
<div className="relative border border-primary  h-[500px] flex justify-center items-center p-5 rounded-xl">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover rounded-lg shadow-lg "
        autoPlay
        loop
        muted
      >
        <source
          src={roomVideo} 
          type="video/mp4"
        />
      </video>

      
    
       
      
     
    </div>
</div>

    
  );
};

export default Video;