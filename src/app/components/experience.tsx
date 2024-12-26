const Experience = ({showLeft, children}: {showLeft: boolean, children: React.ReactNode}) => {
  return (
    <div className='flex gap-4'>
        {/* LEFT SIDE */}
        <div className="flex items-center justify-center flex-1 px-4 pt-2 w-[2/3]">
            {showLeft ? <div className="">{children}</div> : <div className="px-12 md:px-14"></div>}
        </div>


        {/* CENTER */}
        <div className="flex flex-col items-center justify-center w-[60px]">
            <div className="w-[25px] h-[25px] rounded-full bg-white border-4 border-red-500"></div>
            <div className="w-[4px] h-full rounded-full bg-black bg-opacity-70"></div>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center flex-1 px-4 w-[2/3]">
            {!showLeft && <div className="">{children}</div>}
        </div>
    </div>
  )
}

export default Experience