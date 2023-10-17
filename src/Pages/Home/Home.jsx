import React from "react";
import { NavBar } from "../../components/Navbar/NavBar";
import { DropdownHover1, DropdownHover2, Rightpart } from "../../components/Dropdown/DropdownHover"
import "./home.css"
import Footer from "../../components/Footer/footer";
import HoverPhoto from "../../components/Hover2photo/Hover2Photo";
import Service from "../../components/Service/Service";

export function Home() {
  return (
    <>
      <div className="main-home  bg-[#F9F3F0] px-64">

        <section className='py-2'>
          <div className='flex justify-between'>
            <div className='flex'>
              <DropdownHover1 />
              <DropdownHover2 />
            </div>
            <Rightpart />
          </div>
        </section>

        <section>
          <NavBar />
        </section>

        <section>
          <Service/>
        </section>
        <section>
          <HoverPhoto/>
          <Footer/>
        </section>
      </div>
    </>
  )
}
