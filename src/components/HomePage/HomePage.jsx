import Link from "next/link"
import TypeWriter from "../TypeWriter"

export default function HomePage() {
  return (
    <section className='mt-24 text-center'>
      <h2 className='text-center text-xl text-slate-200'>
        {"//"} HI, I&apos;M ABOBAKR, A...
      </h2>
      <TypeWriter
        isSingleText={false}
        endingTimer={2000}
        texts={["front-end developer", "mobile apk developer", "web designer"]}
      />
      <h2 className='inline-block rotate-90 text-3xl my-10'>
        <Link href='#'>{"==>"}</Link>
      </h2>
      <div className='h-48 bg-hero-img bg-scroll'></div>
    </section>
  )
}
