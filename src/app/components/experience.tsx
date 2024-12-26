const Experience = ({showLeft, children}: {showLeft: boolean, children: React.ReactNode}) => {
  return (
    <div className='flex gap-8'>
        {/* LEFT SIDE */}
        <div className="px-8 flex items-center justify-center w-1/3">
            {showLeft && <div className="">{children}</div>}
        </div>


        {/* CENTER */}
        <div className="flex flex-col items-center justify-center w-1/7">
            <div className="w-[25px] h-[25px] rounded-full bg-white border-4 border-red-500"></div>
            <div className="w-[20%] h-40 rounded-full bg-black bg-opacity-70"></div>
        </div>


        {/* RIGHT SIDE */}
        <div className="px-8 flex items-center justify-center w-1/3">
            {!showLeft && <div className="">{children}</div>}
        </div>
    </div>
  )
}

export default Experience