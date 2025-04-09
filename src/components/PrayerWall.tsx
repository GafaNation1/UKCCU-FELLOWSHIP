
import React, { useState } from 'react';
import { PlusCircle, Heart, Clock } from 'lucide-react';

interface Prayer {
  id: number;
  name: string;
  content: string;
  timestamp: string;
  prayerCount: number;
  isPrayed: boolean;
}

// Mock prayer data
const initialPrayers: Prayer[] = [
  {
    id: 1,
    name: "Sarah M.",
    content: "Please pray for my mother who is going through chemotherapy treatments.",
    timestamp: "2 hours ago",
    prayerCount: 24,
    isPrayed: false
  },
  {
    id: 2,
    name: "Michael T.",
    content: "I'm struggling with anxiety over my upcoming exams. Prayers appreciated.",
    timestamp: "5 hours ago",
    prayerCount: 18,
    isPrayed: false
  },
  {
    id: 3,
    name: "Anonymous",
    content: "Praying for guidance as I make decisions about my future career.",
    timestamp: "1 day ago",
    prayerCount: 32,
    isPrayed: false
  },
  {
    id: 4,
    name: "David L.",
    content: "Thankful for my recovery from surgery. Praise the Lord!",
    timestamp: "2 days ago",
    prayerCount: 45,
    isPrayed: false
  }
];

const PrayerWall: React.FC = () => {
  const [prayers, setPrayers] = useState<Prayer[]>(initialPrayers);
  const [newPrayer, setNewPrayer] = useState("");
  const [name, setName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newPrayer.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      const displayName = isAnonymous ? "Anonymous" : name || "Anonymous";
      
      const prayer: Prayer = {
        id: Date.now(),
        name: displayName,
        content: newPrayer,
        timestamp: "Just now",
        prayerCount: 0,
        isPrayed: false
      };
      
      setPrayers([prayer, ...prayers]);
      setNewPrayer("");
      setName("");
      setIsAnonymous(false);
      setIsSubmitting(false);
    }, 500);
  };
  
  const handlePrayClick = (id: number) => {
    setPrayers(prayers.map(prayer => {
      if (prayer.id === id) {
        return {
          ...prayer,
          prayerCount: prayer.isPrayed ? prayer.prayerCount - 1 : prayer.prayerCount + 1,
          isPrayed: !prayer.isPrayed
        };
      }
      return prayer;
    }));
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-serif font-bold mb-6 text-center">Prayer Wall</h3>
      
      <form onSubmit={handlePrayerSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="prayer-content" className="block text-sm font-medium text-gray-700 mb-1">
            Share your prayer request
          </label>
          <textarea
            id="prayer-content"
            rows={3}
            value={newPrayer}
            onChange={(e) => setNewPrayer(e.target.value)}
            placeholder="What would you like others to pray for?"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name (optional)"
            disabled={isAnonymous}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              isAnonymous ? "bg-gray-100" : ""
            }`}
          />
        </div>
        
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="anonymous"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
            Post anonymously
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || !newPrayer.trim()}
          className="flex items-center justify-center w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              <PlusCircle size={18} className="mr-2" />
              Share Prayer
            </>
          )}
        </button>
      </form>
      
      <div className="space-y-4">
        {prayers.map((prayer) => (
          <div key={prayer.id} className="border border-gray-200 rounded-md p-4 hover:border-primary transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">{prayer.name}</h4>
              <div className="flex items-center text-sm text-gray-500">
                <Clock size={14} className="mr-1" />
                <span>{prayer.timestamp}</span>
              </div>
            </div>
            <p className="text-gray-700 mb-3">{prayer.content}</p>
            <button
              onClick={() => handlePrayClick(prayer.id)}
              className={`flex items-center text-sm ${
                prayer.isPrayed ? "text-red-500" : "text-gray-500 hover:text-red-500"
              } transition-colors`}
            >
              <Heart
                size={16}
                className={`mr-1 ${prayer.isPrayed ? "fill-red-500" : ""}`}
              />
              <span>
                {prayer.isPrayed ? "Prayed" : "Pray"} ({prayer.prayerCount})
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerWall;
