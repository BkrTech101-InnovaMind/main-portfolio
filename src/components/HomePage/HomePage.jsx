import Link from "next/link"
import Typewriter from "typewriter-effect"

export default function HomePage() {
  return (
    <section className='mt-24 text-center'>
      <h2 className='text-center text-xl text-slate-200'>
        {"//"} HI, I&apos;M ABOBAKR, A...
      </h2>
      <h1 className='text-3xl cursor-text text-[200%] md:text-[400%] lg:text-[700%] mt-8 border-2 flex justify-center py-3 md:py-6 lg:py-12'>
        <span className='text-slate-200'>{'{" '}</span>
        <Typewriter
          options={{
            strings: [
              "_front-end developer",
              "_mobile apk developer",
              "_web designer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <span className='text-slate-200'>{' "}'}</span>
      </h1>
      <h2 className='inline-block rotate-90 text-3xl my-12'>
        <Link href='#'>{"==>"}</Link>
      </h2>
      <div className='h-48 bg-hero-img bg-scroll'></div>
    </section>
  )
}
