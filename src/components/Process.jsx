import { Recycle, Factory, Flame, Leaf, Droplets } from 'lucide-react';

const steps = [
  {
    title: 'Feedstock Selection',
    icon: <Leaf className="h-5 w-5 text-emerald-700" />,
    content:
      'We partner with regional farms and mills to source clean agro-residues and wood by-products that meet strict moisture and ash thresholds.',
  },
  {
    title: 'Drying & Size Reduction',
    icon: <Droplets className="h-5 w-5 text-emerald-700" />,
    content:
      'Material is dried to optimal moisture and milled to a uniform size distribution for consistent densification and combustion.',
  },
  {
    title: 'Pelletizing',
    icon: <Factory className="h-5 w-5 text-emerald-700" />,
    content:
      'High-pressure pellet presses form durable pellets with minimal binder usage, ensuring high bulk density and mechanical strength.',
  },
  {
    title: 'Screening & Packaging',
    icon: <Recycle className="h-5 w-5 text-emerald-700" />,
    content:
      'Fines are screened out, quality is tested (calorific value, ash, durability index), then pellets are bagged or loaded in bulk.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Manufacturing Process</h2>
          <p className="mt-3 text-slate-600">A precise, quality-first approach to renewable fuel production.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-slate-900 p-6 sm:p-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">Performance at a Glance</h3>
              <p className="mt-2 text-slate-300">Typical specifications for Wonder Wink industrial-grade pellets.</p>
              <ul className="mt-4 grid gap-3 text-slate-200 sm:grid-cols-2">
                <li className="rounded-md bg-white/10 p-3">
                  <span className="block text-sm text-slate-300">Gross Calorific Value</span>
                  <span className="text-lg font-bold">17–19 MJ/kg</span>
                </li>
                <li className="rounded-md bg-white/10 p-3">
                  <span className="block text-sm text-slate-300">Ash Content</span>
                  <span className="text-lg font-bold">≤ 2.0%</span>
                </li>
                <li className="rounded-md bg-white/10 p-3">
                  <span className="block text-sm text-slate-300">Moisture</span>
                  <span className="text-lg font-bold">≤ 10%</span>
                </li>
                <li className="rounded-md bg-white/10 p-3">
                  <span className="block text-sm text-slate-300">Bulk Density</span>
                  <span className="text-lg font-bold">650–750 kg/m³</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-emerald-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1606167668584-78701c57f13c?q=80&w=1200&auto=format&fit=crop"
                  alt="Biomass pellets"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="-mt-6 ml-auto w-2/3 rounded-xl border border-slate-200 bg-white p-4 shadow">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-semibold text-slate-800">CO₂ Savings</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">Up to 80% lower lifecycle emissions vs. coal, depending on feedstock and logistics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
