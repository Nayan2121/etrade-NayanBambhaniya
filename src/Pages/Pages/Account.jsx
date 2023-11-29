import React from 'react'

import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'

const Account = () => {
    return (
        <>
            <div>
                <section className='SHOP-DROPDOWN py-2 bg-[#292930]'>
                    <div className='flex justify-between items-center  container mx-auto'>
                        <div className='flex '>
                            <AllDropdownHover1 />
                            <AllDropdownHover2 />
                        </div>
                        <AllRightpart />
                    </div>
                </section>

                <section className='SHOP-NAVBAR sticky top-0 z-20'>
                    <AllNavBar />
                </section>

                <section className='SHOP-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section>
                    <div className='grid grid-cols-2  container mx-auto mt-20'>
                        <div>
                            <div className='p-5 bg-[#F6F7FB] rounded-md mb-5'>
                                <p className='text-[#777777]'><i class="ri-user-3-fill mr-2 text-base"></i>Returning customer?<span className='text-black font-medium text-base'><a href="">Click here to login</a><i class="ri-arrow-down-s-line ml-1 text-[#777777] text-xl "></i></span></p>
                            </div>
                            <div className='p-5 bg-[#F6F7FB] rounded-md mb-10'>
                                <p className='text-[#777777]'><i class="ri-pencil-fill mr-2 text-base"></i>Have a coupon?<span className='text-black font-medium text-base'><a href="">Click here to enter your code</a><i class="ri-arrow-down-s-line ml-1 text-[#777777] text-xl"></i></span></p>
                            </div>

                            <div>
                                <h1 className='text-[24px] font-medium text-slate-800'>Billing details</h1>

                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='relative text-gray-500 mt-10'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>First Name<span className='text-red-500 ml-1'>*</span></label>
                                        <input type="text" placeholder='Adam' className='border border-gray-300 w-[100%] px-9 py-4 rounded-md font-normal  focus:outline-none' />
                                    </div>
                                    <div className='relative text-gray-500  mt-10'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Last Name<span className='text-red-500 ml-1'>*</span></label>
                                        <input type="text" placeholder='John' className='border border-gray-300 w-[100%] px-9 py-4 rounded-md font-normal  focus:outline-none' />
                                    </div>
                                </div>

                                <div className='relative text-gray-500 mt-10'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Company Name</label>
                                    <input type="text" className='border border-gray-300 w-full px-9 py-4 rounded-md font-normal  focus:outline-none' />
                                </div>

                                <div className='relative text-gray-500 mt-10'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Country/Region<span className='text-red-500 ml-1'>*</span></label>
                                    <select className='border border-gray-300 w-full px-9 py-4 rounded-md focus:outline-none' name="Bharat" id="">
                                        <option value="">Bharat</option>
                                        <option value="">Austalia</option>
                                        <option value="">England</option>
                                        <option value="">New Zealand</option>
                                        <option value="">Switzerland</option>
                                        <option value="">United Kingdom (UK)</option>
                                        <option value="">United States (USA)</option>
                                    </select>
                                </div>

                                <div className='relative text-gray-500 mt-10'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Street Address<span className='text-red-500 ml-1'>*</span></label>
                                    <input type="text" placeholder='House number and  street name' className='border border-gray-300 w-full px-9 py-4 rounded-md font-normal  focus:outline-none' />
                                </div>

                                <div className='relative text-gray-500 mt-5'>
                                    <input type="text" placeholder='Aparment,suite,unit,etc.(optional)' className='border border-gray-300 w-full px-9 py-4 rounded-md font-normal  focus:outline-none' />
                                </div>

                                <div className='relative text-gray-500 mt-10'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Town/City<span className='text-red-500 ml-1'>*</span></label>
                                    <input type="text" className='border border-gray-300 w-full px-9 py-4 rounded-md font-normal  focus:outline-none' />
                                </div>

                                <div className='relative text-gray-500 mt-10'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Country</label>
                                    <input type="text" className='border border-gray-300 w-full px-9 py-4 rounded-md font-normal  focus:outline-none' />
                                </div>

                                <div className='relative text-gray-500 mt-10'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Phone<span className='text-red-500 ml-1'>*</span></label>
                                    <input type="text" className='border border-gray-300 w-full px-9 py-4 rounded-md font-normal  focus:outline-none' />
                                </div>

                                <div className='relative text-gray-500 mt-10'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Email Address<span className='text-red-500 ml-1'>*</span></label>
                                    <input type="text" className='border border-gray-300 w-full px-9 py-4 rounded-md font-normal  focus:outline-none ' />
                                </div>

                                <div className='mt-10 flex items-center'>
                                    <input className='mr-2 w-4 h-4' type="checkbox" ></input>
                                    <p>Create an Account</p>
                                </div>

                                <div className='flex mt-10 justify-between items-center'>
                                    <h1 className='text-2xl font-semibold'>Ship to a different address?</h1>
                                    <input className='w-4 h-4' type="checkbox" />
                                </div>

                                <div className='relative text-gray-500 mt-10'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Other Notes(optional)</label>
                                    <textarea placeholder='Notes about your order, e.g. speacial notes for delivery.' className='border border-gray-300 w-full px-9 py-4 rounded-md font-normal resize-none focus:outline-none'></textarea>
                                </div>
                            </div>
                        </div>

                        <div>
                            2
                        </div>
                    </div>
                </section>
                {/* <section className='SHOP-SPEAKER '>
                    <Speaker name="Explore All Products"/>
                </section> */}

                <section className='SHOP-FOOTER  container mx-auto'>
                    {/* <SubscribePhoto /> */}
                    <Footer />
                </section>
            </div>
        </>
    )
}
<div className="3"></div>

export default Account
