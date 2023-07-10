import about_page from "@/content/en/about_page"
import Typewriter from "typewriter-effect"

export default function AboutMe() {
  const { title } = about_page
  return (
    <section className='text-center'>
      <h1 className='text-3xl text-[#2FCBEF] md:text-[400%] lg:text-[700%] mt-10 flex gap-8 justify-center'>
        <span className='text-slate-200'>{'{" '}</span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(title).pauseFor(8000).deleteAll(100).start()
          }}
          options={{
            loop: true,
          }}
        />
        <span className='text-slate-200'>{' "}'}</span>
      </h1>
    </section>
  )
}
