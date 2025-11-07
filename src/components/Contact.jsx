import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s power your operations sustainably</h2>
            <p className="mt-3 text-slate-600">Speak with our biomass specialists for pricing, logistics, and technical compatibility.</p>

            <div className="mt-8 grid gap-4">
              <a href="mailto:sales@wonderwink.energy" className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700 hover:bg-slate-50">
                <Mail className="h-5 w-5 text-emerald-700" /> sales@wonderwink.energy
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700 hover:bg-slate-50">
                <Phone className="h-5 w-5 text-emerald-700" /> +1 (234) 567-890
              </a>
              <div className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700">
                <MapPin className="h-5 w-5 text-emerald-700" /> 120 Green Loop, Industrial Estate, Springfield
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input type="text" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-slate-700">Company</label>
                <input type="text" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} required className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
            </div>
            <button type="submit" className="mt-4 w-full rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Send Inquiry</button>
            <p className="mt-2 text-center text-xs text-slate-500">We typically respond within 1 business day.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
