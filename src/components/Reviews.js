import React from "react";
import one from '../resources/1.jpeg';
import two from '../resources/2.jpeg';
import three from '../resources/3.jpeg';

const Reviews = () => {
  return (
      <div className="container flex flex-col content-center justify-center p-4 mx-auto my-6 space-y-6">
        <div className="text-center">
          <h1 className="font-bold text-4xl mb-14">What their parents have said</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:space-y-0 space-y-10 md:space-x-6">

            <div className="flex flex-col text-center items-center justify-center p-4 bg-[#e0e0e0] space-y-4 md:w-1/3">
            <img src={two} className="rounded-full -mt-10 h-12 w-12" alt="one" />
              <h1 className="font-bold">Afeef</h1>
              <p>
              While I think the class was a bit dry for my 10 year old son (he enjoys a little more of a high energy personality teacher-wise).
                </p>
            </div>
          

        {/*  */}

        <div className="flex flex-col text-center items-center justify-center p-4 bg-[#e0e0e0] space-y-4 md:w-1/3">
            <img src={one} className="rounded-full -mt-10 h-12 w-12" alt="one" />
              <h1 className="font-bold">Anthony</h1>
              <p>
               She is very patient and has a passion for teaching young children. Both my boys ages 6 and 7 enjoy learning with her. Thank you Hifza!
                </p>
            </div>
          


        {/*  */}

        <div className="hidden md:flex flex-col text-center items-center justify-center p-4 bg-[#e0e0e0] space-y-4 md:w-1/3">
            <img src={three} className="rounded-full -mt-10 h-12 w-12" alt="one" />
              <h1 className="font-bold">Nadia</h1>
              <p>
              An excellent teacher and teaching method. She is also very kind. My daughter is enjoying every lesson and looking forward to next one
                </p>
            </div>
          
      </div>
      </div>

  );
};

export default Reviews;
