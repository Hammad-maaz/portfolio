'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


const NavLinks = ({links}: {links: {url: string, name: string}}) => {
    const pathName = usePathname()
    console.log(pathName)

  return (
    <Link href={links.url} key={links.url} className={`rounded-md ${pathName === links.url && "bg-black p-1 text-white"}`}>{links.name}</Link>
  )
}

export default NavLinks