import Layout from "@/components/Layout";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/xzdaoggq", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          response.json().then(data => {
            if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
              alert((data as any).errors.map((error: any) => error["message"]).join(", "));
            } else {
              alert("Oops! There was a problem submitting your form. Please try again or contact us via WhatsApp.");
            }
          });
        }
      })
      .catch(() => {
        alert("Oops! There was a problem submitting your form. Please check your connection.");
      });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-28 lg:py-36 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Get in touch for bulk orders, pricing inquiries, or custom requirements.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body font-medium">Get In Touch</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                We'd Love to Hear From You
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Phone & WhatsApp</h3>
                    <a href="tel:+916383812225" className="block text-muted-foreground text-sm hover:text-primary transition-colors">+91 6383812225</a>
                    <a href="tel:+919943211269" className="block text-muted-foreground text-sm hover:text-primary transition-colors">+91 9943211269</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      No.75, Bharathi Street, Anandhapuram,<br />
                      Kandamangalam Post,<br />
                      Near Anandhapuram Milk Cooperative Society,<br />
                      Puducherry District, Tamil Nadu,<br />
                      Puducherry – 605102, India.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Email Address</h3>
                    <a href="mailto:krddinagaran@gmail.com" className="block text-muted-foreground text-sm hover:text-primary transition-colors">krddinagaran@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTAs */}
              <div className="mt-10 space-y-3">
                <a
                  href="https://wa.me/916383812225?text=Hello%2C%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded text-sm font-medium hover:opacity-90 transition-opacity w-fit"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp — 6383812225
                </a>
                <a
                  href="https://wa.me/919943211269?text=Hello%2C%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded text-sm font-medium hover:opacity-90 transition-opacity w-fit"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp — 9943211269
                </a>
              </div>
            </div>

            {/* Contact Form (Netlify compatible) */}
            <div className="bg-card p-8 lg:p-10 rounded-lg shadow-soft">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We've received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                      <select
                        id="subject"
                        name="Subject"
                        required
                        className="w-full px-4 py-3 rounded bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      >
                        <option value="">Select a subject</option>
                        <option value="Bulk Order Inquiry">Bulk Order Inquiry</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Pricing & Quotation">Pricing & Quotation</option>
                        <option value="Custom Requirements">Custom Requirements</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-3.5 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
