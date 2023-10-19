import React from "react";
import { NavBar } from "../../components/Navbar/NavBar";
import { DropdownHover1, DropdownHover2, Rightpart } from "../../components/Dropdown/DropdownHover"
import "./home.css"
import Footer from "../../components/Footer/footer";
import HoverPhoto from "../../components/Hover2photo/Hover2Photo";
import Service from "../../components/Service/Service";
import SubscribePhoto from "../../components/Subscribe/Subscribe";

export function Home() {
  return (
    <>
      <div className="main-home px-64">

        <section className='py-2 '>
          <div className='flex justify-between'>
            <div className='flex'>
              <DropdownHover1 />
              <DropdownHover2 />
            </div>
            <Rightpart />
          </div>
        </section>

        <section className="sticky top-2 z-20">
          <NavBar />
        </section>

        <section className="">
          <Service />
        </section>
        <section>
          <HoverPhoto />
          <SubscribePhoto />
          <Footer />
        </section>
      </div>
    </>
  )
}
