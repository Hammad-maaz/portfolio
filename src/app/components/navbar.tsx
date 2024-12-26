'use client'
import Link from "next/link"
import { useState } from "react"
import NavLinks from "./navLinks"
import {delay, motion} from "framer-motion"

const Navbar = () => {
    const links = [
        {url: "/", name: "Home"},
        {url: "/about", name: "About"},
        {url: "/portfolio", name: "Portfolio"},
        {url: "/contact", name: "Contact"},
    ]

    console.log(typeof links)

    const images = [
        "./github.png",
        "./dribbble.png",
        "./linkedin.png",
        "./instagram.png",
        "./facebook.png",
    ]

    const [showMenu, setShowMenu] = useState(false)
    const topVarient = {
        close:{
            rotate: 0,
        },
        
        opened: {
            rotate:40,
            backgroundColor: "rgb(255, 255, 255)",
        }
    }

    const centerVarient = {
        close:{
            opacity: 1,
        },
        
        opened: {
            opacity: 0
        }
    }

    const bottomVarinet = {
        close:{
            rotate: 0,
        },
        
        opened: {
            rotate: -40,
            backgroundColor: "rgb(255, 255, 255)",
        }
    }

    const listVarient = {
        close:{
            x: 0,
        },

        opened:{
            x: 0,
            transition: {
                when: "beforeChildren",
                delayChildren: 0.2,
                staggerChildren: 0.2
            }
        }
    }

    const listItemVarient = {
        close:{
            x: -10,
            opacity: 0,
        },
        
        opened: {
            x: 0,
            opacity: 1
        }
    }


  return (
    <div className='h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* LEFT SIDE */}
            {/* NAV BAR ITEMS */}
        <div className="hidden md:flex items-center justify-start gap-4 text-black">
            {links.map((link) => (
                <NavLinks key={link.url} links={link} />
            ))}
        </div>

            {/* LOGO */}
        <Link href="/" className="flex md:hidden lg:flex items-center justify-center bg-black rounded-md text-sm font-semibold p-1 lg:mr-[20%] 2xl:mr-[30%]">
            <span className="text-white mr-1">Hammad</span>
            <span className="h-7 w-12 bg-white text-black rounded-md flex items-center justify-center">Afzal</span>
        </Link>

        
        
        
        {/* RIGHT SIDE */}
            {/* Responsive Menu */}
        <div className="">
            {/* IMAGES */}
            <div className="hidden md:flex gap-4">
                {images.map((image) => (
                    <Link href="/" key={image}>
                        <img src={image} alt="" width={26} height={26} />
                    </Link>
                ))}
            </div>

            {/* MENU */}
            <button className="w-8 h-6 flex flex-col justify-between z-50 relative md:hidden" onClick={() => setShowMenu((prev) => !prev)}>
                <motion.div variants={topVarient} animate= {showMenu ? "opened" : "close"} className="w-8 h-1 bg-black origin-left"></motion.div>
                <motion.div variants={centerVarient} animate= {showMenu ? "opened" : "close"} className="w-8 h-1 bg-black"></motion.div>
                <motion.div variants={bottomVarinet} animate= {showMenu ? "opened" : "close"} className="w-8 h-1 bg-black origin-left"></motion.div>
            </button>

            {showMenu && (
                <motion.div variants={listVarient} initial="close" animate="opened" className="absolute top-0 left-0 bg-black text-white w-screen h-screen flex flex-col items-center justify-center gap-8 text-4xl font-semibold md:hidden z-40">
                    {links.map((link) => (
                        <motion.div variants={listItemVarient} key={link.url} >
                            <Link href={link.url} >{link.name}</Link>
                        </motion.div>
                    ))}
            </motion.div>
            )}
        </div>
    </div>
  )
}

export default Navbar