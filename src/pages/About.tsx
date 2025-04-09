
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Leadership team data
  const leadershipTeam = [
    {
      name: "Pastor Michael Johnson",
      role: "Chaplain",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Sarah Williams",
      role: "Student President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "David Chen",
      role: "Bible Study Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Rebecca Adeyemi",
      role: "Outreach Coordinator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-blue-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Learn more about Faith Union, our history, mission, and the people who make our community special.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Faith Union began in 2005 when a small group of passionate students felt called to create a space where believers could gather, grow, and serve together on campus.
              </p>
              <p className="mb-4 text-gray-700">
                What started as weekly prayer meetings in a dorm room has grown into a thriving community of over 200 students from diverse backgrounds and denominations, all united by our love for Christ.
              </p>
              <p className="text-gray-700">
                Today, we continue to focus on biblical teaching, authentic community, and meaningful service, creating a spiritual home for students throughout their university journey.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Group of students together" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded shadow-lg">
                <p className="text-xl font-bold text-primary">Est. 2005</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-700">
              We exist to create a vibrant Christian community on campus, fostering spiritual growth, biblical understanding, and service to others.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 rounded-full bg-blue-light/50 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-8 h-8 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Authentic Faith</h3>
              <p className="text-gray-600">
                We believe in genuine, lived-out faith that transforms every aspect of life. We encourage honest questions and deep spiritual growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 rounded-full bg-blue-light/50 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-8 h-8 text-primary"
                >
                  <path d="M18 8h1a4 4 0 010 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Biblical Teaching</h3>
              <p className="text-gray-600">
                Scripture is our foundation. We are committed to teaching and applying God's Word in relevant, practical ways for today's students.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 rounded-full bg-blue-light/50 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-8 h-8 text-primary"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 010 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusive Community</h3>
              <p className="text-gray-600">
                We welcome students from all backgrounds, denominations, and walks of life, creating a community of belonging and acceptance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 rounded-full bg-blue-light/50 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-8 h-8 text-primary"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Discipleship</h3>
              <p className="text-gray-600">
                We're committed to helping each other grow as disciples of Jesus through mentoring relationships and spiritual practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 rounded-full bg-blue-light/50 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-8 h-8 text-primary"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Leadership Development</h3>
              <p className="text-gray-600">
                We equip students to be Christian leaders on campus and in their future careers, churches, and communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 rounded-full bg-blue-light/50 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-8 h-8 text-primary"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Service & Outreach</h3>
              <p className="text-gray-600">
                We believe in putting faith into action through service to our campus, local community, and world in need.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statement of Faith */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Statement of Faith</h2>
              <p className="mb-6 text-gray-700">
                While we welcome students from various denominations and backgrounds, Faith Union is grounded in these core Christian beliefs:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Check className="text-primary mr-2 mt-1" />
                  <p>We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 mt-1" />
                  <p>We believe the Bible is God's inspired Word and the final authority for faith and life.</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 mt-1" />
                  <p>We believe in Jesus Christ's deity, virgin birth, sinless life, atoning death, and bodily resurrection.</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 mt-1" />
                  <p>We believe salvation is by grace through faith in Christ alone.</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 mt-1" />
                  <p>We believe in the Holy Spirit's indwelling presence and transforming power.</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 mt-1" />
                  <p>We believe in the spiritual unity of believers in Christ.</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 mt-1" />
                  <p>We believe in Christ's return and the resurrection of believers to eternal life.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-blue-light/30 p-6 rounded-lg bible-verse">
                <p className="text-lg mb-4 italic">
                  "May the God who gives endurance and encouragement give you the same attitude of mind toward each other that Christ Jesus had, so that with one mind and one voice you may glorify the God and Father of our Lord Jesus Christ."
                </p>
                <p className="text-right font-medium text-primary">Romans 15:5-6</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image}
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="text-gray-600">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">
              Interested in learning more about our leadership team or how you can get involved?
            </p>
            <Link to="/get-involved" className="btn-primary inline-flex items-center">
              Get Involved
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
