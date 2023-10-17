import React from 'react'

const Footer = () => {

    return (
        <>
            {/* subcribe-photos  */}
            <div className='Newsletter relative mt-9'>
                <img src="./src/assets/home/asset 65.jpeg" className='w-full h-96 rounded-md object-cover' alt="" />

                <div className='absolute top-24 left-32'>
                    <div className='flex mb-3'>
                        <i className="ri-mail-open-fill h-6 w-6 text-base border bg-[#3577F0] text-white rounded-full flex items-center justify-center"></i>
                        <h1 className='text-[#3577F0] font-bold text-sm flex items-center ml-2'>Newsletter</h1>
                    </div>

                    <h1 className='text-4xl font-sans font-bold mb-8 text-[#292930] tracking-wide'>Get weekly update</h1>

                    <div className='flex'>
                        <input type='text' className=' w-96 px-14 py-4 rounded-md placeholder-gray-500' placeholder=' example@gmail.com'>
                        </input>
                        <img src="./src/assets/home/asset 66.png" className='absolute top-[125px] left-7' alt="" />
                        <div className='relative group z-10'>
                            <a href='#' className='absolute ml-4 px-9 py-4 text-white font-bold rounded-md bg-[#292930] before:content-[""] before:w-[140px] before:[50px] before:bg-[#292930] before:absolute before:group-hover:scale-110 before:top-0 before:left-1 before:rounded-md before:duration-300 before:right-0 before:bottom-0 before:-z-10'>Subscribe</a>
                        </div>
                    </div>

                </div>
            </div>

            {/* footer start */}
            <div className='flex justify-between mt-[10%] border-b-2 border-gray-300 mb-12 pb-7 '>

                {/* footer-top-part  */}
                <div className='delivery flex items-center'>
                    <div className='w-12 '>
                        <img src="./src/assets/home/asset 47.png" alt="" />
                    </div>
                    <div className='ml-5'>
                        <h1 className='font-semibold text-gray-800 '>Fast & Secure Delivery</h1>
                        <h1 className='text-gray-500'>Tell about your service.</h1>
                    </div>
                </div>

                <div className='guarantee flex items-center'>
                    <div className='w-12 '>
                        <img src="./src/assets/home/asset 48.png" alt="" />
                    </div>
                    <div className='ml-5'>
                        <h1 className='font-semibold text-gray-800 '>Money Back Guarantee</h1>
                        <h1 className='text-gray-500'>Within 10 days.</h1>
                    </div>
                </div>

                <div className='policy flex items-center '>
                    <div className='w-12 '>
                        <img src="./src/assets/home/asset 49.png" alt="" />
                    </div>
                    <div className='ml-5'>
                        <h1 className='font-semibold text-gray-800 '>24 Hour Return Policy</h1>
                        <h1 className='text-gray-500'>No question ask.</h1>
                    </div>
                </div>

                <div className='support flex items-center'>
                    <div className='w-12 '>
                        <img src="./src/assets/home/asset 50.png" alt="" />
                    </div>
                    <div className='ml-5'>
                        <h1 className='font-semibold text-gray-800 '>Pro Quality Support</h1>
                        <h1 className='text-gray-500'>24/7 Live support.</h1>
                    </div>
                </div>

            </div>

            {/* footer-center-part  */}
            <div className='flex justify-between border-b-2 border-gray-300 pb-7 '>

                <div className='Support-part text-gray-500'>
                    <b className='text-gray-800'>Support</b>
                    <p className='mt-6 leading-7'>685 Market Street,<br />Las Vegas, LA 95820,<br /> United States.</p>
                    <div className='mt-8 hover:text-gray-800 duration-500'>
                        <a href=""> <i className="ri-mail-open-line pr-2 text-xl"></i> example@domain.com</a>
                    </div>
                    <div className='mt-3 hover:text-gray-800 duration-500'>
                        <a href=""> <i className="ri-phone-line pr-2 text-xl "></i> (+01) 850-315-5862</a>
                    </div>
                </div>

                <div className='Account-part  text-gray-500'>
                    <b className='text-gray-800'>Account</b>
                    <ul>
                        <div className='relative group mt-6'>
                            <li className='before:absolute
                            font-medium
                            hover:text-gray-700 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:bottom-0
                            before:-mb-0
                            before:opacity-0
                            before:group-hover:w-[90px]
                            before:right-[20px]
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            mb-4
                            '>
                                <a href='#'>My Account</a>
                            </li>
                        </div>

                        <div className='relative group'>
                            <li className='before:absolute
                            font-medium
                            hover:text-gray-700 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:bottom-1
                            before:-mb-1
                            before:opacity-0
                            before:group-hover:w-[100%]
                            before:right-0 
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            mb-4
                            '>
                                <a href='#'>Login / Register</a>
                            </li>
                        </div>

                        <div className='relative group'>
                            <li className='before:absolute
                            font-medium
                            hover:text-gray-700 
                            duration-300                        
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:bottom-1
                            before:-mb-1
                            before:opacity-0
                            before:group-hover:w-8
                            before:right-[80px] 
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            mb-4
                            '>
                                <a href='#' className='
                            '>Cart</a>
                            </li>
                        </div>

                        <div className='relative group'>
                            <li className='before:absolute
                            font-medium
                            hover:text-gray-700 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:bottom-1
                            before:-mb-1
                            before:opacity-0
                            before:group-hover:w-[60px]
                            before:right-[55px] 
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            mb-4
                            '>
                                <a href='#'>Wishlist</a>
                            </li>
                        </div>

                        <div className='relative group'>
                            <li className='before:absolute
                            font-medium
                            hover:text-gray-700 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:bottom-1
                            before:-mb-1
                            before:opacity-0
                            before:group-hover:w-10
                            before:right-[75px] 
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            mb-4    
                            '>
                                <a href='#'>Shop</a>
                            </li>
                        </div>

                    </ul>
                </div>


                <div className='Quick-link-part  text-gray-500'>
                    <b className='text-gray-800'>Quick Link</b>
                    <ul>
                        <div className='relative group mt-6'>
                            <li className='before:absolute
                            font-medium
                            hover:text-gray-700 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:bottom-1
                            before:-mb-1
                            before:opacity-0
                            before:group-hover:w-[100%]
                            before:right-0 
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            mb-4
                            '>
                                <a href='#'>Privacy Policy</a>
                            </li>
                        </div>

                        <div className='relative group'>
                            <li className='before:absolute
                            font-medium
                            hover:text-gray-700 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:bottom-1
                            before:-mb-1
                            before:opacity-0
                            before:group-hover:w-[100%]
                            before:right-0 
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            mb-4
                            '>
                                <a href='#'>Terms Of Use</a>
                            </li>
                        </div>

                        <div className='relative group'>
                            <li className='before:absolute
                            font-medium
                            hover:text-gray-700 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:bottom-1
                            before:-mb-1
                            before:opacity-0
                            before:group-hover:w-8
                            before:right-16 
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            mb-4
                            '>
                                <a href='#' className='
                            '>FAQ</a>
                            </li>
                        </div>

                        <div className='relative group'>
                            <li className='before:absolute
                            font-medium
                            hover:text-gray-700 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:bottom-1
                            before:-mb-1
                            before:opacity-0
                            before:group-hover:w-14
                            before:right-10 
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            mb-4
                            '>
                                <a href='#'>Contact</a>
                            </li>
                        </div>

                        <div className='relative group'>
                            <li className='before:absolute
                            font-medium
                            hover:text-gray-700 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:bottom-1
                            before:-mb-1
                            before:opacity-0
                            before:group-hover:w-14
                            before:right-10 
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            mb-4
                            '>
                                <a href='#'>Contact</a>
                            </li>
                        </div>

                    </ul>
                </div>

                <div className=' text-gray-500'>
                    <b className='text-gray-800 '>Download App</b>
                    <h1 className='mt-6'>Save $3 With App & New User only</h1>

                    <div className='flex items-center mt-5'>
                        <div>
                            <img src="./src/assets/home/asset 51.png" alt="" />
                        </div>
                        <div className='ml-5'>
                            <img className='mb-4' src="./src/assets/home/asset 52.png" alt="" />
                            <img src="./src/assets/home/asset 53.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>


            {/* footer-bottom-icon  */}
            <div className='flex justify-between items-center mt-20'>
                <div className='text-2xl text-gray-600 flex justify-between w-[160px] h-10'>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon flex justify-center items-center rounded-full'><i class="ri-facebook-fill text-lg"></i></li>
                    </ul>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon flex justify-center items-center rounded-full'><i class="ri-instagram-line text-lg"></i></li>
                    </ul>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon flex justify-center items-center rounded-full'><i class="ri-twitter-fill text-lg"></i></li>
                    </ul>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon flex justify-center items-center rounded-full '><i class="ri-linkedin-fill text-lg"></i></li>
                    </ul>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon flex justify-center items-center rounded-full'><i class="ri-discord-line text-lg"></i></li>
                    </ul>
                </div>

                <div className='flex text-gray-600'>
                    <span className='mr-2'>© 2023. All rights reserved by</span>
                    <div className='relative group'>
                        <ul>
                            <li className='before:absolute
                            hover:text-gray-900 
                            duration-300
                            before:content-[""]
                            before:w-0
                            before:h-0.5
                            before:bg-gray-900
                            before:duration-500
                            before:-bottom-0  
                            before:opacity-0
                            before:group-hover:w-[80px]
                            before:right-[5px]
                            before:group-hover:left-0
                            before:group-hover:opacity-100
                            '>
                                <a href='#'>Axilthemes.</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-between items-center w-[230px] text-gray-500'>
                    <h1>Accept For</h1>
                    <img src="./src/assets/home/asset 54.png" alt="" />
                    <img src="./src/assets/home/asset 55.png" alt="" />
                    <img src="./src/assets/home/asset 56.png" alt="" />
                </div>
            </div>

        </>
    )
}

export default Footer