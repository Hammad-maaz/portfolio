'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import Skills from "../components/skills"
import Experience from "../components/experience"

const AboutPage = () => {
  return (
    <motion.div className="" initial= {{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1,}}>
       <div className="flex flex-col lg:flex-row pb-10">
          <div className="flex flex-col px-4 sm:px-10 md:px-12 lg:px-20 xl:px-48 gap-32 md:gap-32 lg:gap-42 xl:gap-64 min-h-screen" >

            {/* TEXT CONTAINER */}
              {/* BIOGRAPHY */}
              <div className="flex flex-col gap-10 w-1/3">
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
              <div className="flex flex-col w-1/3">
                <h1 className="text-2xl font-bold">Experience</h1>
                <Experience showLeft={true} children={<div className="">Hello</div>}/>
                <Experience showLeft={false} children={<div className="">Hello</div>}/>
                <Experience showLeft={true} children={<div className="">Hello</div>}/>
              </div>


                {/* SVG IMAGE */}
              <div className="hidden">

              </div>
          </div>
        </div>
    </motion.div>
  )
}

export default AboutPage