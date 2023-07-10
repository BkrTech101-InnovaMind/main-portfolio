import navbar from "@/content/en/navbar"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { RxHamburgerMenu } from "react-icons/rx"

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { logo, links } = navbar

  return (
    <nav className='text-2xl'>
      <div className='flex justify-between items-center pl-4'>
        {/* Logo */}
        <div className='text-[#f9f9f9]'>
          <Link href={logo.href}>
            <h2>{logo.title}</h2>
          </Link>
          {/* Description */}
          <h3 className='text-end font-normal text-[#9897FC] leading-3'>
            web_dev
          </h3>
        </div>
        {/* Large Screens */}
        <div className='hidden lg:block'>
          <ul className='flex gap-12'>
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className={`${
                    router.pathname === link.href
                      ? "text-[#2FCBEF]"
                      : "md:hover:text-[#9594F5] transition"
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Small Screens Icons*/}
        <span className='lg:hidden text-[#2FCBEF]'>
          <RxHamburgerMenu
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              isOpen ? "hidden" : "cursor-pointer"
            } hover:animate-[bounce_1.5s_linear_1]`}
          />
          <AiOutlineClose
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              !isOpen ? "hidden" : "cursor-pointer"
            } hover:animate-[spin_1.5s_linear_1]`}
          />
        </span>
      </div>
      {isOpen && (
        <ul className='animate-slide-down bg-[#212121] mt-5 fixed w-full z-10'>
          {links.map((link) => (
            <li key={link.name} className='border-b border-gray-700'>
              <Link
                className={`${
                  router.pathname === link.href
                    ? "text-[#2FCBEF] bg-[#2a2a2a]"
                    : "md:hover:text-[#9594F5] transition"
                } block pt-2 h-12`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
