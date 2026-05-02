import { siteData } from "@/data/content";
import { Camera, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              {siteData.global.brandName}
            </h3>
            <p className="mb-6 max-w-sm text-slate-400">
              Personalized, sustainable diet plans designed to help you reach your health goals without giving up the foods you love.
            </p>
            <div className="flex space-x-4">
              <a href={siteData.global.instagramUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                <Camera size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Plans", "Process", "FAQ"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-brand-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-brand-500" />
                <a 
                  href={`https://wa.me/${siteData.global.contactPhone.replace(/[^0-9]/g, '')}?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20diet%20plans!`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-400 transition-colors"
                >
                  {siteData.global.contactPhone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-brand-500" />
                <a href={`mailto:${siteData.global.contactEmail}`} className="hover:text-brand-400 transition-colors">
                  {siteData.global.contactEmail}
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href={siteData.global.instagramUrl} 
                className="inline-block w-full text-center px-6 py-3 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 transition-colors"
              >
                Book via Instagram DM
              </a>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>&copy; {new Date().getFullYear()} {siteData.global.brandName}. All rights reserved.</p>
            <a href="/privacy-policy" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0 opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-500">Engineered By</span>
            <a 
              href="https://codeburp.vercel.app" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center hover:-translate-y-0.5 transition-transform"
            >
              <img 
                src="/codeburp-logo-actual.png" 
                alt="CodeBurp Logo" 
                className="h-7 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.15)]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
