import { useEffect, useState } from "react"
import Navbar from "../Navbar"

export default function Layout({ children }) {
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight
      setNumbers(
        Array.from({ length: Math.floor(windowHeight) }, (_, i) => i + 1)
      )
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className='flex h-screen max-w-screen-2xl mx-auto'>
      <div className='mr-9'>
        <aside className='border-r-[1px] border-gray-700 h-screen px-2 py-4 fixed left-0'>
          {numbers.map((number) => (
            <h1 key={number}>{number}</h1>
          ))}
        </aside>
      </div>
      <span className='flex-1 pr-10 pt-5'>
        <Navbar />
        <main className='mt-10'>{children}</main>
      </span>
    </div>
  )
}
