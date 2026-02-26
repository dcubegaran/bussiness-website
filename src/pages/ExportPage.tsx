import Layout from "@/components/Layout";
import bulkImg from "@/assets/bulk-export.jpg";
import heroImg from "@/assets/hero-hair.jpg";
import exportImg from "@/assets/export.jpg";
import { Link } from "react-router-dom";
import { Phone, Package, Globe, Truck, ShieldCheck, BarChart3, Handshake } from "lucide-react";

const benefits = [
  { icon: Package, title: "Flexible Quantities", desc: "From mid-size orders to large-scale bulk supply, we accommodate all volumes." },
  { icon: ShieldCheck, title: "Consistent Quality", desc: "Every batch maintains the same premium standard — no surprises." },
  { icon: BarChart3, title: "Competitive Pricing", desc: "Direct-from-source pricing with volume discounts for recurring buyers." },
  { icon: Truck, title: "Timely Delivery", desc: "Reliable dispatch schedules with tracking and transparent communication." },
  { icon: Handshake, title: "Long-Term Partnerships", desc: "We build lasting relationships, not one-time transactions." },
];

const ExportPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 lg:py-36">
        <div className="absolute inset-0">
          <img src={exportImg} alt="Bulk export packaging" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Export & Bulk Orders</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Your trusted partner for large-volume Indian human hair supply worldwide.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Why Export with Us</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Built for Bulk. Made for Export.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card p-8 rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-5">
                  <b.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-lg shadow-elevated">
              <img src={heroImg} alt="Export quality hair" className="w-full h-80 lg:h-[400px] object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">How It Works</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                Simple Export Process
              </h2>
              <ol className="space-y-6">
                {[
                  { step: "01", title: "Inquiry", desc: "Reach out via WhatsApp or our contact form with your requirements." },
                  { step: "02", title: "Quotation", desc: "We provide detailed pricing based on hair type, length, and volume." },
                  { step: "03", title: "Visit Our Store", desc: "Customers are welcome to visit our store directly and view the hair quality in person." },
                  { step: "04", title: "Quality Check", desc: "Hair can be inspected and verified for quality before purchase." },
                  { step: "05", title: "Purchase", desc: "Once satisfied, the purchase is completed with transparent pricing." },
                ].map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="text-primary font-heading text-2xl font-bold flex-shrink-0 w-10">{s.step}</span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                      <p className="text-muted-foreground text-sm">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Start Your Bulk Order Today
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            Connect with us directly for competitive wholesale pricing and international shipping.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/916383812225?text=Hello%2C%20I%20want%20to%20inquire%20about%20bulk%20orders."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded text-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExportPage;
