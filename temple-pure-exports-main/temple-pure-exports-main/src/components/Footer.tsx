import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">KRD Hair Exports</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium Indian human hair exporter. Temple-sourced, ethically processed, export-grade quality from Pondicherry, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/quality", label: "Quality & Sourcing" },
                { to: "/export", label: "Export & Bulk Orders" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <a href="tel:+916383812225" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 6383812225
              </a>
              <a href="tel:+919943211269" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 9943211269
              </a>
              <a href="https://wa.me/916383812225" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                WhatsApp Available
              </a>
              <a href="mailto:krddinagaran@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                krddinagaran@gmail.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Address</h4>
            <div className="flex gap-2 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                No.75, Bharathi Street, Anandhapuram, Kandamangalam Post, Near Anandhapuram Milk Cooperative Society, Puducherry – 605102, Tamil Nadu, India.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTAs */}
        <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-primary-foreground/20 justify-center">
          <a
            href="https://wa.me/916383812225"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Chat on WhatsApp — 6383812225
          </a>
          <a
            href="https://wa.me/919943211269"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Chat on WhatsApp — 9943211269
          </a>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} KRD Hair Exports. All rights reserved. | Indian Human Hair Exporter, Pondicherry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
