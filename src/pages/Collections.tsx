import { useEffect, useState } from 'react';
import { fetchCollections } from '@/lib/shopify';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Grid, List, Gift, Sparkles } from 'lucide-react';
import type { ShopifyCollection } from '@/lib/shopify';

export default function Collections() {
  const [collections, setCollections] = useState<ShopifyCollection[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const loadCollections = async () => {
      try {
        const data = await fetchCollections(50);
        setCollections(data);
      } catch (error) {
        console.error('Error loading collections:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadCollections();
  }, []);

  // Filter collections based on search query
  const filteredCollections = collections.filter((collection) =>
    collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    collection.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Separate featured collections
  const featuredCollections = filteredCollections.filter(
    (collection) => 
      collection.handle === 'egyptian-heritage' || 
      collection.handle === 'free-gifts'
  );

  const regularCollections = filteredCollections.filter(
    (collection) => 
      collection.handle !== 'egyptian-heritage' && 
      collection.handle !== 'free-gifts'
  );

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading collections...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-transparent">
                Our Collections
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our curated collections of premium products, from authentic Egyptian heritage pieces to modern smart home solutions
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-6 text-lg"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center justify-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4 mr-2" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4 mr-2" />
                  List
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections Section */}
        {featuredCollections.length > 0 && (
          <section className="py-12 container mx-auto px-4">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="h-6 w-6 text-gold" />
              <h2 className="text-3xl font-bold text-foreground">Featured Collections</h2>
            </div>
            
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-1'
            }`}>
              {featuredCollections.map((collection) => (
                <Link 
                  key={collection.id} 
                  to={`/collections/${collection.handle}`}
                  className="group"
                >
                  <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-gold overflow-hidden h-full">
                    {collection.image && (
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={collection.image.url} 
                          alt={collection.image.altText || collection.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {collection.handle === 'free-gifts' && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-gold text-gold-foreground flex items-center gap-1">
                              <Gift className="h-3 w-3" />
                              Free Gift
                            </Badge>
                          </div>
                        )}
                        {collection.handle === 'egyptian-heritage' && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-gradient-to-r from-gold to-accent text-white">
                              Premium
                            </Badge>
                          </div>
                        )}
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-gold transition-colors">
                        {collection.title}
                      </CardTitle>
                      {collection.description && (
                        <CardDescription className="text-base line-clamp-2">
                          {collection.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-gold group-hover:text-gold-foreground group-hover:border-gold transition-colors"
                      >
                        Explore Collection
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Regular Collections Section */}
        {regularCollections.length > 0 && (
          <section className="py-12 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              {featuredCollections.length > 0 ? 'More Collections' : 'All Collections'}
            </h2>
            
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {regularCollections.map((collection) => (
                <Link 
                  key={collection.id} 
                  to={`/collections/${collection.handle}`}
                  className="group"
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    {collection.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={collection.image.url} 
                          alt={collection.image.altText || collection.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {collection.title}
                      </CardTitle>
                      {collection.description && (
                        <CardDescription className="line-clamp-3">
                          {collection.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-secondary transition-colors"
                      >
                        View Products
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredCollections.length === 0 && (
          <section className="py-20 container mx-auto px-4">
            <div className="text-center max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No collections found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or browse all products
              </p>
              <Button asChild>
                <Link to="/shop">Browse All Products</Link>
              </Button>
            </div>
          </section>
        )}

        {/* Collection Stats */}
        {collections.length > 0 && (
          <section className="py-12 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">
                    {collections.length}
                  </p>
                  <p className="text-muted-foreground">Total Collections</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gold mb-2">
                    {featuredCollections.length}
                  </p>
                  <p className="text-muted-foreground">Featured Collections</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent mb-2">
                    {filteredCollections.length}
                  </p>
                  <p className="text-muted-foreground">
                    {searchQuery ? 'Search Results' : 'Available Now'}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}
