import React from 'react'

const CreatePoem = () => {
  return (
    <div className='flex flex-col '>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-center text-[#191919] text-4xl '>Create a Poem</h1>
            <p className='text-[#606F7B] text-center'>Craft your piece to capture your audience</p>
        </div>

        
        <div className='flex items-center justify-center mt-4 mb-4'>
            
           <form>
            <input 
            type="text"
            placeholder='Enter Your Poem Title Here'
            className='flex justify-center font-medium border border-[#1A8917] text-[#257F4B] bg-[#EDFAF2] px-12 py-3 rounded-full'
             />
             <input 
             type="text"
             placeholder='Enter Your Body Here'
             className='flex justify-center font-medium text-[#257F4B] border border-[#1A8917] rounded-2xl py-10 px-12 mt-4 mb-4'
              />

              
              <div className='flex flex-wrap gap-4 justify-center'>
                <button className=' font-semibold py-2 px-5 bg-[#F2F2F2] rounded-full hover:bg-[#349732] text-[#292929]'>
                    Romance
                </button>
                <button className='font-semibold py-2 px-5 bg-[#F2F2F2] rounded-full hover:bg-[#349732] text-[#292929]'>
                   African
                </button>
                <button className='font-semibold py-2 px-5 bg-[#F2F2F2] rounded-full hover:bg-[#349732] text-[#292929]'>
                    Power
                </button>
                <button className='font-semibold py-2 px-5 bg-[#F2F2F2] rounded-full hover:bg-[#349732] text-[#292929]'>
                    Adventure
                </button>
                <button className='font-semibold py-2 px-5 bg-[#F2F2F2] rounded-full hover:bg-[#349732] text-[#292929]'>
                    Art
                </button>
                <button className='font-semibold py-2 px-5 bg-[#F2F2F2] rounded-full hover:bg-[#349732] text-[#292929]'>
                    Mindfulness
                </button>
                <button className='font-semibold py-2 px-5 bg-[#F2F2F2] rounded-full hover:bg-[#349732] text-[#292929]'>
                    Yada yada
                </button>
              </div>
              <div className='flex flex-wrap justify-center gap-4 mt-12'>
              <button className='font-semibold py-2 px-11 bg-[#F2F2F2] rounded-full text-[#044AB1] border border-[#044AB1] transform transition duration-150 ease-in-out hover:scale-110'>
                    Cancel
                </button>
                <button className='font-semibold py-2 px-11 bg-[#044AB1] rounded-full transform transition duration-150 ease-in-out hover:scale-110 text-[#FFFFFF]'>
                    Done
                </button>
              </div>
           </form>
        </div>
    </div>
  );
};

export default CreatePoem;