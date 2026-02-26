import { Link } from "react-router-dom";
import { Phone, Shield, Award, Globe, Leaf, CheckCircle, Package, Handshake, HelpCircle } from "lucide-react";
import heroImg from "@/assets/hero-hair.jpg";
import rawHairImg from "@/assets/raw-hair.jpg";
import remyHairImg from "@/assets/remy-hair.jpg";
import templeImg from "@/assets/temple-sourcing.jpg";
import bulkImg from "@/assets/bulk-export.jpg";
import founderImg from "@/assets/founder.jpg";
import gobiHairImg from "@/assets/gobi-hairs.jpg";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const whyChooseUs = [
  { icon: Shield, title: "100% Human Hair", desc: "Purest quality Indian hair with zero synthetic mix or chemical processing." },
  { icon: Award, title: "21+ Years Excellence", desc: "Successfully serving global markets with consistent quality and trust for over two decades." },
  { icon: Leaf, title: "Ethical Temple Sourcing", desc: "100% ethically collected from revered South Indian temples through traditional auctions." },
  { icon: Package, title: "Bulk Supply Capability", desc: "Large-volume inventory ready for immediate wholesale distribution." },
  { icon: Award, title: "Consistent Quality Checks", desc: "Multi-stage inspection ensuring texture, strength, and cuticle alignment perfection." },
  { icon: Handshake, title: "Long-term Supplier Mindset", desc: "Dedicated to building lasting partnerships through reliability and transparency." },
];

const faqs = [
  {
    q: "Is the hair 100% human?",
    a: "Yes, we exclusively source and export 100% natural Indian human hair. We guarantee zero synthetic or animal hair mixing in any of our products."
  },
  {
    q: "Do you supply bulk orders?",
    a: "Absolutely. We specialize in high-volume bulk exports and have the capacity to fulfill large-scale requirements for wholesalers and manufacturers globally."
  },
  {
    q: "Do you provide wigs?",
    a: "While our core focus is raw hair and bundles, we do provide premium quality wigs and hairpieces on special request to meet specific client needs."
  }
];

const products = [
  { img: rawHairImg, title: "Raw Unprocessed Hair", desc: "Virgin hair in its purest form, directly from temples." },
  { img: remyHairImg, title: "Remy Hair", desc: "Cuticle-aligned hair for seamless, tangle-free extensions." },
  { img: gobiHairImg, title: "Gobi Hair", desc: "Premium textured Indian hair, sourced for strength and natural beauty." },
  { img: bulkImg, title: "Short Length Hair", desc: "High-quality shorter human hair for specialized applications." },
];

const HomePage = () => {
  return (
    <Layout>
      {/* SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "KRD Hair Exports",
          "url": "https://krdhairexports.com",
          "description": "Indian human hair exporter specializing in temple-sourced, natural human hair for bulk supply and premium quality exports.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No.75, Bharathi Street, Anandhapuram, Kandamangalam Post",
            "addressLocality": "Puducherry",
            "addressRegion": "Tamil Nadu",
            "postalCode": "605102",
            "addressCountry": "IN"
          },
          "telephone": ["+916383812225", "+919943211269"]
        })
      }} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium Indian human hair bundles" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-body font-medium">
              Pondicherry, India
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Premium Indian Human Hair Exports
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 font-body font-light max-w-xl">
              Temple-sourced, ethically processed, export-grade natural human hair — trusted by global buyers for unmatched quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Explore Products
              </Link>
              <a
                href="https://wa.me/916383812225?text=Hello%2C%20I%20am%20interested%20in%20your%20hair%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Why Choose KRD Hair Exports</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Excellence in Every Strand
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((f) => (
              <div key={f.title} className="bg-card p-8 rounded-lg shadow-soft group hover:shadow-elevated transition-all duration-300 border border-transparent hover:border-primary/10">
                <div className="w-14 h-14 bg-accent/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/50 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-3 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Our Products</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Premium Hair Collection
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.title} className="group overflow-hidden rounded-lg shadow-soft bg-background">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-lg shadow-elevated">
              <img src={templeImg} alt="Ethical temple hair sourcing in India" className="w-full h-80 lg:h-[500px] object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Ethical Sourcing</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Temple-Sourced with Integrity
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our hair is ethically collected from revered South Indian temples, where devotees offer their hair as a sacred act. This ensures 100% natural, unprocessed virgin hair of the highest quality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every batch undergoes rigorous hygiene processing while preserving the natural cuticle alignment, texture, and strength that make Indian human hair the global standard for excellence.
              </p>
              <Link
                to="/quality"
                className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Learn About Our Quality
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Founder Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Meet Our Founder</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                Dinagaran R
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic border-l-4 border-primary pl-6">
                "For over 21 years, we have been committed to providing the world with the purest Indian human hair. Our legacy is built on trust, ethics, and the pursuit of excellence in every strand."
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-0.5 bg-primary" />
                <p className="text-foreground font-semibold uppercase tracking-wider text-sm">Founder, KRD Hair Exports</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                With deep roots in Pondicherry and decades of experience in the hair industry, Dinagaran R has led KRD Hair Exports to become a trusted name for global wholesalers. His vision ensures that every bundle we export meets the highest standards of hygiene and quality while honoring traditional sourcing methods.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-2xl shadow-elevated group">
                <img
                  src={founderImg}
                  alt="Dinagaran R - Founder of KRD Hair Exports"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Common Questions</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">Everything you need to know about our premium temple-sourced hair.</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-background px-6 shadow-soft data-[state=open]:shadow-elevated transition-all duration-300">
                  <AccordionTrigger className="font-heading text-xl md:text-2xl font-semibold text-foreground hover:no-underline py-6">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base md:text-lg">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Place a Bulk Order?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            Connect with us directly for wholesale pricing, custom requirements, and international shipping.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/916383812225?text=Hello%2C%20I%20want%20to%20place%20a%20bulk%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              WhatsApp — 6383812225
            </a>
            <a
              href="https://wa.me/919943211269?text=Hello%2C%20I%20want%20to%20place%20a%20bulk%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-3.5 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              WhatsApp — 9943211269
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

export default HomePage;
