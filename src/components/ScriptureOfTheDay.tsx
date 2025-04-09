
import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

interface Scripture {
  text: string;
  reference: string;
}

const scriptures: Scripture[] = [
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16"
  },
  {
    text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6"
  },
  {
    text: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13"
  },
  {
    text: "The LORD is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:1-3"
  },
  {
    text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11"
  },
  {
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
    reference: "Joshua 1:9"
  },
  {
    text: "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.",
    reference: "Mark 11:24"
  }
];

const ScriptureOfTheDay = () => {
  const [scripture, setScripture] = useState<Scripture>({ text: "", reference: "" });
  
  const getRandomScripture = () => {
    const randomIndex = Math.floor(Math.random() * scriptures.length);
    return scriptures[randomIndex];
  };
  
  const refreshScripture = () => {
    setScripture(getRandomScripture());
  };
  
  useEffect(() => {
    setScripture(getRandomScripture());
  }, []);
  
  return (
    <div className="bible-verse my-8 mx-auto max-w-3xl animate-fade-in">
      <button 
        onClick={refreshScripture}
        className="absolute top-4 right-4 text-gray-500 hover:text-primary"
        aria-label="Get new scripture"
      >
        <RefreshCw size={20} />
      </button>
      <h3 className="font-serif text-2xl mb-2 text-center">Scripture of the Day</h3>
      <p className="text-lg mb-4 text-center italic">{scripture.text}</p>
      <p className="text-right font-medium text-primary">{scripture.reference}</p>
    </div>
  );
};

export default ScriptureOfTheDay;
