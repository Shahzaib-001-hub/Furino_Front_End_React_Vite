import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Features from "../Components/Features/Features";

const Contact = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative flex h-[220px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/breadcrumb.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/45" />

        <div className="relative z-10 text-center">
          <img
            src="/logo_furniro.png"
            alt="Furniro"
            className="mx-auto w-[45px]"
          />

          <h1 className="text-[36px] font-medium text-black">
            Contact
          </h1>

          <div className="mt-1 flex items-center justify-center gap-2 text-[12px]">
            <span className="font-semibold">Home</span>
            <span>›</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-[28px] font-semibold text-black">
            Get In Touch With Us
          </h2>

          <p className="mt-3 text-[13px] leading-6 text-[#9F9F9F]">
            For More Information About Our Product & Services.
            Please Feel Free To Drop Us An Email. Our Staff
            Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="space-y-10 lg:px-10">

            {/* Address */}
            <div className="flex gap-5">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mt-1 text-[22px] text-black"
              />

              <div>
                <h3 className="text-[18px] font-semibold">
                  Address
                </h3>

                <p className="mt-1 max-w-[220px] text-[13px] leading-5 text-black">
                  236 5th SE Avenue, New York NY10000,
                  United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <FontAwesomeIcon
                icon={faPhone}
                className="mt-1 text-[22px] text-black"
              />

              <div>
                <h3 className="text-[18px] font-semibold">
                  Phone
                </h3>

                <p className="mt-1 text-[13px] leading-5">
                  Mobile: +(84) 546-6789
                </p>

                <p className="text-[13px] leading-5">
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex gap-5">
              <FontAwesomeIcon
                icon={faClock}
                className="mt-1 text-[22px] text-black"
              />

              <div>
                <h3 className="text-[18px] font-semibold">
                  Working Time
                </h3>

                <p className="mt-1 text-[13px] leading-5">
                  Monday-Friday: 9:00 - 22:00
                </p>

                <p className="text-[13px] leading-5">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <form className="space-y-6 lg:px-8">

            {/* Name */}
            <div>
              <label className="mb-2 block text-[13px] font-medium">
                Your name
              </label>

              <input
                type="text"
                placeholder="Abc"
                className="h-[55px] w-full rounded-[8px] border border-[#9F9F9F] px-5 text-sm outline-none placeholder:text-[#9F9F9F] focus:border-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-[13px] font-medium">
                Email address
              </label>

              <input
                type="email"
                placeholder="abc@def.com"
                className="h-[55px] w-full rounded-[8px] border border-[#9F9F9F] px-5 text-sm outline-none placeholder:text-[#9F9F9F] focus:border-black"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-[13px] font-medium">
                Subject
              </label>

              <input
                type="text"
                placeholder="This is optional"
                className="h-[55px] w-full rounded-[8px] border border-[#9F9F9F] px-5 text-sm outline-none placeholder:text-[#9F9F9F] focus:border-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-[13px] font-medium">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Hi! I'd like to ask about"
                className="w-full resize-none rounded-[8px] border border-[#9F9F9F] px-5 py-4 text-sm outline-none placeholder:text-[#9F9F9F] focus:border-black"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="rounded-[5px] bg-[#B88E2F] px-16 py-3 text-[13px] text-white transition hover:bg-[#9f7724]"
            >
              Submit
            </button>

          </form>

        </div>
      </section>
      <Features />
      <Footer />
    </>
  );
};

export default Contact;