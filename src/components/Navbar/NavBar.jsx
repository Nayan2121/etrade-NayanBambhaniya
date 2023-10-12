import React from 'react'
import '../Navbar/NavBar.css'

export const NavBar = () => {
    return (
        <div className='main-navbar flex justify-between px-10 bg-white rounded-md items-center hover:shadow-md'>
            <div>
                <img className='' src="./src/assets/Home/Logo.png" alt="" />
            </div>

            <div className='navbar flex justify-between'>
                <div className='home-dropdown'>
                    <button className='home-button underline decoration-[3px] underline-offset-4 h-24'>Home<i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                    <div className='home-content'>
                        <ul className='list bg-white rounded-md'>
                            <li><a className='text-[#ff497c]' href="">Home-Electronics</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Home-NFT</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Home-Fashion</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Home-Jewellery</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Home-Furniture</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Home-Multipurpose</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">RTL Version</a></li>
                        </ul>
                    </div>
                </div>

                <div className='home-dropdown'>
                    <button className='home-button hover:underline decoration-[3px] underline-offset-4 h-24'>Shop<i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                    <div className='home-content'>
                        <ul className='list bg-white rounded-md'>
                            <li><a className='hover:text-[#ff497c]' href="">Shop With Sidebar</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Shop No Sidebar</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Product Variation 1</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Product Variation 2</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Product Variation 3</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Product Variation 4</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Product Variation 5</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Product Variation 6</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Product Variation 7</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Product Variation 8</a></li>
                        </ul>
                    </div>
                </div>

                <div className='home-dropdown'>
                    <button className='home-button hover:underline decoration-[3px] underline-offset-4 h-24'>Pages<i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                    <div className='home-content'>
                        <ul className='list bg-white rounded-md'>
                            <li><a className='hover:text-[#ff497c]' href="">Wishlist</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Cart</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Checkout</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Account</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Sign Up</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Sign In</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Forgot Password</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Reser Password</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Privacy Policy</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Coming Soon</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">404 Error</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Typography</a></li>
                        </ul>
                    </div>
                </div>

                <div className='home-dropdown'>
                    <button className='home-button hover:underline decoration-[3px] underline-offset-4 h-24'>About</button>
                </div>

                <div className='home-dropdown'>
                    <button className='home-button hover:underline decoration-[3px] underline-offset-4 h-24'>Blog<i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                    <div className='home-content'>
                        <ul className='list bg-white rounded-md'>
                            <li><a className='hover:text-[#ff497c]' href="">Blog List</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Blog Grid</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Standard Post</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Gallery Post</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Video Post</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Audio Post</a></li>
                            <li><a className='hover:text-[#ff497c]' href="">Quote Post</a></li>
                        </ul>
                    </div>
                </div>

                <div className='home-dropdown'>
                    <button className='home-button hover:underline decoration-[3px] underline-offset-4 h-24'>Contact</button>
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