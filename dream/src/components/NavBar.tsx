import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
      <div className="border-b-2 text-teal text-[24px] flex justify-between items-center h-[3rem] font-roboto text-2xl px-10">
        <div>
          <Link to="/">Dream</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar
