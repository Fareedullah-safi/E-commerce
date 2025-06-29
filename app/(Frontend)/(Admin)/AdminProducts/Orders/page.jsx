<<<<<<< HEAD
import SideBar from '@/Lib/Components/SideBar';
=======
import SideBar from '@/Components/SideBar'
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
import React from 'react'

const page = () => {
    return (
        <main>
            <div className='flex'>
                <SideBar />
                <h1 className='text-4xl text-pink-500 font-bold flex justify-center text-center w-full
                '>
                    Orders
                </h1>
            </div>
        </main>
    )
}

export default page