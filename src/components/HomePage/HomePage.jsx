import Link from "next/link"
import Typewriter from "typewriter-effect"
import { homePageContent } from "./homePageContent"

export default function HomePage() {
  const { introduction, roles } = homePageContent
  return (
    <section className='mt-24 text-center'>
      <div className='hero_section'>
        <h2 className='text-center text-xl text-slate-200'>{introduction}</h2>
        <h1 className='text-3xl text-[200%] md:text-[400%] lg:text-[700%] mt-8 flex justify-center'>
          <span className='text-slate-200'>{'{" '}</span>
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
            }}
          />
          <span className='text-slate-200'>{' "}'}</span>
        </h1>
        <h2 className='inline-block rotate-90 text-3xl my-12 text-slate-200'>
          <Link href='#'>{"==>"}</Link>
        </h2>
        <div className='bg-hero-img-1 bg-fixed'>
          <div>
            <h2 className='h2 py-44'></h2>
          </div>
        </div>
      </div>
      <div className='about_me'>
        <h1 className='text-3xl text-[#9A99FF]'>{"{/}"}</h1>
      </div>
    </section>
  )
}
