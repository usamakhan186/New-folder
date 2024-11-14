import React from 'react';
import { ChevronDown , CarIcon } from 'lucide-react';
import Link from 'next/link';

const brands = [
  { name: 'Toyota', logo: '/toyota.svg', cars: '933 cars' },
  { name: 'BMW', logo: '/bmw.svg', cars: '166 cars' },
  { name: 'Chevrolet', logo: '/chevrolet.svg', cars: '166 cars' },
  { name: 'Honda', logo: '/honda.svg', cars: '166 cars' },
  { name: 'Ford', logo: '/ford.svg', cars: '166 cars' },
  { name: 'Audi', logo: '/audi.svg', cars: '18 cars' },
  { name: 'Acura', logo: '/acura.svg', cars: '933 cars' },
  { name: 'Hyundai', logo: '/hyundai.svg', cars: '166 cars' },
  { name: 'Mercedes', logo: '/mercedes.svg', cars: '166 cars' },
  { name: 'Kia', logo: '/kia.svg', cars: '166 cars' },
  { name: 'Lexus', logo: '/lexus.svg', cars: '166 cars' },
  { name: 'Jeep', logo: '/jeep.svg', cars: '18 cars' }
];

const CarBrandsGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-20">
      <div className="flex flex-col space-y-6">
        <div className="flex sm:flex-row w-full flex-col justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Shop cars your way
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 space-x-1 border border-gray-400 p-1 rounded-lg">
            <button className="bg-emerald-500 text-white px-4 py-1.5 rounded-md whitespace-nowrap">
              Browse by Brands
            </button>
            <button className="bg-white text-gray-700 px-4 py-1.5 rounded-md whitespace-nowrap hover:bg-gray-50">
              Browse by Type
            </button>
            <button className="bg-white text-gray-700 px-4 py-1.5 rounded-md whitespace-nowrap hover:bg-gray-50">
              Popular Models
            </button>
            <button className="bg-white text-gray-700 px-4 py-1.5 rounded-md whitespace-nowrap hover:bg-gray-50">
              Browse by Year
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4 py-6">
          {brands.map((brand) => (
            <Link
              href={`/brands/${brand.name.toLowerCase()}`}
              key={brand.name}
              className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200"
            >
              <div className="w-8 h-8">
                <CarIcon className='w-full h-full object-contain'/>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">{brand.name}</span>
                <span className="text-sm text-gray-500">{brand.cars}</span>
              </div>
            </Link>
          ))}
        </div>

        <button className="flex items-center justify-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200">
          <span>See all brands</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CarBrandsGrid;