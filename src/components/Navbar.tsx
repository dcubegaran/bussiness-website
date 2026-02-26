import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality & Sourcing" },
  { to: "/export", label: "Export & Bulk Orders" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="font-heading text-2xl font-bold tracking-wide text-primary">
          KRD Hair Exports
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/916383812225"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          WhatsApp Us
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/916383812225"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium w-fit"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
