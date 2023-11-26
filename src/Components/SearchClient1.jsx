import React from 'react'

function SearchClient1() {
  return (
    <div className='flex items-center justify-center font-[Poppins]'>
        <div className='flex flex-col lg:w-[40%] sm: w-[80%]'>            
            <h5 className='sm: mt-[40%] lg:mt-[10%] text-[35px] text-center'>Let’s help you achieve your aim</h5>
            <form className='flex flex-col mt-16 gap-8 '>
                <div className='flex flex-col gap-2 font-bold'>
                    <label htmlFor="">Enter the industry keyword <span className='text-[red] '>*</span></label>
                    <input className='border py-3 rounded-[20px] border-[gray] text-center outline-none bg-gray-100' type="text" placeholder='E.g Neurosurgeon in Tanzania' />
                </div>
                <div className='flex flex-col gap-2 font-bold'>
                    <label htmlFor="">Enter country <span className='text-[red] '>*</span></label>
                    <input className='border py-3 rounded-[20px] border-[gray] text-center outline-none bg-gray-100' type="text" placeholder='E.g Tanzania' />
                </div>
                <button className='rounded-[5px] mt-[9%] lg:w-[25%] lg:ml-[75%] sm: ml-[60%] sm: w-[40%] bg-black text-white font-bold py-2'>Search</button>
            </form>

        </div>
    </div>
  )
}

export default SearchClient1