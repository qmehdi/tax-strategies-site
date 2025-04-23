
// import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900 px-6 py-12">
          <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            Strategic Wealth Planning
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tax-efficient strategies for building, protecting, and passing on your wealth. Specialized in life insurance, retirement income, and advanced tax planning for high-net-worth individuals.
          </p>
          <div className="mt-8">
            <button className="text-lg px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg inline-flex items-center transition-all">
              Schedule Your Strategy Call <ArrowRight className="ml-2" />
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 shadow-xl bg-white rounded-2xl border border-blue-100 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Tax Planning</h2>
            <p className="text-gray-600">
              Legally minimize your tax liability and keep more of what you earn with proactive strategies designed for high earners.
            </p>
          </div>

          <div className="p-6 shadow-xl bg-white rounded-2xl border border-blue-100 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Indexed Universal Life Insurance</h2>
            <p className="text-gray-600">
              Leverage market-linked returns with downside protection to grow tax-free income and provide a legacy.
            </p>
          </div>

          <div className="p-6 shadow-xl bg-white rounded-2xl border border-blue-100 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Retirement Strategies</h2>
            <p className="text-gray-600">
              Build predictable retirement income and financial independence using a mix of safe-growth tools and long-term planning.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
