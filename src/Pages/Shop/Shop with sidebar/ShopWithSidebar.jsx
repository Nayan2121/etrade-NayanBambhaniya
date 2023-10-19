import React from "react"
import { AllNavBar } from "../../../components/AllNavbar/AllNavbar"
import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from "../../../components/AllDropdown/AllDropDown"
import SubscribePhoto from "../../../components/Subscribe/Subscribe"

function ShopWithSidebar() {
    return (
        <>
            <div className='bg-[#eae5e4]'>
                <section className='SHOP-DROPDOWN py-2 bg-[#292930]'>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <AllDropdownHover1 />
                            <AllDropdownHover2 />
                        </div>
                        <AllRightpart />
                    </div>
                </section>

                <section className="sticky top-2 z-20">
                    <AllNavBar />
                </section>

                <section>
                    <SubscribePhoto />
                </section>
            </div>
        </>
    )
}

export default ShopWithSidebar
