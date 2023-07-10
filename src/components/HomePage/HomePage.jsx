import home_page from "@/content/en/home_page"
import Link from "next/link"
import { useState } from "react"
import Typewriter from "typewriter-effect"

/**
 * Render the home page.
 *
 * @returns {JSX.Element} The rendered home page.
 */
export default function HomePage() {
  // Define colors for the roles
  const colors = ["#9A99FF", "#2FCBEF", ""]
  // Define hover colors for the roles
  const hoverColors = ["#E6DB74", "#E6DB74", "#2FCBEF"]
  // Define state for background colors of roles
  const [bgColor, setBgColor] = useState({})
  // Destructure sections from home_page object
  const {
    hero_section,
    about_me_section,
    portfolio_section,
    services_section,
    contact_me_section,
  } = home_page
  return (
    <section className='text-center'>
      {/* Hero Section */}
      <div className='hero_section mt-24'>
        <h2 className='text-xl text-slate-200'>{hero_section.introduction}</h2>
        <h1 className='text-3xl md:text-[400%] lg:text-[700%] mt-10 flex justify-center'>
          <span className='text-slate-200'>{'{" '}</span>
          <Typewriter
            options={{
              strings: hero_section.roles,
              autoStart: true,
              loop: true,
            }}
          />
          <span className='text-slate-200'>{' "}'}</span>
        </h1>
        <h2 className='inline-block rotate-90 text-3xl my-12 text-slate-200'>
          <Link href='#about_me_section'>{"==>"}</Link>
        </h2>
        <div className='bg-hero-img-1 bg-fixed'>
          <div>
            <div className='pixels_effect'>
              <h2 className='h2 py-36 lg:py-44'></h2>
            </div>
          </div>
        </div>
      </div>
      {/* About Me Section */}
      <div id='about_me_section' className='about_me mt-28'>
        <div>
          <h1 className='text-3xl text-[#9A99FF]'>{"{/}"}</h1>
          <h1 className='text-slate-200 text-3xl md:text-[400%] lg:text-[700%] mt-8'>
            {about_me_section.title}
          </h1>
          <h2 className='w-[40%] mx-auto mt-10 font-medium text-lg'>
            {about_me_section.leading}
          </h2>
        </div>
        <div className='mx-8 border-t-[1px] border-gray-600 mt-10'>
          <span className='flex flex-col md:flex-row text-start'>
            <h1 className='text-5xl text-zinc-100 underline w-[100%] px-12 py-10'>
              {about_me_section.experience}
            </h1>
            <div className='border-[1px] border-gray-600'></div>
            <h1 className='text-2xl w-[100%] px-12 py-10'>
              {about_me_section.description}
            </h1>
          </span>
          <Link
            href=''
            className='bg-sky-500 text-2xl px-8 py-3 text-zinc-100 hover:bg-[#9A99FF] transition-colors'
          >
            {"{read_More}"}
          </Link>
        </div>
      </div>
      {/* Portfolio Section */}
      <div className='portfolio_section mt-28'>
        <div className='border-b-[1px] border-gray-600 pb-8'>
          <h1 className='text-3xl text-[#9A99FF]'>{"(!)"}</h1>
          <h1 className='text-slate-200 text-3xl md:text-[400%] lg:text-[700%] mt-8'>
            {portfolio_section.title}
          </h1>
          <h2 className='w-[40%] mx-auto mt-10 font-medium text-lg'>
            {about_me_section.leading}
          </h2>
        </div>
      </div>
      {/* Services Section */}
      <div className='services_section mt-28'>
        <div>
          <h1 className='text-3xl text-[#9A99FF]'>{"(!)"}</h1>
          <h1 className='text-slate-200 text-3xl md:text-[400%] lg:text-[700%] mt-8'>
            {services_section.title}
          </h1>
          <h2 className='w-[40%] mx-auto mt-10 font-medium text-lg'>
            {services_section.leading}
          </h2>
        </div>
        <div className='mt-16'>
          {services_section.roles.map((role, index) => {
            const color = colors[index % colors.length]
            const bgColors = bgColor[index] || ""
            return (
              <h1
                style={{
                  color: color,
                  backgroundColor: bgColors,
                }}
                onMouseEnter={() =>
                  setBgColor((prevBgColors) => ({
                    ...prevBgColors,
                    [index]: hoverColors[index % hoverColors.length],
                  }))
                }
                onMouseLeave={() =>
                  setBgColor((prevBgColors) => ({
                    ...prevBgColors,
                    [index]: "",
                  }))
                }
                key={index}
                className='cursor-text text-[100%] md:text-[300%] lg:text-[600%] border-2 border-gray-600 flex justify-center mt-5'
              >
                <span className='text-slate-200'>{'{" '}</span>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(role).start()
                  }}
                />
                <span className='text-slate-200'>{' "}'}</span>
              </h1>
            )
          })}
        </div>
        <div className='mt-12'>
          <Link
            href=''
            className='bg-sky-500 text-2xl px-8 py-3 text-zinc-100 hover:bg-[#9A99FF] transition-colors'
          >
            {"{all_services}"}
          </Link>
        </div>
      </div>
      {/* Contact Me Section */}
      <div className='contact_me_section mt-28'>
        <div className='bg-hero-img-2 bg-fixed'>
          <div>
            <div className='pixels_effect'>
              <h2 className='h2 py-36 lg:py-44'></h2>
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <h1 className='text-3xl text-[#9A99FF]'>{"{*}"}</h1>
          <h1 className='text-slate-200 text-3xl md:text-[400%] lg:text-[700%] mt-8'>
            {contact_me_section.title}
          </h1>
          <h2 className='w-[40%] mx-auto mt-10 font-medium text-lg'>
            {contact_me_section.leading}
          </h2>
        </div>
        <form action='' className='mt-12 w-full md:w-[80%] md:mx-auto'>
          <input
            type='text'
            className='w-full bg-transparent border-b-2 block border-gray-600 focus:border-[#9A99FF] outline-none pb-4 placeholder-[#9A99FF] caret-[#9A99FF] transition-colors'
            placeholder='   _name*'
          />
          <input
            type='email'
            className='w-full bg-transparent border-b-2 block border-gray-600 focus:border-[#9A99FF] outline-none pb-4 placeholder-[#9A99FF] caret-[#9A99FF] transition-colors'
            placeholder='   _email*'
          />
          <textarea
            rows={10}
            className='w-full bg-transparent border-b-2 block border-gray-600 focus:border-[#9A99FF] outline-none pb-4 placeholder-[#9A99FF] caret-[#9A99FF] transition-colors'
            placeholder='   _message*'
          />
          <button
            className='px-8 py-3 bg-[#2FCBEF] text-zinc-100 mt-8'
            type='submit'
          >
            {"{Send}"}
          </button>
        </form>
      </div>
    </section>
  )
}
