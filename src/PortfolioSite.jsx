import React, { useState } from "react";

export default function PortfolioSite() {
  const [open, setOpen] = useState(false);
  const navLink = "px-3 py-2 rounded-md hover:bg-gray-100";
  const section = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <nav className={`${section} flex items-center justify-between h-16`}>
          <a href="#home" className="font-bold text-xl">Urangua • Portfolio</a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
          <ul className="hidden md:flex items-center gap-2">
            <li><a className={navLink} href="#services">Services</a></li>
            <li><a className={navLink} href="#work">Portfolio</a></li>
            <li><a className={navLink} href="#about">About</a></li>
            <li><a className={navLink} href="#contact">Contact</a></li>
          </ul>
        </nav>
        {open && (
          <ul className="md:hidden border-t p-2 space-y-2">
            <li><a className={navLink} href="#services" onClick={() => setOpen(false)}>Services</a></li>
            <li><a className={navLink} href="#work" onClick={() => setOpen(false)}>Portfolio</a></li>
            <li><a className={navLink} href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a className={navLink} href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        )}
      </header>

      {/* Hero */}
      <section id="home" className={`${section} py-16 text-center`}>
        <h1 className="text-4xl md:text-5xl font-extrabold">Remote Work Portfolio</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Completed freelance projects across design, writing, VA, WordPress, data, and AI editing.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#work" className="px-5 py-2 rounded-xl border hover:bg-gray-50">See portfolio</a>
          <a href="mailto:batmunkhurangua@gmail.com" className="px-5 py-2 rounded-xl bg-black text-white">Contact me</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 bg-gray-50">
        <div className={section}>
          <h2 className="text-2xl font-bold mb-6">Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t:"Graphic Design", d:"Logos, social kits, banners (Canva/Illustrator)." },
              { t:"Content Writing", d:"SEO articles & product descriptions (EN/MN)." },
              { t:"Virtual Assistance", d:"Inbox, scheduling, Notion/Excel workflows." },
              { t:"WordPress Mgmt", d:"Themes, plugins, blog updates (MoneyHack.MN)." },
              { t:"Data Entry", d:"Accurate, large-volume logistics & invoice data." },
              { t:"AI Image Editing", d:"Midjourney/Seedream/Photoshop before→after." },
            ].map((s, i) => (
              <article key={i} className="rounded-2xl border p-5 hover:shadow-sm">
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="text-gray-600 mt-2">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className={`${section} py-12`}>
        <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
        <p className="text-gray-600 mb-6">Жишээ ажлууд (дараа нь өөрийн зураг/линкээр солиорой):</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title:"Logo & Social Kit", img:"https://picsum.photos/seed/design1/600/400", href:"#"},
            { title:"SEO Blog Article", img:"https://picsum.photos/seed/writing1/600/400", href:"#"},
            { title:"VA: Notion Dashboard", img:"https://picsum.photos/seed/va1/600/400", href:"#"},
            { title:"WordPress Theme Tuning", img:"https://picsum.photos/seed/wp1/600/400", href:"#"},
            { title:"Data Entry Sheet", img:"https://picsum.photos/seed/data1/600/400", href:"#"},
            { title:"AI Edit: Before/After", img:"https://picsum.photos/seed/ai1/600/400", href:"#"},
          ].map((p, i) => (
            <a key={i} href={p.href} className="group rounded-2xl overflow-hidden border hover:shadow-sm">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition" />
                          <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-500">Click to open (replace with your link)</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-500">
          ✱ Өөрийн зураг оруулах бол <code>public/</code> дотор байрлуулаад <code>src</code>-ыг <code>/my-image.jpg</code> гэж солиорой.
        </div>
      </section>

      {/* About */}
      <section id="about" className={`${section} py-12`}>
        <h2 className="text-2xl font-bold mb-3">About</h2>
        <p className="text-gray-600 max-w-3xl">
          Би зайны ажлын хэд хэдэн чиглэлээр найдвартай, хугацаанд нь гүйцэтгэдэг. Туршилтын богино ажил авч чадна.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-gray-50">
        <div className={section}>
          <h2 className="text-2xl font-bold mb-3">Contact</h2>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <a href="mailto:batmunkhurangua@gmail.com" className="px-5 py-2 rounded-xl bg-black text-white">
              Email me
            </a>
            <a
              href="https://www.fiverr.com/s?query=batmunkh%20urungua"
              target="_blank" rel="noreferrer"
              className="px-5 py-2 rounded-xl border"
            >
              View Fiverr
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-500 border-t">
        © {new Date().getFullYear()} Urangua B — <a className="underline" href="mailto:batmunkhurangua@gmail.com">batmunkhurangua@gmail.com</a>
      </footer>
    </main>
  );
}
