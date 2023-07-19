import navbar from "@/content/en/navbar"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Footer() {
  const router = useRouter()
  const { logo, links } = navbar
  const isActiveLink = (link) => {
    return router.pathname === link.href
  }
  return (
    <footer className='pt-12 border-t-[1px] border-gray-600'>
      <div className='lg:w-[28%]'>
        <ul className='md:flex md:flex-wrap justify-start gap-5 text-xl md:leading-[5px] ml-[3.25rem]'>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className={`${
                  isActiveLink(link)
                    ? "text-[#2FCBEF]"
                    : "md:hover:text-[#9594F5] transition"
                } ${link.name == "_contact" ? "lg:ml-5" : ""}`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
