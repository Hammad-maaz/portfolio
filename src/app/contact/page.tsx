'use client'
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <motion.div className="h-full" initial= {{y: "-100vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
      <div className=''>Contact</div>
    </motion.div>
  )
}

export default Contact