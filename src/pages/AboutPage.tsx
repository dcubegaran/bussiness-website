import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-hair.jpg";
import templeImg from "@/assets/temple-sourcing.jpg";
import { Award, Users, Globe, Heart, Settings } from "lucide-react";

const values = [
  { icon: Award, title: "21+ Years Excellence", desc: "Successfully serving the hair industry for over two decades with trust." },
  { icon: Heart, title: "Ethical Practices", desc: "Responsibly sourced from Indian temples with full transparency." },
  { icon: Users, title: "Customer Trust", desc: "Long-term partnerships built on reliability and consistency." },
  { icon: Settings, title: "Custom Orders", desc: "Special requirements like wigs or extensions can be discussed and fulfilled" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 lg:py-36">
        <div className="absolute inset-0">
          <img src={heroImg} alt="About KRD Hair Exports" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Pondicherry's trusted name in premium Indian human hair exports, successfully running for more than 21+ years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Rooted in Tradition, Built for Global Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KRD Hair Exports was founded with a clear mission: to bring the world's finest natural Indian human hair to global markets. <strong>Successfully running for more than 21+ years</strong>, we have built a trusted legacy of uncompromising quality and ethical sourcing.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We specialize in 100% pure temple-sourced hair, carefully collected and hygienically processed to retain its natural strength, texture, and luster. Our focus on bulk supply and export-grade standards has made us a preferred partner for hair businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From raw unprocessed virgin hair to Remy, Gobi, and short length hair, every product leaves our facility meeting the highest standards of quality — ready for the global beauty industry.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-elevated">
              <img src={templeImg} alt="Temple sourcing heritage" className="w-full h-80 lg:h-[450px] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Our Values</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8 rounded-lg shadow-soft text-center">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
