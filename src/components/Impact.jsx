import { Leaf, Trees, Factory, Recycle } from 'lucide-react';

export default function Impact() {
  const stats = [
    { label: 'Fossil Fuel Offset', value: '1,200+ tCO₂e/yr', icon: <Factory className="h-5 w-5" /> },
    { label: 'Waste Upcycled', value: '8,000+ tons/yr', icon: <Recycle className="h-5 w-5" /> },
    { label: 'Sustainable Sourcing', value: '100% certified', icon: <Trees className="h-5 w-5" /> },
    { label: 'Plant Efficiency', value: '92% uptime', icon: <Leaf className="h-5 w-5" /> },
  ];

  return (
    <section id="impact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Measurable Environmental Impact</h2>
          <p className="mt-3 text-slate-600">Turn waste into value while shrinking your carbon footprint.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                {s.icon}
              </div>
              <div className="text-2xl font-bold text-slate-900">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="aspect-video overflow-hidden rounded-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1400&auto=format&fit=crop"
                alt="Sustainable forest"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Infographic: From Residue to Reliable Heat</h3>
            <ol className="mt-4 grid gap-3 text-slate-700">
              <li className="rounded-md border border-emerald-100 bg-emerald-50 p-3"><strong>1.</strong> Agricultural/wood residues collected locally</li>
              <li className="rounded-md border border-emerald-100 bg-emerald-50 p-3"><strong>2.</strong> Drying and size reduction for uniformity</li>
              <li className="rounded-md border border-emerald-100 bg-emerald-50 p-3"><strong>3.</strong> Pelletizing and quality screening</li>
              <li className="rounded-md border border-emerald-100 bg-emerald-50 p-3"><strong>4.</strong> Storage, distribution, and on-site combustion</li>
              <li className="rounded-md border border-emerald-100 bg-emerald-50 p-3"><strong>5.</strong> Heat, steam, or power generation with reduced net CO₂</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
