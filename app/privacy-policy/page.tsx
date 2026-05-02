import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-stone-50 pt-24">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-200 prose prose-slate max-w-none">
          <p className="lead text-lg text-stone-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-stone-600 mb-6">
            We collect information you provide directly to us when you use our website, such as when you fill out a contact form, request a meal plan, or book a consultation. This may include your name, email address, phone number, and health-related goals.
          </p>

          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-stone-600 mb-6">
            We use the information we collect primarily to provide, maintain, and improve our services. Specifically, we use it to communicate with you, send you customized diet plans, and respond to your inquiries.
          </p>

          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-stone-600 mb-6">
            Your privacy is extremely important to us. We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners.
          </p>

          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">4. Data Security</h2>
          <p className="text-stone-600 mb-6">
            We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our site.
          </p>

          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">5. Contact Us</h2>
          <p className="text-stone-600 mb-6">
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at the email provided in the footer.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
