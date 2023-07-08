import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {styles} from '../styles';
import { navLinks } from '../constants';
import {menu, close,logo2} from '../assets';
const Navbar = () => {
  const[active, setActive] = useState('')
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className = {`${styles.paddingX} w-full fixed transition duration-75 flex items-center py-5 top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent" }`}>
      <div className='w-full flex justify between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={()=>{setActive(""); window.scrollTo(0,0);}}>
          <img src={logo2} alt="logo" className="w-16 h-13 transition duration-500 ease-in-out hover:scale-110" />
          <p className =" font-bold text-purple-700 text-base transition duration-500 hover:text-pink-700"> Amber <span className='text-white font-thin'> | </span> Bansal</p>
        </Link> 
        <ul className='list-none hidden sm:flex flex-row gap-10 ml-auto'>
          {navLinks.map((nav) => (
            <li 
            key={nav.id}
            className={`${
              active === nav.title ? "text-yellow-400 text-[18px]":"text-secondary"
            } hover:text-white text-[18px] transition duration-300 hover:text-[20] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
           ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src ={toggle ? close : menu} alt="Menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=> setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden':'flex'} p-6 violet-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg`}>
            <ul className='list-none flex  justify-end items-start flex-col gap-4'>
          {navLinks.map((nav) => (
            <li 
            key={nav.id}
            className={`${
              active === nav.title ? "text-yellow-400": "text-white"
            } transition duration-300 ease-in-out hover:scale-110 hover:text-[24] text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
           ))}
        </ul>
          </div>
        </div>
            
      </div>
    </nav>
  )
}

export default Navbar