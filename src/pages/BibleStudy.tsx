
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BibleSearch from '@/components/BibleSearch';
import { BookOpen, ChevronDown, Check } from 'lucide-react';

const BibleStudy = () => {
  // Sample reading plans data
  const readingPlans = [
    {
      title: "New Testament in 90 Days",
      description: "Read through the entire New Testament in just 3 months with daily readings.",
      duration: "90 days",
      category: "Biblical Overview"
    },
    {
      title: "Psalms & Proverbs",
      description: "Dive into the wisdom literature with this 30-day journey through selected passages.",
      duration: "30 days",
      category: "Devotional"
    },
    {
      title: "The Life of Jesus",
      description: "Follow Jesus's ministry through the Gospels with this chronological reading plan.",
      duration: "40 days",
      category: "Character Study"
    }
  ];
  
  // Sample study resources
  const studyResources = [
    {
      title: "Bible Commentary",
      description: "Access scholarly commentary on Bible passages to deepen your understanding.",
      link: "#"
    },
    {
      title: "Greek & Hebrew Word Study",
      description: "Examine original language meanings without needing to know Greek or Hebrew.",
      link: "#"
    },
    {
      title: "Historical Context",
      description: "Learn about the cultural and historical background of biblical texts.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-blue-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Bible Study</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Tools and resources to help you explore and understand Scripture.
          </p>
        </div>
      </div>
      
      {/* Bible Search Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <BibleSearch />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-serif font-bold">Study Tips</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-lg">Context Is Key</h4>
                  <p className="text-gray-600">Always consider the historical and literary context of the passage you're studying.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-lg">Cross-Reference</h4>
                  <p className="text-gray-600">Compare your passage with other related scriptures for deeper understanding.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-lg">Application</h4>
                  <p className="text-gray-600">Ask yourself how this passage applies to your life today.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-lg">Pray Before & After</h4>
                  <p className="text-gray-600">Ask for the Holy Spirit's guidance as you read and study.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reading Plans */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Reading Plans</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {readingPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="bg-primary h-2"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{plan.title}</h3>
                    <span className="bg-blue-light px-3 py-1 rounded-full text-sm font-medium text-blue-dark">
                      {plan.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{plan.category}</span>
                    <button className="btn-outline text-sm px-4 py-1.5">Start Plan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button className="inline-flex items-center text-primary font-medium hover:underline">
              View all reading plans
              <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Study Resources */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-6">Study Resources</h2>
          <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Tools to help you dig deeper into Scripture and enhance your understanding.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {studyResources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a href={resource.link} className="btn-primary block text-center">Access Resource</a>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-light/30 p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Weekly Bible Study Groups</h3>
                <p className="mb-4 text-gray-700">
                  Join one of our small groups meeting throughout the week for in-depth Bible study and discussion.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Led by trained facilitators</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Various times to fit your schedule</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>Materials provided</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1" size={18} />
                    <span>No prior Bible knowledge required</span>
                  </li>
                </ul>
                <button className="btn-primary">Find a Group</button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Bible study group" 
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

export default BibleStudy;
