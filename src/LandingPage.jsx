import { ArrowRight, ShieldCheck, Banknote, LineChart } from "lucide-react";
import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));

    return () => revealElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900 font-sans">
            <header className="text-center mb-10">
  <div className="px-6 py-12 max-w-7xl mx-auto">
    <h1 className="text-6xl font-extrabold tracking-tight mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
      Strategic Wealth Planning
    </h1>
    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
      Tax-efficient strategies for building, protecting, and passing on your wealth. Specialized in life insurance, retirement income, and advanced tax planning for high-net-worth individuals.
    </p>
    <div className="mt-8">
      <a
        href="https://calendly.com/qmehdi110"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all"
      >
        Schedule Your Strategy Call <ArrowRight className="ml-2" />
      </a>
    </div>
  </div>
</header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 shadow-xl bg-white rounded-2xl border border-blue-100 hover:shadow-2xl transition-shadow reveal text-center group">
            <ShieldCheck className="mx-auto mb-4 text-blue-600 group-hover:animate-bounce transition-all" size={40} />
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">Tax Planning</h2>
            <p className="text-gray-600">
              Legally minimize your tax liability and keep more of what you earn with proactive strategies designed for high earners.
            </p>
          </div>

          <div className="p-6 shadow-xl bg-white rounded-2xl border border-blue-100 hover:shadow-2xl transition-shadow reveal text-center group">
            <Banknote className="mx-auto mb-4 text-blue-600 group-hover:animate-bounce transition-all" size={40} />
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">Indexed Accounts</h2>
            <p className="text-gray-600">
              Leverage market-linked returns with downside protection to grow tax-free income and provide a legacy.
            </p>
          </div>

          <div className="p-6 shadow-xl bg-white rounded-2xl border border-blue-100 hover:shadow-2xl transition-shadow reveal text-center group">
            <LineChart className="mx-auto mb-4 text-blue-600 group-hover:animate-bounce transition-all" size={40} />
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">Retirement Strategies</h2>
            <p className="text-gray-600">
              Build predictable retirement income and financial independence using a mix of safe-growth tools and long-term planning.
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-blue-100">
          <h3 className="text-3xl font-bold mb-6 text-blue-800">Get Your Free Strategy Blueprint</h3>
          <form
            className="grid gap-4"
            action="https://formspree.io/f/mrbqgkoz"
            method="POST"
          >
            <input
              type="hidden"
              name="_replyto"
              value="syedwfg@gmail.com,qmehdi110@gmail.com"
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Tell us a bit about your goals..."
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
            >
              Request My Blueprint
            </button>
          </form>
        </section>

      
    </div>
  );
}
