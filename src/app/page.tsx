'use client'
import Image from "next/image";
import {motion} from "framer-motion"

export default function Home() {
  return (
    <motion.div className="h-full" initial= {{y: "-100vh"}} animate={{y: "0%"}} transition={{duration: 1,}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-8">
        {/* IMAGE */}
      <div className="h-1/3 md:h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>



        {/* TEXT */}
      <div className="h-2/3 lg:h-full lg:w-1/2 flex flex-col items-start justify-center gap-8">
        <h1 className="text-4xl md:6xl font-bold px-2">Mobile Application Developer</h1>
        <p className="text-md md:text-xl font-medium px-2">A dedicated Flutter Developer with more then 2 years of hands-on experience, specializing in Dart and the Flutter framework. I excel in building responsive and visually appealing cross-platform mobile applications. I have successfully developed and deployed applications for both Android and iOS, including a transition from native Android to Flutter for a unified codebase. I have a proven track record in designing robust APIs with Node.Js and have worked on several personal projects, enhancing user experiences in health, marketplace, paraphrasing, task management, and fitness applications.</p>
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact me</button>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
