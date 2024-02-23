import React from 'react'
import AddIcon from "@mui/icons-material/Add";
// import SearchIcon from '@mui/icons-material/Search';

const SideMenu = () => {
  return (
    <>
      <div className='grid-cols-2 h-[35rem] pl-10'>
        <div className='flex my-5'>
          <AddIcon />
          <div className="">
            <a href='/newDream'>New Dream</a>
          </div>
        </div>
        {/* <div className='flex'>
          <SearchIcon />
            <div>
              <a href="">Search</a>
            </div>
        </div> */}
      </div>
    </>
  );
};

export default SideMenu
