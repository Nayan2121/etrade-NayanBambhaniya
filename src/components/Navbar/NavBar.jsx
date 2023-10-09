import React from 'react' 
 
 
export const NavBar = () => { 
    return ( 
        <div className='flex justify-between px-10 bg-white rounded-md py-4 items-center hover:shadow-md'> 
            <div> 
                <img src="./src/assets/Home/Logo.png" alt="" />
            </div> 
 
            <div className=' flex justify-between' style={{maxWidth}}> 
               <button className='font-semibold'>Home <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs"></i></button>  
               <button className='font-semibold'>Shop <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs"></i></button>  
               <button className='font-semibold'>Pages <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs"></i></button>  
               <button className='font-semibold'>About</button>  
               <button className='font-semibold'>Blog <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs"></i></button>  
               <button className='font-semibold'>Contact</button>  
            </div> 
             
            <div className='text-2xl text-gray-600 flex w-[180px] justify-between'> 
                <span className='border h-10 w-10 flex justify-center items-center rounded-full hover:bg-pink-600 transition duration-500'><i class="ri-search-line  hover:bg-pink-600 rounded-full"></i></span> 
                <span className='border h-10 w-10 flex justify-center items-center rounded-full hover:bg-pink-600 transition duration-500'><i class="ri-heart-line hover:bg-pink-600 rounded-full"></i></span> 
                <span className='border h-10 w-10 flex justify-center items-center rounded-full hover:bg-pink-600 transition duration-500'><i class="ri-shopping-cart-line hover:bg-pink-600 rounded-full"></i></span> 
                <span className='border h-10 w-10 flex justify-center items-center rounded-full hover:bg-pink-600 transition duration-500'><i class="ri-user-3-line hover:bg-pink-600 rounded-full"></i></span> 
            </div> 
        </div> 
    )
}