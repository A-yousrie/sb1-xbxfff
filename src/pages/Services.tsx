import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useServicesStore } from '../store/servicesStore';
import { ArrowRight, Check, Users, Target, Gift } from 'lucide-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Services = () => {
  const services = useServicesStore((state) => state.services);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our comprehensive range of enterprise solutions designed to transform your business
          </p>
        </div>

        <Splide
          options={{
            perPage: 1,
            gap: '2rem',
            arrows: true,
            pagination: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            height: 'auto',
            breakpoints: {
              1024: {
                height: 'auto',
              },
              768: {
                height: 'auto',
                arrows: false,
              }
            }
          }}
          className="services-slider"
        >
          {services.map((service) => (
            <SplideSlide key={service.id}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
                  {/* Left Column - Service Info */}
                  <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col h-full overflow-y-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#213c4d] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6 sm:mb-8">{service.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-[#04968d] mb-3 sm:mb-4 flex items-center">
                          <Gift className="h-5 w-5 mr-2" />
                          Key Features
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-[#04968d] mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className="text-lg font-semibold text-[#04968d] mb-3 sm:mb-4 flex items-center">
                          <Gift className="h-5 w-5 mr-2" />
                          Benefits
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-[#04968d] mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm sm:text-base">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-lg font-semibold text-[#04968d] mb-3 sm:mb-4 flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Perfect For
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.targetAudience.map((audience, index) => (
                          <span
                            key={index}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#04968d]/10 text-[#04968d] rounded-full text-xs sm:text-sm flex items-center"
                          >
                            <Users className="h-4 w-4 mr-1" />
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    {service.pricing && (
                      <div className="sticky bottom-0 bg-white border-t border-gray-100 pt-4 mt-auto">
                        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4">
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500">Starting from</p>
                            <p className="text-2xl sm:text-3xl font-bold text-[#213c4d]">
                              ${service.pricing.startingAt.toLocaleString()}
                              <span className="text-base sm:text-lg text-gray-500">
                                /{service.pricing.billingPeriod}
                              </span>
                            </p>
                          </div>
                          <button
                            onClick={handleGetStarted}
                            className="w-full sm:w-auto bg-[#04968d] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2"
                          >
                            <span>Get Started</span>
                            <ArrowRight className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Visual Elements */}
                  <div className="hidden md:block relative bg-gradient-to-br from-[#04968d]/10 to-[#213c4d]/10 p-8 lg:p-12">
                    <div className="absolute inset-0 bg-opacity-10 bg-white backdrop-blur-sm"></div>
                    <div className="relative z-10">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#04968d]/10 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#213c4d]/10 rounded-full blur-2xl"></div>
                      
                      {/* Service Highlights */}
                      <div className="space-y-6 lg:space-y-8">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm p-4 lg:p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
                          >
                            <h4 className="text-base lg:text-lg font-semibold text-[#213c4d] mb-2">
                              Feature Highlight {index + 1}
                            </h4>
                            <p className="text-sm lg:text-base text-gray-600">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Services;