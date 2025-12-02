export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#1A0B2E] flex flex-col items-center px-4 sm:px-6 md:px-10 py-20"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-6">
        Contact Me
      </h1>

      <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-gray-400 max-w-2xl text-center mb-10">
        Ready to turn your ideas into reality? Reach out today, and let's embark on a journey of digital transformation together.
      </p>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-[#23113D] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10 backdrop-blur-md">
        <form className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-600/40 bg-[#2B174A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-600/40 bg-[#2B174A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg border border-gray-600/40 bg-[#2B174A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-300"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="self-start sm:self-center md:self-start px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
