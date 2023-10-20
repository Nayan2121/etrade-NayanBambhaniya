import React from 'react'

import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'

const ProductV2 = () => {
    return (
        <>
            <div>
                <section className='SHOP-DROPDOWN py-2 bg-[#292930]'>
                    <div className='flex justify-between items-center px-24'>
                        <div className='flex '>
                            <AllDropdownHover1 />
                            <AllDropdownHover2/>
                        </div>
                        <AllRightpart />
                    </div>
                </section>

                <section className='SHOP-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='SHOP-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='SHOP-SPEAKER'>
                    <Speaker />
                </section>

                <section className='SHOP-FOOTER px-24'>
                <SubscribePhoto/>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default ProductV2
