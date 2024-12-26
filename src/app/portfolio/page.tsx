'use client'
import {motion} from "framer-motion"

const Portfolio = () => {
  return (
    <motion.div className="" initial ={{y: "-100vh"}} animate= {{y: "0%"}} transition={{duration: 1,}}>
      <div className=''>Portfolio</div>
    </motion.div>
  )
}

export default Portfolio