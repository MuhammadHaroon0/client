import React from "react";
import side from "../resources/png.png";
const Hero = () => {
  return (
    <div>
      <section className="my-3">
        <div className="flex flex-col-reverse md:flex-row p-6 mx-auto content-center justify-center">
          <div className="flex flex-col content-center justify-center p-6 md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="font-bold text-4xl">
            One-on-one Online Coding Lessons on Zoom for Children of age 4-14 
Scratch Jnr | Scratch 3.0 | HTML | CSS | PYTHON
            </h3>
            <p>
            As a coding tutor, I am passionate about inspiring kids to explore the world of programming and technology. Whether it's through game development, app creation, website design or robotics, I love to see my student's eyes light up as they discover their own unique interests and talents in the world of coding. By tailoring my lessons to each student's learning style and pace, I create a fun and engaging learning environment that fosters creativity and critical thinking. I use presentations, fun activities, and animations for teaching to engage students.
            </p>
            <div className="">
              <a className="rounded-full justify-center items-center bg-[#5A5A5A] text-[#FFFFFF] md:p-1 md:px-2 px-2 p-2 hover:bg-red-500"
              href="https://www.fiverr.com/tech_rise"
              target="_blank">
                Get Started
              </a>
            </div>
          </div>
          <div className="flex flex-col h-2/3 content-center justify-center p-6 md:w-1/2">
            <img src={side} className="h-2/3" alt="" />
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Hero;
