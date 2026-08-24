import React from 'react'

const Hero = () => {
  return (
    <>
    <section
      className="relative min-h-[580px] bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/Hero_image.png')" }}
    >
      <div className="mx-auto flex min-h-[580px] max-w-[1440px] items-center justify-end px-6 md:px-12 lg:px-16">
        
        <div className="w-full max-w-[520px] rounded-[10px] bg-[#FFF3E3] px-8 py-10 md:px-10 md:py-12">
          
          <p className="mb-2 text-[16px] font-semibold tracking-[3px] text-[#333333]">
            New Arrival
          </p>

          <h1 className="mb-4 text-[40px] font-bold leading-[1.3] text-[#B88E2F] md:text-[46px]">
            Discover Our
            <br />
            New Collection
          </h1>

          <p className="mb-10 max-w-[440px] text-[16px] leading-6 text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis.
          </p>

          <button className="bg-[#B88E2F] px-12 py-5 text-[14px] font-bold text-white transition hover:bg-[#a47c25]">
            BUY NOW
          </button>

        </div>

      </div>
    </section>
    </>
  )
}

export default Hero
