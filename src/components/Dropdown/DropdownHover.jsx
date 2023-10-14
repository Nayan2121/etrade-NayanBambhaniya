import React from 'react' 
import '../Dropdown/DropdownHover.css' 
 
 
// first-button :- 
export const DropdownHover1 = () => { 
  function myFunction() { 
    document.getElementById("myDropdown1").classList.toggle("show"); 
  } 
  window.onclick = function (event) { 
    if (!event.target.matches('.dropbtn')) { 
      var dropdowns = document.getElementsByClassName("dropdown-content"); 
      var i; 
      for (i = 0; i < dropdowns.length; i++) { 
        var openDropdown = dropdowns[i]; 
        if (openDropdown.classList.contains('show')) { 
          openDropdown.classList.remove('show'); 
        } 
      } 
    } 
  } 
  return ( 
    <div className="dropdown mr-6 "> 
      <button onClick={myFunction} className="dropbtn text-sm text-gray-500 mb-2 cursor-pointer">English <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs"></i></button> 
      <div id="myDropdown1" className="dropdown-content bg-white shadow-md z-10"> 
        <a className='rounded-md text-gray-700 text-sm w-24 px-[15px]  py-[7px] hover:bg-[#FF5283] hover:text-white' href="#home">English</a> 
        <a className='rounded-md text-gray-700 text-sm w-24 px-[15px]  py-[7px] hover:bg-[#FF5283] hover:text-white' href="#about">Arabic</a> 
        <a className='rounded-md text-gray-700 text-sm w-24 px-[15px]  py-[7px] hover:bg-[#FF5283] hover:text-white' href="#contact">Spanish</a> 
      </div> 
    </div> 
  ) 
} 
 
 
// second-button :- 
export const DropdownHover2 = () => { 
  function myFunction() { 
    document.getElementById("myDropdown2").classList.toggle("show"); 
  } 
  window.onclick = function (event) { 
    if (!event.target.matches('.dropbtn')) { 
      var dropdowns = document.getElementsByClassName("dropdown-content"); 
      var i; 
      for (i = 0; i < dropdowns.length; i++) { 
        var openDropdown = dropdowns[i]; 
        if (openDropdown.classList.contains('show')) { 
          openDropdown.classList.remove('show'); 
        } 
      } 
    } 
  } 
  return ( 
    <div className="dropdown"> 
      <button onClick={myFunction} className="dropbtn text-sm text-gray-500 mb-2 cursor-pointer">USD <i class="fa-solid fa-angle-down text-gray-500 text-xs"></i></button> 
      <div id="myDropdown2" className="dropdown-content bg-white shadow-md z-10"> 
        <a className='rounded-md text-gray-700 text-sm w-24  px-[15px]  py-[7px] hover:bg-[#FF5283] hover:text-white' href="#home">USD</a> 
        <a className='rounded-md text-gray-700 text-sm w-24  px-[15px]  py-[7px] hover:bg-[#FF5283] hover:text-white' href="#about">AUD</a> 
        <a className='rounded-md text-gray-700 text-sm w-24  px-[15px]  py-[7px] hover:bg-[#FF5283] hover:text-white' href="#contact">EUR</a> 
      </div> 
    </div> 
  ) 
} 
 
 
// Rightpart :- 
export const Rightpart = () => { 
  return ( 
    <div className='right-part'> 
      <div className='list-none flex text-sm text-gray-700 '> 
        <li className='hover:text-blue-500 cursor-pointer ml-6 text-gray-500'>Help</li> 
        <li className='hover:text-blue-500 cursor-pointer ml-6 text-gray-500'>Join Us</li> 
        <li className='hover:text-blue-500 cursor-pointer ml-6 text-gray-500'>Sign In</li> 
      </div> 
    </div> 
  ) 
}