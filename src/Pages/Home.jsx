import React from "react";
import { NavBar } from "../components/Navbar/NavBar";
import { DropdownHover1, DropdownHover2, Rightpart } from "../components/Dropdown/DropdownHover"

export function Home() {
  return (
    <>
      <div className="h-screen bg-[#F9F3F0] px-64">

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

      </div>
    </>
  )
}