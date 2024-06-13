"use client"
import { useEffect } from "react";
import data from '../(data)/data.json'; // Import the JSON file
import { GetStaticProps } from "next";
import Card from "./Card";
import {Country, Flags, Name} from '../../../types/types'
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CountriesPageProps{
    countries: Country[]
  }

const CardsDisplay = ({countries}: CountriesPageProps) => {
  // Load the data from the imported JSON file    
    return ( 
        <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {countries.map((country) => (
            <Card key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    )}
 
export default CardsDisplay;