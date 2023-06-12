import React from "react";

const QA = () => {
  return (
    <div>
      <section className="my-4">
        <div className="flex flex-col-reverse content-center justify-center p-6 mx-auto md:flex-row space-x-6">
          <div className="flex flex-col text-center md:text-left md:w-1/2 space-y-6 p-6">
            <h1 className="font-bold text-4xl">What's different about me?</h1>
            <p>
            ~ Extensive experience in teaching coding to kids Worldwide
            <br />
~ Free trial lessons
            </p>
          </div>
          <div className="flex flex-col justify-start content-center space-y-4 md:w-1/2">
          <div className="flex flex-row rounded-full">
              <div className="rounded-full p-2 px-5 text-center h-10 justify-center bg-red-500 text-white">
                1
              </div>
              <div className="flex flex-col md:w-2/3 ">

              <div className="space-y-3 p-2">
                <div>

                Scratch Jnr/ Scratch 3.0 CODING:

                </div>
                <div>
                    
              <p>
              After taking scratch lessons kids will learn game development, stories creation, animations and much more. 
              </p>
                </div>
              </div>
            </div>
              </div>


            <div className="flex flex-row rounded-full">
              <div className="rounded-full p-2 px-5 text-center h-10 justify-center bg-red-500 text-white">
                2
              </div>
              <div className="flex flex-col md:w-2/3">

              <div className="space-y-3 p-2">
                <div>

                HTML/CSS
                </div>
                <div>
                    
              <p>
              Kids will learn website and web pages development and their styling after taking HTML and CSS lessons.
              </p>
                </div>
              </div>
            </div>
              </div>


              <div className="flex flex-row rounded-full">
              <div className="rounded-full p-2 px-5 text-center h-10 justify-center bg-red-500 text-white">
                3
              </div>
              <div className="flex flex-col md:w-2/3">

              <div className="space-y-3 p-2">
                <div>

                Python
                </div>
                <div>
                    
              <p>
              Kids will learn Robotics, software development, website design and much more in Python lessons.
              </p>
                </div>
              </div>
            </div>
              </div>
          </div>

          

          
        </div>
      </section>
    </div>
  );
};

export default QA;
