
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { Calendar, Filter } from 'lucide-react';

const Events = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Weekly Bible Study",
      date: "Every Wednesday",
      time: "7:00 PM - 8:30 PM",
      location: "Student Center, Room 302",
      description: "Join us for an in-depth study of the Book of Romans. All students welcome!",
      imageSrc: "https://images.unsplash.com/photo-1476957075689-0f63f9033fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Community Outreach",
      date: "April 15, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Community Food Bank",
      description: "Help serve meals and organize donations at the local food bank.",
      imageSrc: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Sunday Worship",
      date: "Every Sunday",
      time: "11:00 AM - 12:30 PM",
      location: "University Chapel",
      description: "Weekly worship service with contemporary music and relevant teaching.",
      imageSrc: "https://images.unsplash.com/photo-1508049397363-cd4ebb494e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Prayer Night",
      date: "April 20, 2023",
      time: "8:00 PM - 9:30 PM",
      location: "Campus Prayer Room",
      description: "A special evening of worship and prayer for our campus and world.",
      imageSrc: "https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    },
    {
      id: 5,
      title: "Leadership Workshop",
      date: "April 22, 2023",
      time: "1:00 PM - 4:00 PM",
      location: "Student Union, Room 401",
      description: "Develop your leadership skills with interactive sessions led by experienced mentors.",
      imageSrc: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      title: "Spring Retreat",
      date: "May 5-7, 2023",
      time: "Begins Friday at 5:00 PM",
      location: "Mountain Lake Conference Center",
      description: "A weekend of worship, teaching, fellowship, and outdoor activities. Early registration recommended.",
      imageSrc: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-blue-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Connect with our community through upcoming gatherings, studies, and service opportunities.
          </p>
        </div>
      </div>
      
      {/* Events Section */}
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <select className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Events</option>
                <option>Bible Studies</option>
                <option>Worship</option>
                <option>Service & Outreach</option>
                <option>Special Events</option>
              </select>
              
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                <Filter size={16} />
                <span>Filter</span>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <EventCard 
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                imageSrc={event.imageSrc}
              />
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-blue-light/30 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">Want to suggest an event?</h3>
            <p className="text-lg mb-6">
              Have ideas for gatherings, studies, or service opportunities?
            </p>
            <button className="btn-primary">Submit Event Idea</button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
