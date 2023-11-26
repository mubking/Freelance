import React from 'react'

function Settings() {
  return (
    <div className='flex items-center justify-center font-[Poppins]'>
        <div className='flex flex-col lg:w-[40%] sm: w-[80%]'>            
            <h5 className='sm: mt-[40%] lg:mt-[10%] text-center'>Let’s help you achieve your aim</h5>
            <form className='flex flex-col mt-16 gap-8 '>
                <div className='flex flex-col'>
                    <label htmlFor="">Old Password <span className='text-[red] '>*</span></label>
                    <input className='border py-3 rounded-[20px] border-b-slate-950 text-center outline-none bg-gray-100' type="text" placeholder='***********' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">New Password <span className='text-[red] '>*</span></label>
                    <input className='border py-3 rounded-[20px] border-b-slate-950 text-center outline-none bg-gray-100' type="text" placeholder='***********' />
                </div>
                <button className='rounded-[5px] mt-[9%] lg:w-[25%] lg:ml-[75%] sm: ml-[60%] sm: w-[40%] bg-black text-white font-bold py-2'>Update</button>
            </form>

        </div>
    </div>
  )
}

export default Settings