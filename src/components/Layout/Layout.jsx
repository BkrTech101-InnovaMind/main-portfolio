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
      <div className='flex h-screen'>
        <aside className='border-r border-white h-screen px-4 text-lg'>
          {numbers.map((number) => (
            <div key={number}>{number}</div>
          ))}
        </aside>
        <span className='flex-1 pr-10 pt-5'>
          <Navbar />
          <main className='mt-10'>{children}</main>
        </span>
      </div>
    </>
  )
}
