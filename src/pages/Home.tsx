import { Ship, Plane, Truck, Package, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Trusted Partner in Global Logistics
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Connecting China and Uganda with reliable freight and forwarding services
          </p>
          <div className="space-x-4">
            <Link
              to="/quote"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium"
            >
              Get a Quote
            </Link>
            <Link
              to="/tracking"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-lg font-medium"
            >
              Track Shipment
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive logistics solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <Ship className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sea Freight</h3>
              <p className="text-gray-600">
                Reliable sea freight services with competitive rates and flexible solutions
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <Plane className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Air Freight</h3>
              <p className="text-gray-600">
                Fast and efficient air freight services for time-sensitive cargo
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Land Transport</h3>
              <p className="text-gray-600">
                Comprehensive land transportation solutions across East Africa
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the difference with our premium logistics services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Package className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Global Network</h3>
                <p className="text-gray-600">
                  Extensive network covering China, Uganda, and beyond
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Secure Handling</h3>
                <p className="text-gray-600">
                  Your cargo's safety is our top priority
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock customer service and support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}