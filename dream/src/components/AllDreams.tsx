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
      <div>
        <h1>All Dreams</h1>
          {dreams.map((dream: Dream) => (
            <div className='flex flex-col'>
              {dream.date}
              {dream.dream_details}
            </div>
          ))}
      </div>
    </>
  );
};

export default AllDreams
