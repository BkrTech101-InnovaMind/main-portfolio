import { useEffect, useRef, useState } from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"

// This function is responsible for rendering a layout component.
// It sets up a resize event listener to dynamically calculate the number of
// items to display in the aside element based on the height of its children.
// The layout component consists of an aside element and a main element.

/**
 * Render a layout component.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The children of the layout component.
 * @returns {JSX.Element} The rendered layout component.
 */
export default function Layout({ children }) {
  const [numbers, setNumbers] = useState([]) // State to store the numbers to display in the aside element
  const asideRef = useRef(null) // Reference to the aside element

  useEffect(() => {
    /**
     * Handle the resize event.
     */
    const handleResize = () => {
      const childrenHeight = asideRef.current.scrollHeight // Get the height of the children of the aside element
      setNumbers(
        Array.from({ length: Math.floor(childrenHeight / 23) }, (_, i) => i + 1) // Calculate the numbers based on the height
      )
    }

    window.addEventListener("resize", handleResize) // Add resize event listener
    handleResize() // Call the handleResize function initially

    return () => window.removeEventListener("resize", handleResize) // Remove resize event listener on cleanup
  }, []) // Run the effect only once on mount

  return (
    <div className='flex max-w-screen-2xl mx-auto'>
      <aside className='border-r-[1px] border-gray-700 px-4 py-4'>
        {numbers.map((number) => (
          <h1 key={number}>{number}</h1> // Render the numbers in the aside element
        ))}
      </aside>
      <span className='flex-1 pr-10 pt-5'>
        <Navbar /> {/* Render the Navbar component */}
        <main className='mt-10' ref={asideRef}>
          {children} {/* Render the children */}
        </main>
        <Footer /> {/* Render the Footer component */}
      </span>
    </div>
  )
}
