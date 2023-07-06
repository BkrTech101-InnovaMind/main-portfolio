import Link from "next/link"
import Typewriter from "typewriter-effect"
import { homePageContent } from "./homePageContent"

export default function HomePage() {
  const { hero_section, about_me_section } = homePageContent
  return (
    <section className='text-center'>
      <div className='hero_section mt-24'>
        <h2 className='text-center text-xl text-slate-200'>
          {hero_section.introduction}
        </h2>
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
      <div id='about_me_section' className='about_me mt-28 text-center'>
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
          <span className='flex flex-col md:flex-row'>
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
    </section>
  )
}
