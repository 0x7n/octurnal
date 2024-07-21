import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div className="flex justify-center w-full">
        <h1 className='text-3xl tracking-tighter font-bold opacity-80 mx-10'>CONTACT</h1>
    </div>
    <div className='section flex w-full container mx-auto py-14'>
        <div className="grid grid-cols-1 gap-4 w-full">
            <a className="p-6 px-10 rounded-lg flex flex-col items-center justify-center gap-1 bg-[#5864F3] hover:-translate-y-2 transition-all ease-in-out" href='https://discord.com/users/296700613264408578'>
                <span className='text-3xl font-bold'>Discord</span>
            </a>
        </div>
    </div>
</div>
  )
}

export default Contact