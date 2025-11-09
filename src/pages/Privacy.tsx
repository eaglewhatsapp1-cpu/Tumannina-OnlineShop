import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy and data security matter to us
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-muted-foreground space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect information that you provide directly to us, including your name, email address, shipping address, and payment information when you make a purchase. We also collect information about your browsing behavior on our website to improve your shopping experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Send you order confirmations and shipping updates</li>
                  <li>Respond to your customer service requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our products and services</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Information Sharing</h2>
                <p className="leading-relaxed">
                  We do not sell your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who help us operate our business (e.g., payment processors, shipping carriers)</li>
                  <li>Law enforcement or regulatory authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Cookies</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Updates to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this privacy policy or our data practices, please contact us at{" "}
                  <a href="mailto:tumaninahveritasstore@gmail.com" className="text-primary hover:underline">
                    tumaninahveritasstore@gmail.com
                  </a>
                </p>
              </div>

              <p className="text-sm text-muted-foreground mt-8">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
