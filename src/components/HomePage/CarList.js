import React from 'react';
import { MapPin, Heart, ExternalLink } from 'lucide-react';

const CarListings = () => {
  const categories = ["Sedan", "SUV", "Luxury", "Sports", "Trucks"];
  
  const cars = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1lcmNlZGVzJTIwYzM1MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      price: "CHF 39,999",
      model: "2015 Mercedes-Benz C350",
      mileage: "46500km",
      fuelType: "Petrol",
      efficiency: "22kmpl",
      transmission: "Automatic",
      location: "Geneva",
      watchers: 29
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lcmNlZGVzJTIwZTUzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: "CHF 46,998",
      model: "2019 Mercedes-Benz E53 AMG",
      mileage: "46500km",
      fuelType: "Petrol", 
      efficiency: "22kmpl",
      transmission: "Automatic",
      location: "Geneva",
      watchers: 29
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13JTIwMzMwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: "CHF 25,998",
      model: "2017 BMW 330 XI",
      mileage: "46500km",
      fuelType: "Petrol",
      efficiency: "22kmpl",
      transmission: "Automatic",
      location: "Geneva",
      watchers: 29
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF1ZGklMjBhNXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      price: "CHF 37,999",
      model: "2018 Audi A5 Premium Plus",
      mileage: "46500km",
      fuelType: "Petrol",
      efficiency: "22kmpl",
      transmission: "Automatic",
      location: "Geneva",
      watchers: 29
    }
  ];


  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
        <h2 className="text-3xl font-medium text-gray-800 mb-4 sm:mb-0">
          The most searched cars
        </h2>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all
                ${index === 0 
                  ? 'bg-emerald-500 text-white shadow-sm' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div 
            key={car.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-5">
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-gray-800">{car.price}</h3>
                <p className="text-sm font-medium text-gray-600 mt-1">{car.model}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-50 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 text-center">
                  {car.mileage}
                </div>
                <div className="bg-gray-50 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 text-center">
                  {car.fuelType}
                </div>
                <div className="bg-gray-50 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 text-center">
                  {car.efficiency}
                </div>
                <div className="bg-gray-50 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 text-center">
                  {car.transmission}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-gray-600">{car.location}</span>
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-gray-600">{car.watchers} Watchers</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  
                  <button 
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-sm"
                    aria-label="View details"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListings;