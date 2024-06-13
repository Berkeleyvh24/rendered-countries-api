"use client"

import Image from "next/image";
import InputBar from "./_components/Input";
import FilterRegion from "./_components/FilterRegion";
import CardsDisplay from "./_components/CardsDisplay";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Country } from "@/types/types";



export default function Home() {
  const [countries, setCountries] = useState<Country[]>([])
  const [searchValue, setSearchValue] = useState('');
  const [wholeRegion, setWholeRegion] = useState<string>('');

  // user searches in the input
  // pass the input data into the get request
  // countries are now displayed 
  // region is now clicked on 
  // setWholeRegion to the region clicked on
  // useEffect dependency array contains wholeRegion
  // useEffect is called
  // set an if statement that checks whether wholeRegion is empty
  // if not then continue with the normal search

  const handleReceiveMessage = async (region: string) => {
    fetchRegionData(region)
  };

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };


  const fetchRegionData = async (apiString: string) => {
    const url = `https://restcountries.com/v3.1/region/${apiString}`
  
    try {
      // Fetch data from the API
      const response = await fetch(url);
      // Convert data to JSON
      const json = await response.json();
      // Update state with fetched data
      setCountries(json);

    } catch (error) {
      setCountries([])
      console.error('Error fetching data:', error);
    }
  };
  

  const fetchData = async (searchValue:string) => {
    let url = 'https://restcountries.com/v3.1/all';
    if (searchValue !== '') {
      url = `https://restcountries.com/v3.1/name/${searchValue}`;
    }
  
    try {
      // Fetch data from the API
      const response = await fetch(url);
      // Convert data to JSON
      const json = await response.json();
      // Update state with fetched data
      setCountries(json);

    } catch (error) {
      setCountries([])
      console.error('Error fetching data:', error);
    }
  };

  
  useEffect(() => {
    
    fetchData(searchValue);

  }, [searchValue]);

  return (
    <div className="h-full px-20 pt-20">
      <div className="flex justify-between">
      <InputBar onInputChange={handleInputChange}/>
      <FilterRegion onFilterClicked={handleReceiveMessage}/>
      </div>
      <div className="h-full mt-12">
        <CardsDisplay countries={countries}/>
      </div>
    </div>
  );
}
