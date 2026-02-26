import Layout from "@/components/Layout";
import templeImg from "@/assets/temple-sourcing.jpg";
import heroImg from "@/assets/hero-hair.jpg";
import { Shield, Droplets, Scissors, CheckCircle, Sparkles, Heart } from "lucide-react";

const steps = [
  { icon: Heart, title: "Ethical Collection", desc: "Hair is respectfully collected from South Indian temples where devotees offer their hair as a spiritual practice." },
  { icon: Scissors, title: "Manual Sorting", desc: "Hair is carefully sorted by hand based on length, texture, and natural condition." },
  { icon: Droplets, title: "Hygiene Cleaning", desc: "Hair is cleaned using gentle methods to maintain its natural strength and texture." },
  { icon: Shield, title: "Quality Check", desc: "Each bundle is checked for purity, consistency, and overall quality." },
  { icon: Sparkles, title: "Store Display", desc: "Hair is neatly stored and displayed in our shop for customers to inspect personally." },
  { icon: CheckCircle, title: "Ready for Purchase", desc: "Customers can directly select and purchase hair after complete satisfaction." },
];

const QualityPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 lg:py-36">
        <div className="absolute inset-0">
          <img src={templeImg} alt="Quality and ethical sourcing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Quality & Sourcing</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            From sacred temples to global markets — every strand tells a story of integrity.
          </p>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Our Commitment</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Uncompromising Quality Standards
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At KRD Hair Exports, quality isn't just a promise — it's our foundation. We source exclusively from Indian temples, ensuring 100% natural, virgin human hair that hasn't been treated with chemicals or heat.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our hygienic processing methods are designed to clean and sanitize while preserving the natural cuticle structure, resulting in hair that is strong, lustrous, and long-lasting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every export shipment undergoes multi-stage quality checks — from raw sorting to final packaging — guaranteeing consistency that our global buyers trust and rely on.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-elevated">
              <img src={heroImg} alt="Premium quality hair bundles" className="w-full h-80 lg:h-[450px] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Our Process</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              From Temple to Export
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-background p-8 rounded-lg shadow-soft relative">
                <span className="absolute top-4 right-4 text-accent font-heading text-3xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality badges */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">Our Quality Promise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["100% Human Hair", "Temple Sourced", "Chemical Free", "Cuticle Intact", "Hygienic Processing", "Quality Checked"].map((badge) => (
              <div key={badge} className="bg-card p-5 rounded-lg shadow-soft">
                <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QualityPage;
