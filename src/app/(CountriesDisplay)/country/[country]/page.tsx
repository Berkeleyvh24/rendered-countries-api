"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { removeSpaces } from "@/utils/removeSpaces";
import { Country, CountryDetail, currencyDetail } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

const CountryPage = ({ params }: { params: { country: string } }) => {
  const [data, setData] = useState<CountryDetail>();
  if (data !== undefined) {
    // Object.values(data.currencies).map(currency => (currency))
    Object.values(data.currencies).map((currency) => console.log(currency));
  }

  useEffect(() => {
    const countryUrl = decodeURIComponent(params.country);
    const fetchData = async () => {
      let url = `https://restcountries.com/v3.1/name/${countryUrl}`;

      try {
        // Fetch data from the API
        const response = await fetch(url);
        // Convert data to JSON
        const json = await response.json();
        console.log(json, '----')
        // Update state with fetched data
        setData(json[0] as CountryDetail);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-28">
        <Link
          className="mb-8 flex items-center px-4 py-2 border border-gray-300 rounded shadow hover:bg-gray-100"
          href="/"
        >
          <span className="mr-2">←</span> Back
        </Link>
      </div>
      {data !== undefined ? (
        <div className="flex flex-wrap flex-row">
          <div className="flex-1 min-w-[600px] mr-20">
            <Image
              src={data.flags.svg}
              alt={`${data.name} flag`}
              width={600}
              height={0}
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="mt-20 pb-10">
            <h1 className="text-3xl font-bold mb-4">{data.name.common}</h1>

            <div className="flex flex-wrap flex-row">
              <div className="pb-20 pr-20">
                <p className="py-2">
                  <strong>Native Name:</strong> {data.name.official}
                </p>
                <p className="py-2">
                  <strong>Population:</strong>{" "}
                  {data.population.toLocaleString()}
                </p>
                <p className="py-2">
                  <strong>Region:</strong> {data.region}
                </p>
                <p className="py-2">
                  <strong>Sub Region:</strong> {data.subregion}
                </p>
                <p className="py-2">
                  <strong>Capital:</strong> {data.capital}
                </p>
              </div>
              <div className="pr-20">
                <p className="py-2">
                  <strong>Top Level Domain:</strong> {data.tld.join(", ")}
                </p>
                {Object.values(data.currencies).map((currency, index) => (
                  <p className="py-2" key={index}>
                    <strong>Currencies:</strong>
                    {currency.name}
                  </p>
                ))}
                <p className="py-2">
                  <strong>Languages:</strong> {Object.values(data.languages).join(', ')}
                </p>
              </div>
            </div>
            <div className="mt-4">
            {data.borders !== undefined ? <p className="py-2">
                  <strong>Border Countries:</strong> {data.borders.map((border) => (
                    <span
                      key={border}
                      className="inline-block px-4 py-2 border border-gray-300 rounded mr-2 mb-2"
                    >
                      {border}
                    </span>
                  ))}
                </p> : <div></div>}
            
                  
                </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CountryPage;
