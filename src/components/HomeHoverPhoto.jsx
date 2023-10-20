import React from 'react'

const HomeHoverPhoto = () => {
    return (
        <>
            {/* hover photos :- 2  */}
            <div>
                <div className='flex justify-between mt-8'>
                    <div className='relative group overflow-hidden '>
                        <img className='group-hover:scale-110 duration-500 ' src="./src/assets/home/asset 45.png" alt="" />
                        <div className='absolute top-12 right-32 text-white'>
                            <h1 className=' text-[40px] font-bold leading-none mb-6'>Rich sound,<br />for less.</h1>
                            <div className='text-gray-500 group-hover:text-white duration-500'>
                                <a href="" >Collections </a><span className='pl-2'><i class="ri-arrow-right-line"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className='relative group overflow-hidden '>
                        <img className='group-hover:scale-110 duration-500 ' src="./src/assets/home/asset 46.png" alt="" />
                        <div className='absolute top-12 left-16 text-white'>
                            <div className='text-gray-400 mb-6'>
                                <a className='group-hover:text-white duration-500' href="">50% Offer In Winter</a>
                            </div>
                            <h1 className=' text-[40px] font-bold leading-none '>Get VR<br></br>Reality Glass</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHoverPhoto
