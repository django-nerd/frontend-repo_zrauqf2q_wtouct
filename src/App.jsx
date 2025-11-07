import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Impact from './components/Impact';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Powering industry with clean biomass energy</h2>
                <p className="mt-4 text-slate-600">Wonder Wink manufactures premium biomass pellets engineered for efficiency, reliability, and low emissions. Our end-to-end operations—from sourcing to logistics—are optimized to meet the energy needs of manufacturing plants, commercial facilities, and institutional boilers.</p>
                <ul className="mt-6 grid gap-3">
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" /><span><strong>Consistent Quality:</strong> tightly controlled moisture, ash, and durability index.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" /><span><strong>Lower Emissions:</strong> reduced SOx/NOx vs. coal and residual fuel oil.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" /><span><strong>Flexible Supply:</strong> bags, big bags, and bulk delivery with just‑in‑time scheduling.</span></li>
                </ul>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1564301392621-315001dc6a8d?q=80&w=1400&auto=format&fit=crop"
                    alt="Biomass pellet production line"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Process />
        <Impact />
        <Contact />
        <footer className="border-t border-slate-200 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-slate-500">© {new Date().getFullYear()} Wonder Wink. All rights reserved.</p>
              <div className="text-sm text-slate-500">Made with renewable ambition.</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
