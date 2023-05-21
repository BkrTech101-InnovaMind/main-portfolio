import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.png' />
        <title>Abobakr Portfolio</title>
      </Head>

      <section className='bg-gradient'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap lg:flex-nowrap justify-center h-screen relative'>
            <div className='my-auto font-poppins text-gray-200 text-center lg:text-left'>
              <h1 className='font-medium text-5xl py-3'>
                The website is in <br /> maintenance mode
              </h1>
              <p className='lg:w-5/6'>
                I have done all the technical improvements and will be back very
                soon. Thank you for your patience!!
              </p>
            </div>

            <div className='my-auto text-center w-3/4 lg:w-2/5'>
              <Image
                width={1920}
                height={1080}
                className='rounded-full image1 animate-moveY'
                src='/img1.jpg'
                alt='image1'
              />
              <Image
                width={1920}
                height={1080}
                className='image2 animate-rotateZ lg:ml-80'
                src='/img2.png'
                alt='image2'
              />
              <Image
                width={1920}
                height={1080}
                className='image3 animate-rotateZ'
                src='/img3.png'
                alt='image3'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
