import React from 'react'
import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
// import { ShopDropdownHover1, ShopDropdownHover2, ShopRightpart } from '../Shop with sidebar/Dropdown/ShopDropdownHover'
// import { NavBottom, ShopNavBar } from '../Shop with sidebar/Navbar/ShopNavBar'
// import  Speaker  from '../Shop with sidebar/Speaker/Speaker'
// import SubscribePhoto from '../../HOME/Subscribephoto/SubscribePhoto'
// import Footer from '../../HOME/Footer/Footer'

const ProductV1 = () => {
    return (
        <>
            <div>
                <section className='SHOP-DROPDOWN py-2 bg-[#292930]'>
                    <div className='flex justify-between items-center px-24'>
                        <div className='flex '>
                            <AllDropdownHover1 />
                            <AllDropdownHover2 />
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

export default ProductV1
