import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCalendarDays,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar/Navbar";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";

const blogPosts = [
  {
    id: 1,
    image: "/blog1.png",
    title: "Going all-in with millennial design",
    category: "Wood",
    date: "14 Oct 2022",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Modern furniture design brings together comfort, functionality and timeless style.",
  },
  {
    id: 2,
    image: "/blog2.png",
    title: "Exploring new ways of decorating",
    category: "Handmade",
    date: "14 Oct 2022",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Discover simple and creative ways to transform your living space.",
  },
  {
    id: 3,
    image: "/blog3.png",
    title: "Handmade pieces that took time to make",
    category: "Wood",
    date: "14 Oct 2022",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Carefully crafted furniture brings character and warmth into every room.",
  },
];

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

const recentPosts = [
  {
    id: 1,
    image: "./blog1.png",
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
  },
  {
    id: 2,
    image: "/blog2.png",
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
  },
  {
    id: 3,
    image: "/blog3.png",
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
  },
 
];

const Blog = () => {
  return (
    <>
    <Navbar />
      {/* Hero */}
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
            Blog
          </h1>

          <div className="mt-1 flex items-center justify-center gap-2 text-[12px]">
            <span className="font-semibold">Home</span>
            <span>›</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      {/* Main Blog Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2.2fr_1fr]">

          {/* LEFT SIDE */}
          <div className="space-y-14">
            {blogPosts.map((post) => (
              <article key={post.id}>

                {/* Image */}
                <div className="overflow-hidden rounded-[10px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[300px] w-full object-cover md:h-[420px]"
                  />
                </div>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-6 text-[12px] text-[#9F9F9F]">

                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} />
                    <span>{post.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faTag} />
                    <span>{post.category}</span>
                  </div>

                </div>

                {/* Title */}
                <h2 className="mt-4 text-[24px] font-medium text-black md:text-[28px]">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-[13px] leading-6 text-[#9F9F9F]">
                  {post.description}
                </p>

                {/* Read More */}
                <button
                  type="button"
                  className="mt-5 border-b border-black pb-2 text-[13px] font-medium"
                >
                  Read more
                </button>

              </article>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 pt-6">
              <button className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#B88E2F] text-sm text-white">
                1
              </button>

              <button className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#F9F1E7] text-sm">
                2
              </button>

              <button className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#F9F1E7] text-sm">
                3
              </button>

              <button className="rounded bg-[#F9F1E7] px-5 py-[10px] text-sm">
                Next
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                className="h-[50px] w-full rounded-[8px] border border-[#9F9F9F] px-4 pr-12 outline-none focus:border-black"
              />

              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[15px] text-black"
              />
            </div>

            {/* Categories */}
            <div className="mt-10 px-3">
              <h3 className="text-[20px] font-medium">
                Categories
              </h3>

              <div className="mt-7 space-y-5">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between text-[13px] text-[#9F9F9F]"
                  >
                    <span>{category.name}</span>
                    <span>{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mt-16 px-3">
              <h3 className="text-[20px] font-medium">
                Recent Posts
              </h3>

              <div className="mt-7 space-y-6">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-[65px] w-[65px] rounded-[8px] object-cover"
                    />

                    <div>
                      <h4 className="max-w-[150px] text-[13px] font-medium leading-5">
                        {post.title}
                      </h4>

                      <p className="mt-1 text-[11px] text-[#9F9F9F]">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>
      <Features />
      <Footer />
    </>
  );
};

export default Blog;