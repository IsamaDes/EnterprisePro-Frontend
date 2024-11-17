import React from 'react';
import { Link } from 'react-router-dom';
import entpriseimg from "../../assets/Enterprise.png";
// Import the FAQ component
import FaqComponent from '../FAQ/FAQ'; // Adjust path if necessary

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Enterprise Pro</h1>

      <div className="font-sans bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="bg-blue-900 text-white py-6 px-8">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-semibold">
              <h1>enterprisePro</h1>
              <p className="text-sm text-gray-300">
                The Ultimate Business Management Solution
              </p>
            </div>
            <div className="text-lg">
              <p>Empowering Organizations, Empowering Entrepreneurs</p>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-semibold text-gray-900">
                Manage Every Aspect of Your Business from One Platform
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Designed for both profit and non-profit organizations, enterprisePro simplifies complex management tasks and brings everything your business needs under one roof.
              </p>
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-500">
                  Get Started Free
                </button>
                <button className="ml-4 text-blue-600 border border-blue-600 px-6 py-3 rounded-md text-lg hover:bg-blue-50">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img
                src={entpriseimg}
                alt="App Interface"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12">Our Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
              {/* Feature 1 */}
              <div className="p-6 border rounded-lg shadow-lg bg-green-100">
                <img src="https://via.placeholder.com/40" alt="Icon" className="mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comprehensive Organization Management
                </h3>
                <p className="text-gray-600">
                  enterprisePro accommodates all types of organizations—whether you’re managing a for-profit business, non-profit, or a growing startup.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-6 border rounded-lg shadow-lg bg-purple-100">
                <img src="https://via.placeholder.com/40" alt="Icon" className="mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Multi-Account Capability for Entrepreneurs
                </h3>
                <p className="text-gray-600">
                  Manage multiple businesses or ventures from a single account, seamlessly switching between profiles.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-6 border rounded-lg shadow-lg bg-blue-100">
                <img src="https://via.placeholder.com/40" alt="Icon" className="mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  End-to-End Process Tracking
                </h3>
                <p className="text-gray-600">
                  Track every aspect of your organization’s operations, from processes to marketing campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-screen-xl mx-auto text-center px-8">
            <h2 className="text-[40px] font-semibold text-gray-900 mb-8">Why Choose enterprisePro?</h2>
            <div className="space-y-8">
              <div className="text-xl text-gray-700">
                <h3 className="font-semibold mb-2">Flexible, Scalable, and Customizable</h3>
                <p>
                  Built for both small and large organizations, enterprisePro grows with you, adapting to your unique needs.
                </p>
              </div>
              <div className="text-xl text-gray-700">
                <h3 className="font-semibold mb-2">Easy Integration</h3>
                <p>
                  Integrates with your existing tools and systems for a smooth transition. Improve processes without overhauling.
                </p>
              </div>
              <div className="text-xl text-gray-700">
                <h3 className="font-semibold mb-2">Top-Level Data Security</h3>
                <p>
                  enterprisePro safeguards your business data with our state-of-the-art security protocols.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-screen-xl mx-auto text-center px-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">What Our Users Say</h2>
            <div className="space-y-8">
              <div className="text-xl text-gray-700">
                <p>"enterprisePro has transformed the way we handle daily operations. We can finally manage all our stakeholders and processes in one place!"</p>
                <span className="block font-semibold text-gray-900">Sandra B., Non-Profit Director</span>
              </div>
              <div className="text-xl text-gray-700">
                <p>"As an entrepreneur with multiple ventures, having everything in one app saves me so much time and effort."</p>
                <span className="block font-semibold text-gray-900">John K., Serial Entrepreneur</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-screen-xl mx-auto text-center px-8">
            <h2 className="text-3xl font-semibold mb-4">Ready to Make Business Management Effortless?</h2>
            <p className="text-lg mb-8">
              Get started with a free trial today, and discover how enterprisePro can transform your organization’s productivity.
            </p>
            <div className='flex justify-center gap-5'>
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md text-lg hover:bg-yellow-400">
                <Link to="/register" className="btn btn-primary">Get Started</Link>
              </button>
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md text-lg hover:bg-yellow-400">
                <Link to="/login" className="btn btn-secondary">Login</Link>
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="flex justify-center flex-col bg-gray-100 py-16   text-left">
          <div>
          <h2 className="text-[40px] font-semibold text-left  text-gray-900">Frequently Asked Questions</h2>


          </div>
            <div className=''>

            <FaqComponent />

            </div>
          
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-screen-xl">
            <div className="flex justify-between">
              <button className='  b-5'>
                <a href="#" className="hover:text-yellow-400">Product Tour</a>
              </button>
              <button>
                <a href="#" className="hover:text-yellow-400">Pricing</a>
              </button>
              <div className='flex flex-col'>
                <div>Contact Us</div>
                <div>
                  <p> Technology Incubation Center, Agege, Lagos State, Nigeria.</p>
                  <p> Email: hello@edu-central.org</p>
                  <p> Phone: +2349076582822</p>
                  <p> Website: www.edu-central.org</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm">© 2024 enterprisePro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
