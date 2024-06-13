import { Country } from "@/types/types";
import Image from "next/image";


interface CardProps {
    country: Country
}

const Card = ({country}: CardProps) => {
    return (  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative w-full h-32">
      <Image src={country.flags.svg} alt={`${country.name} flag`} layout="fill" />
    </div>
    <div className="pt-6 pb-12 px-6">
      <h2 className="text-lg font-semibold mb-2">{country.name.common}</h2>
      <p className='text-sm'><span className="font-medium">Population:</span> {country.population?.toLocaleString()}</p>
      <p className='text-sm'><span className="font-medium">Region:</span> {country.region}</p>
      <p className='text-sm'><span className="font-medium">Capital:</span> {country.capital}</p>
    </div>
  </div> );
}
 
export default Card;