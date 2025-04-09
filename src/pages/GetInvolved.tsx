
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, ChevronRight, Check } from 'lucide-react';

const GetInvolved = () => {
  // Involvement opportunities
  const opportunities = [
    {
      title: "Small Groups",
      description: "Join a weekly small group for Bible study, prayer, and community.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title: "Worship Team",
      description: "Use your musical talents to lead others in worship.",
      image: "https://images.unsplash.com/photo-1526328828355-69b01f3771fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Outreach Team",
      description: "Participate in local service projects and mission opportunities.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Prayer Team",
      description: "Commit to regular prayer for our campus and community.",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
    },
    {
      title: "Welcome Team",
      description: "Help create a welcoming environment at our events and gatherings.",
      image: "https://images.unsplash.com/photo-1516146544193-b54a65682f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      title: "Media Team",
      description: "Use technical and creative skills to enhance our digital presence.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-blue-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover ways to connect, serve, and grow with our Faith Union community.
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Place</h2>
            <p className="text-lg text-gray-700">
              Faith Union offers many ways to get involved, build relationships, and make a difference. Whether you're interested in studying the Bible, serving others, using your creative talents, or simply making new friends, there's a place for you here.
            </p>
          </div>
          
          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={opportunity.image}
                    alt={opportunity.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <button className="btn-outline w-full">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* First Steps */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">First Steps</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Join Us Sunday</h3>
              <p className="text-gray-600">
                Attend our Sunday gathering to experience worship and meet our community.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Connect Group</h3>
              <p className="text-gray-600">
                Sign up for a monthly newcomer's lunch to meet leaders and learn more.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Involved</h3>
              <p className="text-gray-600">
                Find a small group, ministry team, or service opportunity that interests you.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button className="btn-primary">I'm New Here</button>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg mb-6 text-gray-700">
                Have questions about getting involved? We'd love to hear from you! Fill out the form and one of our team members will reach out soon.
              </p>
              
              <div className="bg-blue-light/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Why Get Involved?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Build meaningful friendships with other students</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Grow in your faith and biblical understanding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Develop leadership skills and experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Make a positive impact in our campus and community</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Find support during your university journey</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm interested in:
                  </label>
                  <select
                    id="interests"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Select an option</option>
                    <option>Small Groups</option>
                    <option>Worship Team</option>
                    <option>Outreach & Service</option>
                    <option>Prayer Team</option>
                    <option>Welcome Team</option>
                    <option>Media Team</option>
                    <option>I'm not sure yet</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Any questions or additional information..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full flex items-center justify-center">
                  <Mail className="mr-2" size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to take the next step?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Join us this Sunday or at any of our upcoming events. We can't wait to meet you!
          </p>
          <button className="btn-secondary inline-flex items-center">
            View Upcoming Events
            <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GetInvolved;
