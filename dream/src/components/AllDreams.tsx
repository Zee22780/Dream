import React from 'react'

const AllDreams = () => {
  const dreams = JSON.parse(localStorage.getItem("dreamList") || '{}')

  console.log("dream list", dreams)

  interface Dream {
  id: number;
  date: string;
  dream_details: string
}


  return (
    <>
      <div className='w-[70rem] h-[35rem] flex flex-col'>
        
          <div className='my-5 w-[70rem] flex justify-center'>
            <h1 className='text-[24px] text-teal'>All Dreams</h1>
          </div>
          <div className='flex h-[25rem] justify-center space-x-10'> 
                {dreams.reverse().map((dream: Dream) => (
                  <div className='border-2 px-2 border-fuschia rounded justify-center items-center mb-2 flex flex-col w-[150px] h-[150px] shadow-xl'>
                    <div>{dream.dream_details.slice(0,20)}</div>
                    <div className='text-[8px]'>{dream.date}</div>
                  </div>
                ))}
          </div>
        </div>
    </>
  );
};

export default AllDreams
