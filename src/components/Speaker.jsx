import React from 'react'

const Speaker = () => {
    return (
        <>
            <div className='flex items-center justify-between h-52 bg-[#F8F8F8] px-24'>
                <div>
                    <a className='text-gray-500 hover:text-blue-600 mr-2' href="">Home</a>
                    <a className=' text-gray-400' href="">|</a>
                    <a className='text-blue-600 ml-2' href="">My Account</a>
                    <h1 className='text-4xl font-semibold text-[#292930] mt-4'>Explore All Products</h1>
                </div>
                <div>
                    <img src="./src/assets/shop/shopwithsidebar/asset 2.png" alt="" />
                </div>
            </div>
        </> 
    )
}

export default Speaker
