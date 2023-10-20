import React from 'react'

import { HomeDropdownHover1, HomeDropdownHover2, HomeRightpart } from '../../Components/HomeDropdown/HomeDropdownHover'
import HomeNavBar from '../../Components/HomeNavbar/HomeNavBar'
import HomeService from '../../Components/HomeService'
import HomeHoverPhoto from '../../Components/HomeHoverPhoto'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'

import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'

import ShopWithSidebar from '../Shop/ShopWithSidebar'
import ShopNoSidebar from '../Shop/ShopNoSidebar'
import ProductV1 from '../Shop/ProductV1'
import ProductV2 from '../Shop/ProductV2'
import ProductV3 from '../Shop/ProductV3'
import ProductV4 from '../Shop/ProductV4'
import ProductV5 from '../Shop/ProductV5'
import ProductV6 from '../Shop/ProductV6'
import ProductV7 from '../Shop/ProductV7'

import Wishlist from '../Pages/Wishlist'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Account from '../Pages/Account'





export default function Home() {
  return (
    <>
      {/* HOME-SECTION-COMPONENTS */}
      {/* <div className='Body bg-white px-24'>

        <section className='HOME-DROPDOWN py-2'>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <HomeDropdownHover1/>
              <HomeDropdownHover2 />
            </div>
            <HomeRightpart />
          </div>
        </section>

        <section className='HOME-NAVBAR sticky top-2 z-20'>
          <HomeNavBar />
        </section>

        <section className='HOME-SERVICES'>
          <HomeService />
        </section>

        <section className='HOME-FOOTER'>
          <HomeHoverPhoto />
          <SubscribePhoto />
          <Footer />
        </section>

      </div> */}


      {/* SHOP-SECTION-COMPONENTS  */}

      <ShopNoSidebar />
      <ShopWithSidebar />
      <ProductV1 />
      <ProductV2 />
      <ProductV3 />
      <ProductV4 />
      <ProductV5 />
      <ProductV6 />
      <ProductV7 />


      {/* PAGES-SECTION-COMPONENTS  */}

      {/* <Wishlist/>
      <Cart/>
      <Checkout/>
      <Account/> */}
    </>
  )
}

