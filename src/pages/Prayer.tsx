
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrayerWall from '@/components/PrayerWall';
import { Bookmark, Clock, ChevronsUp, Check } from 'lucide-react';

const Prayer = () => {
  // Prayer resources
  const prayerResources = [
    {
      title: "Prayer Guide",
      description: "A comprehensive guide to different types of prayer and how to develop your prayer life.",
      icon: Bookmark
    },
    {
      title: "Daily Prayer Points",
      description: "Specific prayer points updated daily to help focus your prayer time.",
      icon: Clock
    },
    {
      title: "Prayer Challenges",
      description: "Monthly challenges to stretch and grow your prayer habits and experiences.",
      icon: ChevronsUp
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-blue-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Prayer Wall</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Share prayer requests, pray for others, and see how God is working in our community.
          </p>
        </div>
      </div>
      
      {/* Prayer Wall Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <PrayerWall />
            </div>
            
            <div className="space-y-8">
              {/* Prayer Times */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4">Prayer Gatherings</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-3">
                    <h4 className="font-medium">Morning Prayer</h4>
                    <p className="text-gray-600">Monday-Friday, 8:00-8:30 AM</p>
                    <p className="text-gray-600">Campus Prayer Room</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-3">
                    <h4 className="font-medium">Midday Prayer Break</h4>
                    <p className="text-gray-600">Wednesdays, 12:15-12:45 PM</p>
                    <p className="text-gray-600">Student Center Lawn</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-3">
                    <h4 className="font-medium">Prayer & Worship Night</h4>
                    <p className="text-gray-600">First Friday of each month, 8:00 PM</p>
                    <p className="text-gray-600">University Chapel</p>
                  </div>
                </div>
              </div>
              
              {/* Prayer Resources */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4">Prayer Resources</h3>
                
                <div className="space-y-4">
                  {prayerResources.map((resource, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3">
                        <resource.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium">{resource.title}</h4>
                        <p className="text-gray-600 text-sm">{resource.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="mt-4 w-full btn-outline">Access Resources</button>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Prayer Testimonials</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "I posted a prayer request about my mom's surgery last month. The amount of support and prayers I received was overwhelming. I'm happy to share that her surgery was successful and she's recovering well!"
                </p>
                <p className="font-medium text-right">— Rachel S.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "When I was struggling with anxiety about my finals, I shared it on the prayer wall. Knowing that others were praying for me gave me peace, and I was able to focus and do well on my exams."
                </p>
                <p className="font-medium text-right">— Marcus T.</p>
              </div>
            </div>
          </div>
          
          {/* Prayer Partners */}
          <div className="mt-16 bg-blue-light/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Prayer Partners Program</h3>
                <p className="mb-4 text-gray-700">
                  Connect with a prayer partner for regular prayer and accountability throughout the semester.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Meet weekly for prayer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Share prayer requests and answers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Grow together in your prayer life</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Training and resources provided</span>
                  </li>
                </ul>
                <button className="btn-primary">Sign Up</button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1274&q=80" 
                  alt="Prayer partners" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Prayer;
