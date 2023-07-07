import { useEffect, useRef, useState } from "react"
import Navbar from "../Navbar"

export default function Layout({ children }) {
  const [numbers, setNumbers] = useState([])
  const asideRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const childrenHeight = asideRef.current.scrollHeight
      setNumbers(
        Array.from(
          { length: Math.floor(childrenHeight / 21.6) },
          (_, i) => i + 1
        )
      )
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className='flex max-w-screen-2xl mx-auto'>
      <aside className='border-r-[1px] border-gray-700 px-4 py-4'>
        {numbers.map((number) => (
          <h1 key={number}>{number}</h1>
        ))}
      </aside>
      <span className='flex-1 pr-10 pt-5'>
        <Navbar />
        <main className='mt-10' ref={asideRef}>
          {children}
        </main>
      </span>
    </div>
  )
}
