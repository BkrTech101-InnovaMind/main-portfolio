import { useEffect, useState } from "react"
import Navbar from "../Navbar"

export default function Layout({ children }) {
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      setNumbers(
        Array.from({ length: Math.floor(windowWidth / 60) }, (_, i) => i + 1)
      )
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div className='flex h-screen max-w-screen-2xl mx-auto'>
        <div className='mr-10 md:mr-12 '>
          <aside className='border-r border-[1px] border-gray-700 h-screen px-4 text-lg fixed'>
            {numbers.map((number) => (
              <div key={number}>{number}</div>
            ))}
          </aside>
        </div>
        <span className='flex-1 pr-10 pt-5'>
          <Navbar />
          <main className='mt-10'>{children}</main>
        </span>
      </div>
    </>
  )
}
