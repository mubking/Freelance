import React from 'react'

function SearchClient2() {
  return (
    <div className='flex items-center justify-center font-[Poppins]'>
        <div className='flex flex-col lg:w-[40%] sm: w-[80%]'>            
            <h5 className='sm: mt-[40%] lg:mt-[10%] text-[35px] text-center'>Let’s help you achieve your aim</h5>
            <form className='flex flex-col mt-16 gap-8 '>
                <div className='flex flex-col gap-2 font-bold'>
                    <label htmlFor="">Enter the industry keyword <span className='text-[red] '>*</span></label>
                    <input className='border py-3 rounded-[20px] border-[gray] text-center outline-none bg-gray-100' type="text" placeholder='Restaurant company in Lagos' />
                </div>
                <div className='flex flex-col gap-2 font-bold'>
                    <label htmlFor="">Enter country <span className='text-[red] '>*</span></label>
                    <input className='border py-3 rounded-[20px] border-[gray] text-center outline-none bg-gray-100' type="text" placeholder='Nigeria' />
                </div>
                <button className='rounded-[5px] mt-[9%] lg:w-[25%] lg:ml-[75%] sm: ml-[60%] sm: w-[40%] bg-black text-white font-bold py-2'>Search</button>
            </form>
            <div className='flex flex-col mt-[10%] font-bold w-[90%]'>
                <div className='flex justify-between'>
                    <h5>1. Kayokayo Restaurant</h5>
                    <a href="/#">DM on WhatsApp</a>
                </div>
                <div className='flex justify-between'>
                    <h5>2.  AByxc Restaurant</h5>
                    <a href="/#">DM on WhatsApp</a>
                </div>
                <div className='flex justify-between'>
                    <h5>3.  Hugestomach Restaurant</h5>
                    <a href="/#">DM on WhatsApp</a>
                </div>
                <div className='flex justify-between'>
                    <h5>4.  Kindergattto1 Restaurant</h5>
                    <a href="/#">DM on WhatsApp</a>
                </div>
                <div className='flex justify-between'>
                    <h5>5.  Stomach Care Restaurant</h5>
                    <a href="/#">DM on WhatsApp</a>
                </div>
            </div>


        </div>
    </div>
  )
}

export default SearchClient2