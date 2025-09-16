import React from "react";

export default function PortfolioSite() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Remote Work Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A showcase of my completed remote freelance projects across different fields. 
          Passionate about delivering value and solving problems creatively.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">🖌️ Graphic Design</h2>
          <p className="text-gray-700 mb-2">
            Designed logos, social media kits, and banner ads for 10+ clients using Canva & Illustrator.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">📝 Content Writing</h2>
          <p className="text-gray-700 mb-2">
            Wrote SEO blog articles and product descriptions in English and Mongolian for affiliate sites.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">💻 Virtual Assistance</h2>
          <p className="text-gray-700 mb-2">
            Managed email inboxes, scheduled meetings, and organized data in Excel and Notion.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">🌐 WordPress Management</h2>
          <p className="text-gray-700 mb-2">
            Customized themes, optimized plugins, and updated blog posts on MoneyHack.MN.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">📊 Data Entry</h2>
          <p className="text-gray-700 mb-2">
            Entered large volumes of logistics and invoice data for mining projects with accuracy.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">🌟 AI Image Editing</h2>
          <p className="text-gray-700 mb-2">
            Transformed photos into professional visuals using AI tools like Seedream, Midjourney, and Photoshop.
          </p>
        </div>
      </section>

      <footer className="text-center mt-16 text-gray-500">
        Built by Urangua B | Fiverr: batmunkh urangua | Gmail: batmunkhurangua@gmail.com
      </footer>
    </main>
  );
}