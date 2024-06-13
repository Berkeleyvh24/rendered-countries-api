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
  useEffect(() => {
        
    const fetchData = async () => {
        // get the data from the api
        const data = await fetch('https://restcountries.com/v3.1/all');
        // convert data to json
        const json = await data.json() as Country[];
        setCountries(json);
      }

      fetchData()
        // make sure to catch any error
        .catch(console.error);
  }, []);

  return (
    <div className="h-full px-20 pt-20">
      <div className="flex justify-between">
      <InputBar/>
      <FilterRegion/>
      </div>
      <div className="h-full mt-12">
        <CardsDisplay countries={countries}/>
      </div>
    </div>
  );
}
