import React,  { useState } from 'react'

const Assignment2 = () => {
  const [button, setButton] = useState(false);
  return (
   <div className="flex justify-center items-center w-full h-screen flex-col">
      {button ? (
        <>
          <button
            className="bg-amber-50 h-10 w-20 border-2 mt-4"
            onClick={() => setButton(false)}
          >
            off
          </button>
          <div className="bg-black bg-black-600 h-300 w-200"></div>
        </>
      ) : (
        <>
         
          <button
            className="bg-amber-50 h-10 w-20 border-2 mt-4"
            onClick={() => setButton(true)}
          >
            On
          </button>
          <div className="bg-pink-200 h-300 w-200"></div>
        </>
      )}
    </div>
  );
};

export default Assignment2;
