import React from "react";
import a from "../resources/a.jpeg";
import b from "../resources/b.jpeg";
import c from "../resources/c.jpeg";
import d from "../resources/d.jpeg";

const Footer = () => {
  return (
    <section>
<div className="flex flex-col mx-auto text-center justify-center items-center p-6 md:space-y-6">
  <h1 className="text-4xl font-bold mb-4">My Student's Portfolio</h1>
<div className="flex md:flex-row h-1/2 flex-col justify-center items-center p-2 md:space-y-0 space-y-6 md:space-x-6">
  <img src={a} className="h-64 max-w-md border-solid border-black border-2	" alt="" />
  <img src={b} className="h-64 max-w-md border-solid border-black border-2	" alt="" />
</div>
<div className="flex md:flex-row h-1/2 flex-col justify-center items-center p-2 md:space-y-0 space-y-6 md:space-x-6">
  <img src={c} className="h-64 max-w-md border-solid border-black border-2	" alt="" />
  <img src={d} className="h-64 max-w-md border-solid border-black border-2	" alt="" />
</div>
</div>
    </section>
    
  );
};

export default Footer;
