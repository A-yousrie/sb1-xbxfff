import React from 'react';
import { FileDown, FileText, Calendar, Download } from 'lucide-react';
import { useBrochureStore } from '../store/brochureStore';
import AnimatedSection from '../components/AnimatedSection';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const BrochureStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <FileText className="w-8 h-8 text-[#04968d] mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-[#213c4d] mb-2">15+</h3>
        <p className="text-gray-600">Service Brochures</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <Download className="w-8 h-8 text-[#04968d] mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-[#213c4d] mb-2">5K+</h3>
        <p className="text-gray-600">Monthly Downloads</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <Calendar className="w-8 h-8 text-[#04968d] mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-[#213c4d] mb-2">Monthly</h3>
        <p className="text-gray-600">Updated Content</p>
      </div>
    </div>
  );
};

const Brochures = () => {
  const { brochures } = useBrochureStore();

  const handleDownload = (file: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Service Brochures
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive service brochures to learn more about our enterprise solutions
            </p>
          </div>

          <BrochureStats />

          <Splide
            options={{
              perPage: 3,
              gap: '2rem',
              arrows: true,
              pagination: true,
              autoplay: true,
              interval: 4000,
              pauseOnHover: true,
              height: '24rem',
              breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1 }
              }
            }}
            className="brochures-slider mb-16"
          >
            {brochures.map((brochure) => (
              <SplideSlide key={brochure.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full group hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="p-8 flex-grow">
                    <div className="bg-[#04968d]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      <FileText className="w-8 h-8 text-[#04968d]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#213c4d] mb-4 group-hover:text-[#04968d] transition-colors">
                      {brochure.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Last Updated: {new Date(brochure.createdAt).toLocaleDateString()}
                    </p>
                    <div className="h-1 w-0 group-hover:w-full bg-[#04968d]/20 transition-all duration-300" />
                  </div>
                  <div className="p-6 bg-gray-50 border-t border-gray-100">
                    <button
                      onClick={() => handleDownload(brochure.file, brochure.name)}
                      className="w-full bg-[#04968d] text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 group/btn"
                    >
                      <span>Download Brochure</span>
                      <FileDown className="w-5 h-5 transform group-hover/btn:translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>

          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Need More Information?</h2>
            <p className="text-gray-600 mb-6">
              Contact our team for detailed information about our services and custom solutions
            </p>
            <button className="bg-[#04968d] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center space-x-2">
              <span>Contact Us</span>
              <FileDown className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Brochures;