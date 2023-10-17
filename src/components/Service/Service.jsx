import React from "react";

const Service = () => {
    return (
        <>
            <div className="pb-[50px]">
                <div className="text-center">
                    <p className="text-[#FF497C] font-medium"><i class="ri-thumb-up-line bg-[#FF497C] p-1 text-white rounded-full text-center mr-3"></i>Why Us</p>
                    <h1 className="font-bold text-4xl text-[#292930] mb-[30px]">Why People Choose Us</h1>
                </div>
                <div className="grid grid-cols-5 gap-x-10 mt-20">
                    <div className="border py-[50px] px-[40px] font-bold leading-[26px] text-center hover:shadow-lg hover:duration-1000">
                        <div className="flex justify-center">
                            <img className="" src="./src/assets/Home/asset 40.png" alt="" />
                        </div>
                        <p>Fast & Service Delivery</p>
                    </div>
                    <div className="border py-[50px] px-[40px] font-bold leading-[26px] text-center hover:shadow-xl hover:duration-500">
                        <div className="flex justify-center">
                            <img className="" src="./src/assets/Home/asset 41.png" alt="" />
                        </div>
                        <p>100% Guarantee On Product</p>
                    </div>
                    <div className="border py-[50px] px-[40px] font-bold leading-[26px] text-center hover:shadow-xl hover:duration-500">
                        <div className="flex justify-center">
                            <img className="" src="./src/assets/Home/asset 42.png" alt="" />
                        </div>
                        <p>24 Hour Return Policy</p>
                    </div>
                    <div className="border py-[50px] px-[40px] font-bold leading-[26px] text-center hover:shadow-xl hover:duration-500">
                        <div className="flex justify-center">
                            <img className="" src="./src/assets/Home/asset 43.png" alt="" />
                        </div>
                        <p>24 Hour Return Policy</p>
                    </div>
                    <div className="border py-[50px] px-[40px] font-bold leading-[26px] text-center hover:shadow-xl hover:duration-500">
                        <div className="flex justify-center">
                            <img className="" src="./src/assets/Home/asset 44.png" alt="" />
                        </div>
                        <p>Next Level Pro Quality</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service