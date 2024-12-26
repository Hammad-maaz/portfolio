'use client'
import { motion, useScroll } from "framer-motion"
import Image from "next/image"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Brain from "../components/brain"
import { useRef } from "react"

const AboutPage = () => {
  const containerRef = useRef(null) 
  const { scrollYProgress } = useScroll({container: containerRef})


  return (
    <motion.div className="" initial= {{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1,}}>
       <div className="flex">
          <div className="flex flex-col pt-40 px-4 pb-10 sm:px-10 md:px-12 lg:px-20 xl:px-48 gap-32 md:gap-32 lg:gap-42 xl:gap-64 min-h-screen" >

            {/* TEXT CONTAINER */}
              {/* BIOGRAPHY */}
              <div className="flex flex-col gap-10 w-2/3" ref={containerRef}>
                <h1 className="text-2xl font-bold">Biography</h1>
                <p className="text-lg mb-4">I am Hammad Afzal, a Flutter Developer with a year of hands-on experience specializing in building cross-platform mobile applications using Dart and the Flutter framework. My journey in technology began with a BS in Information Technology from the University of Sargodha, where I honed my skills and passion for creating impactful mobile experiences. Fluent in both English and Urdu, I focus on crafting responsive, user-friendly applications that solve real-world problems. I am always eager to learn new technologies and enhance my expertise in app development.</p>
                <span className="italic font-semibold">”In the world of Flutter, every line of code is a step closer to building something that feels native, performs smoothly, and connects people across platforms.”</span>
                <Image src="/Hammad.svg" alt="" width={170} height={170} className="self-end"/>
              </div>


              {/* SKILLS */}
              <div className="flex flex-col gap-10 w-2/3">
                <h1 className="text-2xl font-bold">Skills</h1>
                <Skills />
              </div>


              {/* EXPERIENCE */}
              <div className="flex flex-col w-2/3">
                <h1 className="text-2xl font-bold">Experience</h1>
                <Experience showLeft={true} children={<div className="flex flex-col gap-2">
                  <h1 className="bg-white p-2 rounded-md text-black text-sm font-semibold">Mobile Application Developer Internshitp</h1>
                  <span className="text-[13px] ">Test asdfasf asdf ads flasdfjaksfhj ajsdfhasjklfhflah</span>
                  <h3 className="text-[13px] text-red-400 font-semibold mt-6">Jun 2023 - Nov 2023</h3>
                  <h2 className="bg-white p-2 rounded-md text-black text-[13px] font-semibold">PSEB</h2>
                </div>}/>
                <Experience showLeft={false} children={<div className="flex flex-col gap-2">
                  <h1 className="bg-white p-2 rounded-md text-black text-sm font-semibold">Mobile Application Developer</h1>
                  <span className="text-[13px] ">Test asdfasf asdf ads flasdfjaksfhj ajsdfhasjklfhflah</span>
                  <h3 className="text-[13px] text-red-400 font-semibold mt-6">Dec 2023 - Present</h3>
                  <h2 className="bg-white p-2 rounded-md text-black text-[13px] font-semibold">Maaz informatics</h2>
                </div>}/>
                
              </div>


                
          </div>

          {/* SVG IMAGE */}
          <div className="hidden lg:block w-full z-50">
              <Brain scrollYProgress={scrollYProgress}/>
          </div>
        </div>
    </motion.div>
  )
}

export default AboutPage