import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-muted-foreground space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using Eagles One Store ("Tumāninah Veritas"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Use of Our Services</h2>
                <p className="leading-relaxed">
                  You agree to use our services only for lawful purposes and in accordance with these terms. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the security or operation of our services</li>
                  <li>Use automated systems to access our website without permission</li>
                  <li>Impersonate another person or entity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Product Information and Pricing</h2>
                <p className="leading-relaxed">
                  We strive to provide accurate product descriptions and pricing. However, errors may occur. We reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Correct any errors or inaccuracies in product information</li>
                  <li>Update pricing without prior notice</li>
                  <li>Cancel orders if pricing errors occur</li>
                  <li>Modify or discontinue products at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Orders and Payments</h2>
                <p className="leading-relaxed">
                  By placing an order, you confirm that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are legally capable of entering into binding contracts</li>
                  <li>All information you provide is accurate and complete</li>
                  <li>You authorize us to charge your payment method</li>
                  <li>You understand that all sales are processed through Shopify's secure checkout</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on our website, including text, graphics, logos, images, and software, is the property of Eagles One Store or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  To the fullest extent permitted by law, Eagles One Store shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or products.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Indemnification</h2>
                <p className="leading-relaxed">
                  You agree to indemnify and hold harmless Eagles One Store and its affiliates from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Modifications to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Governing Law</h2>
                <p className="leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our business operates, without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us at{" "}
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

export default Terms;
