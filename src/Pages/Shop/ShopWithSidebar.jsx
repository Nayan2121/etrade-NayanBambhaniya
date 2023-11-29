import React from 'react'

import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'

const ShopWithSidebar = () => {
    return (
        <>
            <div>
                <section className='SHOP-DROPDOWN py-2 bg-[#292930]'>
                    <div className='flex justify-between items-center  container mx-auto'>
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
                    <Speaker name="Explore All Products"/>
                </section>

                <section className='SHOP-FOOTER  container mx-auto'>
                <SubscribePhoto/>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default ShopWithSidebar
