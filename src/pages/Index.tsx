
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScriptureOfTheDay from '@/components/ScriptureOfTheDay';
import { Calendar, Users, ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Weekly Bible Study",
      date: "Every Wednesday",
      time: "7:00 PM",
      location: "Student Center, Room 302"
    },
    {
      id: 2,
      title: "Community Outreach",
      date: "This Saturday",
      time: "10:00 AM",
      location: "Meeting at Campus Plaza"
    },
    {
      id: 3,
      title: "Sunday Worship",
      date: "Every Sunday",
      time: "11:00 AM",
      location: "University Chapel"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">Welcome to Faith Union</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90 animate-fade-in">
            Uniting students through faith, community, and purpose
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link to="/about" className="btn-primary">
              Learn More
            </Link>
            <Link to="/get-involved" className="btn-outline">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
      
      {/* Scripture of the Day */}
      <section className="section bg-blue-light/30">
        <div className="container-custom">
          <ScriptureOfTheDay />
        </div>
      </section>
      
      {/* About Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                Faith Union exists to create a vibrant Christian community on campus, fostering spiritual growth, biblical understanding, and service to others.
              </p>
              <p className="mb-6 text-gray-700">
                We provide a space where students can explore their faith, build meaningful relationships, and make a positive impact in the world around them.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more about us
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1609234078110-7c7735455470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Students gathered in community" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-4 rounded-lg shadow-lg">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">Years serving students</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ministry Highlights */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Ministries</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="bg-blue-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Groups</h3>
              <p className="text-gray-600 mb-4">
                Small groups that meet weekly to study the Bible, pray together, and build deep friendships.
              </p>
              <Link to="/get-involved" className="inline-flex items-center text-primary font-medium hover:underline">
                Join a group
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="bg-blue-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary h-8 w-8"
                >
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bible Studies</h3>
              <p className="text-gray-600 mb-4">
                Dive deep into Scripture with guided studies and theological discussions.
              </p>
              <Link to="/bible-study" className="inline-flex items-center text-primary font-medium hover:underline">
                Explore studies
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="bg-blue-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary h-8 w-8"
                >
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Outreach</h3>
              <p className="text-gray-600 mb-4">
                Serve the local community and spread God's love through various service projects.
              </p>
              <Link to="/events" className="inline-flex items-center text-primary font-medium hover:underline">
                Get involved
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="section">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link to="/events" className="inline-flex items-center text-primary font-medium hover:underline">
              View all events
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6 card-hover">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-2 text-primary h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="btn-outline w-full">RSVP</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Faith Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Connect with fellow believers, grow in your faith, and make a difference together.
          </p>
          <Link to="/get-involved" className="btn-secondary">
            Get Involved Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
