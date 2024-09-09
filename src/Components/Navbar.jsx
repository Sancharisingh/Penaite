import React from "react";

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between w-full p-20'>
      <div className="text-3xl " style={{ fontFamily: 'Nunito' }}>Penaite</div>
        <div className="link  uppercase font-semibold flex gap-5">
          {["Home", "Blogs", "Contact", "About Us"].map((item, index) => (
            <a key={index} className="hover:text-[#673ab6] transition-colors duration-1000" href="#">{item}</a>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
