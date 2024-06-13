"use client"

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { removeSpaces } from '@/utils/removeSpaces';
import { Country } from "@/types/types";

const CountryPage = ({params}: { params: {country : string}}) => {

  const [data, setData] = useState<Country[]>([])


    useEffect(() => {
      const countryUrl = decodeURIComponent(params.country)
      const finalCountryUrl = removeSpaces(countryUrl)
      
        const fetchData = async () => {
//${finalCountryUrl}
            let url = `https://restcountries.com/v3.1/name/Belgium`;
          
            try {
              // Fetch data from the API
              const response = await fetch(url);
              // Convert data to JSON
              const json = await response.json();
              // Update state with fetched data
              console.log(json, "++++")
              setData(json)
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

          fetchData()
    
      },[]);


    return ( 
    <div>
        <p>{}</p>
    </div> );
}
 
export default CountryPage;