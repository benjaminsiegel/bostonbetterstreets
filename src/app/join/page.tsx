export default function JoinPage() {
  return (
    <div className="bg-[#f0ece2] min-h-screen py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-6 text-center">
          Join <span className="text-[#13ec25]">Us</span>
        </h1>
        <p className="text-lg text-[#0a0a0a]/70 mb-10 text-center">
          Sign up to receive updates and get involved with the Boston Better Streets Coalition.
        </p>

        <div className="bg-white border-2 border-[#0a0a0a] p-8 shadow-[6px_6px_0px_0px_#0a0a0a]">
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSemMdPPy-7SJ0p5nr-EE9mgctE6f0fJATBc9CtYJ2BPdgX5Xw/viewform"
            method="GET"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-[#0a0a0a] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border-2 border-[#0a0a0a] focus:border-[#13ec25] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-[#0a0a0a] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border-2 border-[#0a0a0a] focus:border-[#13ec25] focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="neighborhood" className="block text-sm font-bold uppercase tracking-wider text-[#0a0a0a] mb-2">
                Neighborhood
              </label>
              <input
                type="text"
                id="neighborhood"
                name="neighborhood"
                className="w-full px-4 py-3 border-2 border-[#0a0a0a] focus:border-[#13ec25] focus:outline-none transition-colors"
                placeholder="Hyde Park, Jamaica Plain, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#13ec25] text-[#0a0a0a] font-bold uppercase tracking-wider text-lg hover:bg-[#0fc91f] transition-colors shadow-[4px_4px_0px_0px_#0a0a0a] hover:shadow-[6px_6px_0px_0px_#0a0a0a] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-[#0a0a0a]/50 text-center">
            We&apos;ll never share your information with third parties.
          </p>
        </div>
      </div>
    </div>
  );
}
