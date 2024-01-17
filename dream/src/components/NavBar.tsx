import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
      <div className="border-b border-b-fuschia text-[color:teal] flex justify-between items-center h-[3rem] font-roboto text-2xl px-10">
        <div>
          <Link to="/">Home</Link>
        </div>
        <h1 className="">Dream</h1>
      </div>
    </>
  );
};

export default NavBar
