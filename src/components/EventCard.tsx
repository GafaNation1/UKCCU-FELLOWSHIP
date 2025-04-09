
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageSrc: string;
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, 
  date, 
  time, 
  location, 
  description, 
  imageSrc 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
        
        <div className="flex items-center text-sm mb-2 text-gray-600">
          <Calendar size={16} className="mr-2 text-primary" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center text-sm mb-2 text-gray-600">
          <Clock size={16} className="mr-2 text-primary" />
          <span>{time}</span>
        </div>
        
        <div className="flex items-center text-sm mb-4 text-gray-600">
          <MapPin size={16} className="mr-2 text-primary" />
          <span>{location}</span>
        </div>
        
        <p className="text-gray-600 mb-5">{description}</p>
        
        <button className="btn-primary w-full">RSVP</button>
      </div>
    </div>
  );
};

export default EventCard;
