
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Strategic Wealth Planning
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tax-efficient strategies for building, protecting, and passing on your wealth. Specialized in life insurance, retirement income, and advanced tax planning for high-net-worth individuals.
          </p>
          <div className="mt-8">
            <Button className="text-lg px-6 py-4">
              Schedule Your Strategy Call <ArrowRight className="ml-2" />
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 shadow rounded-xl border">
            <h2 className="text-2xl font-semibold mb-2">Tax Planning</h2>
            <p className="text-gray-600">
              Legally minimize your tax liability and keep more of what you earn with proactive strategies designed for high earners.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl border">
            <h2 className="text-2xl font-semibold mb-2">Indexed Life Insurance</h2>
            <p className="text-gray-600">
              Leverage market-linked returns with downside protection to grow tax-free income and provide a legacy.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl border">
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
