import React from 'react'

function About() {
  return (
    <div className='h-screen w-full bg-[] justify-center flex items-center flex-col text-center p-10'>
      <h1 className=' text-4xl'>About freelanceHQ</h1>
       <p className='text-2xl mt-5'>FreelanceHQ is a software built mainly for website designer, website developer, digital marketer and Ui/Uix <br /> Designer. It help them look out for companies, businesses around the world that need their services <br /> (Majorly website design but can also be used for other digital services)</p>

       <button class=" mt-10 text-black  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{border:"2px solid black"}}>
           Learn More
       </button>
    </div>
  )
}

export default About