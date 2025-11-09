import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Gift, Building2, Package, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const serviceRequestSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  serviceType: z.string().trim().min(1, "Service type is required").max(100, "Service type must be less than 100 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ServiceRequestFormData = z.infer<typeof serviceRequestSchema>;

const Services = () => {
  const form = useForm<ServiceRequestFormData>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      serviceType: "",
      message: "",
    },
  });

  const onSubmit = (data: ServiceRequestFormData) => {
    // Form submission would be implemented here with backend integration
    toast.success("Service request submitted successfully! We'll contact you soon.");
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Customized solutions for your unique needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-card rounded-lg border border-border p-8 text-center shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Custom Orders</h3>
              <p className="text-muted-foreground mb-4">
                Can't find exactly what you're looking for? We'll source it for you.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 text-center shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Gift Cards</h3>
              <p className="text-muted-foreground mb-4">
                Perfect gifts for any occasion. Available in various denominations.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 text-center shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Corporate Offers</h3>
              <p className="text-muted-foreground mb-4">
                Bulk orders and special pricing for businesses and organizations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-card rounded-lg border border-border p-8 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Request a Service
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Type</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Custom Order, Gift Card, Corporate" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your requirements..." 
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/90 text-gold-foreground" 
                  size="lg"
                  disabled={form.formState.isSubmitting}
                >
                  Submit Request
                </Button>
              </form>
            </Form>
          </div>
        </section>

        {/* Shop CTA */}
        <section className="py-12 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Explore Our Products
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Find quality products that match your lifestyle and needs.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/shop">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
