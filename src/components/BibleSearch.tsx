
import React, { useState } from 'react';
import { Search, Book, BookOpen } from 'lucide-react';

interface SearchResult {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

// Mock Bible verses data
const mockBibleData: SearchResult[] = [
  {
    book: "John",
    chapter: 3,
    verse: 16,
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
  },
  {
    book: "Romans",
    chapter: 8,
    verse: 28,
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."
  },
  {
    book: "Philippians",
    chapter: 4,
    verse: 13,
    text: "I can do all this through him who gives me strength."
  },
  {
    book: "Psalm",
    chapter: 23,
    verse: 1,
    text: "The LORD is my shepherd, I lack nothing."
  },
  {
    book: "Proverbs",
    chapter: 3,
    verse: 5,
    text: "Trust in the LORD with all your heart and lean not on your own understanding."
  }
];

const BibleSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Filter verses containing the search term
      const filteredResults = mockBibleData.filter(verse => 
        verse.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verse.book.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setResults(filteredResults);
      setIsSearching(false);
    }, 800);
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <BookOpen className="text-primary mr-3" size={24} />
        <h3 className="text-xl font-serif font-bold">Bible Search</h3>
      </div>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for verses, keywords, or references..."
            className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
            disabled={isSearching}
          >
            <Search size={20} />
          </button>
        </div>
      </form>
      
      {isSearching && (
        <div className="text-center py-4">
          <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-2 text-gray-600">Searching scriptures...</p>
        </div>
      )}
      
      {!isSearching && results.length > 0 && (
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-md hover:border-primary transition-colors">
              <div className="flex items-start">
                <Book className="text-primary mr-3 mt-1" size={18} />
                <div>
                  <h4 className="font-medium">
                    {result.book} {result.chapter}:{result.verse}
                  </h4>
                  <p className="text-gray-600 mt-1">{result.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!isSearching && searchTerm && results.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          No results found. Try different keywords.
        </div>
      )}
      
      {!searchTerm && !results.length && (
        <div className="text-center py-8 text-gray-500">
          <Book className="mx-auto mb-3" size={32} />
          <p>Enter a search term to find verses</p>
        </div>
      )}
    </div>
  );
};

export default BibleSearch;
