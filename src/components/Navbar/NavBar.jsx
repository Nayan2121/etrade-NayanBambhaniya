import React from 'react'
import '../Navbar/NavBar.css'

export const NavBar = () => {
    return (
        <div className='flex justify-between px-10 bg-white rounded-md items-center hover:shadow-md'>
            <div>
                <img src="./src/assets/Home/Logo.png" alt="" />
            </div>


            <div className='navbar flex justify-between p-0 m-0'>
                <div className='home-dropdown'>
                    <button className='home-button underline decoration-[3px] underline-offset-4 h-24'>Home<i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                    <div className='home-content'>
                        <ul className='list bg-white rounded-md'>
                            <li><a href=""></a>Home-Electronics</li>
                            <li><a href=""></a>Home-NFT</li>
                            <li><a href=""></a>Home-NFT</li>
                            <li><a href=""></a>Home-NFT</li>
                            <li><a href=""></a>Home-NFT</li>
                        </ul>
                    </div>
                </div>
                <div className='home-dropdown'>
                    <button className='home-button underline decoration-[3px] underline-offset-4 h-24'>Home<i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                    <div className='home-content'>
                        <ul className='list bg-white rounded-md'>
                            <li><a href=""></a>Home-Electronics</li>
                            <li><a href=""></a>Home-NFT</li>
                            <li><a href=""></a>Home-NFT</li>
                            <li><a href=""></a>Home-NFT</li>
                            <li><a href=""></a>Home-NFT</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='text-2xl text-gray-600 flex justify-between w-[160px] h-10'>
                <ul className='flex justify-between w-[20px] btn-hover'>
                    <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-search-line hover:text-slate-100"></i></li>
                </ul>
                <ul className='flex justify-between w-[20px] btn-hover'>
                    <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-heart-line hover:text-slate-100"></i></li>
                </ul>
                <ul className='flex justify-between w-[20px] btn-hover'>
                    <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-shopping-cart-line hover:text-slate-100"></i></li>
                </ul>
                <ul className='flex justify-between w-[20px] btn-hover'>
                    <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-user-3-line hover:text-slate-100"></i></li>
                </ul>
            </div>
        </div>
    )
}