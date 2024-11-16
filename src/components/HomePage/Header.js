"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
    const formFields = [
        { label: 'Make', placeholder: 'Select make' },
        { label: 'Model', placeholder: 'Choose model' },
        { label: 'Mileage', placeholder: 'Select mileage' },
        { label: 'Registration from', placeholder: 'Select year' },
        { label: 'Price up to', placeholder: 'Select price' },
    ];

    const stats = [
        { value: 54000, label: 'Cars traded' },
        { value: 50000, label: 'Cars listed' },
        { value: 4500, label: 'Reviews' },
    ];

    const [counters, setCounters] = useState(stats.map(() => 0));

    useEffect(() => {
        const intervals = stats.map((stat, index) => {
            const increment = Math.ceil(stat.value / 40);

            return setInterval(() => {
                setCounters((prevCounters) => {
                    const newCounters = [...prevCounters];
                    if (newCounters[index] < stat.value) {
                        newCounters[index] = Math.min(newCounters[index] + increment, stat.value);
                    }
                    return newCounters;
                });
            }, 30);
        });

        return () => intervals.forEach(clearInterval);
    }, []);

    return (
        <div
            className="bg-[#ffeded] min-h-screen pb-12 bg-cover bg-center"
            style={{ backgroundImage: "url('/heroImage/Enhanced.jpg')" }}
        >
            <div className="bg-zinc-600 bg-opacity-40 min-h-screen">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-32">
                    <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
                        {/* Left Column */}
                        <div className="space-y-8 mr-8 text-white">
                            <div className="space-y-8 mr-8 text-white">
                                <div>
                                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 mt-8 w-full leading-8">
                                        We import cars, <br /> From Europe
                                    </h1>
                                    <p className="text-[#E4E4E4] max-w-lg leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                                        Aliquam in hendrerit urna. Pellentesque sit amet
                                    </p>
                                </div>
                            </div>



                            <div className="flex flex-wrap gap-8 lg:gap-12 pt-5">
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <div className="text-3xl font-bold">
                                            {counters[index].toLocaleString()}+
                                        </div>
                                        <div className="text-gray-300">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Search Form */}
                        <div className="bg-white bg-opacity-70 rounded-2xl p-6 shadow-lg md:w-[47%] h-fit">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-semibold">Personalize your search</h2>
                                <div className="flex gap-1 bg-red-100 p-1 rounded-lg">
                                    <button className="bg-red-500 text-white px-4 py-1 rounded text-sm">
                                        Used
                                    </button>
                                    
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
                                {formFields.map((field) => (
                                    <div key={field.label} className="space-y-1.5">
                                        <label className="block text-gray-700 text-sm">{field.label}</label>
                                        <div className="relative">
                                            <select className="w-full border border-gray-200 rounded-lg p-2.5 appearance-none bg-white">
                                                <option value="">{field.placeholder}</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        </div>
                                    </div>
                                ))}

                                <div className="flex items-center">
                                    <label className="flex items-center cursor-pointer">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-500 rounded border-gray-300" />
                                        <span className="ml-2 text-gray-700 text-sm">VAT deduction</span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                                <button className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm">
                                    Advanced search <ChevronDown size={16} />
                                </button>
                                <button className="bg-red-500 text-white px-6 py-2.5 rounded-lg hover:bg-red-600 transition-colors">
                                    1 043 923 Offers
                                </button>
                            </div>

                            <div className="bg-red-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-600 mb-1">Previous filters</div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 text-sm truncate pr-4">
                                        Abarth 124 Spider, Kms driven to 5 000 km, Up to €2,000, First registration fr...
                                    </span>
                                    <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
