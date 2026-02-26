import Layout from "@/components/Layout";
import rawHairImg from "@/assets/raw-hair.jpg";
import remyHairImg from "@/assets/remy-hair.jpg";
import bulkImg from "@/assets/bulk-export.jpg";
import heroImg from "@/assets/hero-hair.jpg";
import gobihair from "@/assets/gobi-hairs.jpg"
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const products = [
  {
    img: rawHairImg,
    title: "Raw Unprocessed Hair",
    desc: "100% virgin hair collected directly from Indian temples. Unprocessed, untreated, and in its purest natural form. Ideal for manufacturers and wholesalers who prefer to process hair themselves.",
    features: ["Single donor", "Natural cuticle intact", "No chemical treatment", "Available in all lengths"],
  },
  {
    img: remyHairImg,
    title: "Remy Hair",
    desc: "Premium cuticle-aligned Remy hair for seamless, tangle-free hair extensions and wigs. Each strand flows in a single direction for a natural look and feel.",
    features: ["Cuticle aligned", "Tangle-free", "Natural sheen", "Long-lasting quality"],
  },
  {
    img: gobihair,
    title: "Gobi Hair",
    desc: "Premium textured Indian hair, specifically sourced for its strength and natural beauty. This hair is highly sought after for its versatility and durability.",
    features: ["Strong texture", "Natural Volume", "Ethically sourced", "High durability"],
  },
  {
    img: bulkImg,
    title: "Short Length Hair",
    desc: "High-quality shorter length human hair, perfect for specialized hair applications, blending, or specific wig making requirements.",
    features: ["Quality controlled", "Pure human hair", "Consistent length", "Bulk availability"],
  },
];

const ProductsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 lg:py-36">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium hair products" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Our Products</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            100% natural Indian human hair — temple-sourced, export-grade, and available in bulk.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {products.map((p, i) => (
              <div key={p.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`overflow-hidden rounded-lg shadow-elevated ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={p.img} alt={p.title} className="w-full h-72 lg:h-[400px] object-cover" loading="lazy" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">{p.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/916383812225?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(p.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Phone className="w-4 h-4" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom note */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Wigs, Extensions, or Custom Products?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We primarily handle bulk raw hair supply. If you require wigs, hair extensions, closures, or customized hair products, contact us to discuss your specific requirements and we will work with you to fulfill your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Contact Us for Custom Orders
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
