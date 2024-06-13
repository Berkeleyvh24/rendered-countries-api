"use client"

import { useEffect, useRef, useState, MouseEventHandler } from "react";

const FilterRegion = () => {
    const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickedRegion: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLDivElement;
    const innerHtml = target.innerHTML;
    console.log('Div clicked!', innerHtml);
  }

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-48 h-full inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex justify-between items-center h-12 w-full shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          Filter By Region
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
          <div className="py-1">
            <div onClick={handleClickedRegion} className="cursor-pointer block w px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Africa
            </div>
            <div onClick={handleClickedRegion} className="cursor-pointer block w px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">America
            </div>
            <div onClick={handleClickedRegion} className="cursor-pointer block w px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Asia
            </div>
            <div onClick={handleClickedRegion} className="cursor-pointer block w px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Europe
            </div>
            <div onClick={handleClickedRegion} className="cursor-pointer block w px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Oceania
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}
 
export default FilterRegion;