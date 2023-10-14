import React from 'react'

const Footer = () => {

    return (
        <>
            <div className='main-div  mt-[50%]'>

                {/* first-div  */}
                <div className='flex justify-between items-center'>
                    <div className=' flex items-center'>
                        <div className='w-12 '>
                            <img src="./src/assets/home/asset 47.png" alt="" />
                        </div>
                        <div className='ml-5'>
                            <h1 className='font-semibold text-gray-800 '>Fast & Secure Delivery</h1>
                            <h1 className='text-gray-500'>Tell about your service.</h1>
                        </div>
                    </div>

                    <div className=' flex items-center'>
                        <div className='w-12 '>
                            <img src="./src/assets/home/asset 48.png" alt="" />
                        </div>
                        <div className='ml-5'>
                            <h1 className='font-semibold text-gray-800 '>Money Back Guarantee</h1>
                            <h1 className='text-gray-500'>Within 10 days.</h1>
                        </div>
                    </div>

                    <div className=' flex items-center '>
                        <div className='w-12 '>
                            <img src="./src/assets/home/asset 49.png" alt="" />
                        </div>
                        <div className='ml-5'>
                            <h1 className='font-semibold text-gray-800 '>24 Hour Return Policy</h1>
                            <h1 className='text-gray-500'>No question ask.</h1>
                        </div>
                    </div>

                    <div className=' flex items-center'>
                        <div className='w-12 '>
                            <img src="./src/assets/home/asset 50.png" alt="" />
                        </div>
                        <div className='ml-5'>
                            <h1 className='font-semibold text-gray-800 '>Pro Quality Support</h1>
                            <h1 className='text-gray-500'>24/7 Live support.</h1>
                        </div>
                    </div>

                </div>

                {/* second-div  */}
                <div className='flex justify-between items-center mt-[75px]'>
                    <div className=' text-gray-500 '>
                        <b className='text-gray-800'>Support</b>
                        <p className='mt-7 leading-7'>685 Market Street,<br />Las Vegas, LA 95820,<br /> United States.</p>
                        <div className='mt-8 hover:text-gray-800'>
                            <a href=""> <i className="ri-mail-open-line pr-2 text-xl"></i> example@domain.com</a>
                        </div>
                        <div className='mt-3 hover:text-gray-800    '>
                            <a href=""> <i className="ri-phone-line pr-2 text-xl "></i> (+01) 850-315-5862</a>
                        </div>

                    </div>




                    <div className=' text-gray-500'>
                        <b className='text-gray-800'>Account</b>
                        <div className='mt-6'>
                            <ul >
                                <li>My Account</li>
                            </ul>
                            <ul className='mt-4'>
                                <li>Login / Register</li>
                            </ul>
                            <ul className='mt-4'>
                                <li>Cart</li>
                            </ul>
                            <ul className='mt-4'>
                                <li>Wishlist</li>
                            </ul>
                            <ul className='mt-4'>
                                <li>Shop</li>
                            </ul>
                        </div>
                    </div>

                    <div className=' text-gray-500'>
                        <b className='text-gray-800'>Quick Link</b>
                        <div className='mt-6'>
                            <ul>
                                <li>Privacy Policy</li>
                            </ul>
                            <ul className='mt-4'>
                                <li>Terms Of Use</li>
                            </ul>
                            <ul className='mt-4'>
                                <li>FAQ</li>
                            </ul>
                            <ul className='mt-4'>
                                <li>Contact</li>
                            </ul>
                            <ul className='mt-4'>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>

                    {/* four-div  */}

                    <div className=' b text-gray-500'>
                        <b className='text-gray-800'>Download App</b>
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
            </div>

            {/* footer icon  */}
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

                <div>
                    <h1 className='text-gray-500 '>
                        <i class="ri-copyright-line"></i>2023. All rights reserved by<span> Axilthemes.</span>
                    </h1>
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