"use client";
import React, { useRef, useState, useEffect } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Heart,
    Share,
    Route,
    Calendar,
    Gauge,
    Settings,
    Fuel,
    X,
    Check,
    TrendingDown,
} from 'lucide-react';

const GuaranteeCard = () => {
  return (
    <div className="lg:w-[65%] py-8 pb-3 px-6">
      <div className="bg-red-100/50 rounded-xl p-8 relative overflow-hidden">
        {/* Circular gradient overlay */}
        <div className="absolute right-0 top-36 w-1/4 h-full bg-gray-50 bg-opacity-80 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* 14 days return policy */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 rounded-lg p-1">
                <Check className="text-white w-5 h-5" />
              </div>
              <h3 className="text-[#1e2b4d] text-lg font-bold ml-3">14 days return policy</h3>
            </div>
            <p className="text-[#4a5578] text-base hidden lg:block">
              If you don't fall in love with the car, simply return it to us.
            </p>
          </div>

          {/* Risk-free purchase */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 rounded-lg p-1">
                <Check className="text-white w-5 h-5" />
              </div>
              <h3 className="text-[#1e2b4d] text-lg font-bold ml-3">Risk-free purchase</h3>
            </div>
            <p className="text-[#4a5578] text-base hidden lg:block">
              We are liable for the technical condition of each sold car.
            </p>
          </div>

          {/* 6 months warranty */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 rounded-lg p-1">
                <Check className="text-white w-5 h-5" />
              </div>
              <h3 className="text-[#1e2b4d] text-lg font-bold ml-3">6 months warranty</h3>
            </div>
            <p className="text-[#4a5578] text-base hidden lg:block">
              In addition, with every car you receive an extended warranty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


const AppBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [currentTop, setCurrentTop] = useState(0);
    const appBarRef = useRef(null);
    const lastScrollY = useRef(0);
    const rafId = useRef(null);

    useEffect(() => {
        // Initial position measurement
        if (appBarRef.current) {
            const rect = appBarRef.current.getBoundingClientRect();
            setCurrentTop(rect.top + window.scrollY);
        }

        const updateSticky = () => {
            if (!appBarRef.current) return;

            const shouldBeSticky = lastScrollY.current > currentTop;
            setIsSticky(shouldBeSticky);

            if (shouldBeSticky) {
                // Dynamically update the top position
                appBarRef.current.style.top = `0px`;
            }
        };

        const handleScroll = () => {
            lastScrollY.current = window.scrollY;

            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }

            rafId.current = requestAnimationFrame(updateSticky);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [currentTop]);

    return (
        <div 
            ref={appBarRef}
            className={`w-full bg-red-50 py-2 border-b ${isSticky ? 'fixed left-0 shadow-md z-40' : 'relative'}`}
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
                        <a href="#details" className="py-4 text-red-500 font-medium border-b-2 border-red-500">
                            Details
                        </a>
                        <a href="#features" className="py-4 text-gray-600 font-medium hover:text-red-500">
                            Features
                        </a>
                        <a href="#price-history" className="py-4 text-gray-600 font-medium hover:text-red-500 flex items-center">
                            Price History
                            <span className="ml-2 bg-red-500 rounded p-1">
                                <TrendingDown className="w-4 h-4 text-white" />
                            </span>
                        </a>
                        <a href="#price-map" className="py-4 text-gray-600 font-medium hover:text-red-500">
                            Price map
                        </a>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="flex items-center text-red-500 hover:text-red-600">
                            <Heart className="h-5 w-5 mr-1.5 stroke-[1.5]" />
                            <span className="text-[14px] font-medium underline underline-offset-2">Favorites</span>
                        </button>
                        <button className="flex items-center text-red-500 hover:text-red-600">
                            <Share className="h-5 w-5 mr-1.5 stroke-[1.5]" />
                            <span className="text-[14px] font-medium underline underline-offset-2">Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

  
const CarDetailPage = () => {
    const scrollRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const specs = [
        { icon: <Route className="w-[18px] h-[18px] stroke-[1.5]" />, text: "5 km" },
        { icon: <Calendar className="w-[18px] h-[18px] stroke-[1.5]" />, text: "10/2024" },
        { icon: <Gauge className="w-[18px] h-[18px] stroke-[1.5]" />, text: "95 kW (129 hp)" },
        { icon: <Settings className="w-[18px] h-[18px] stroke-[1.5]" />, text: "Manual" },
        { icon: <Fuel className="w-[18px] h-[18px] stroke-[1.5]" />, text: "Petrol" }
    ];

    const features = [
        "Keyless entry", "Apple CarPlay", "Android auto", "Heated front seats",
        "Blind spot assist", "Electrically heated side mirrors", "Alarm", "USB"
    ];

    const images = Array(8).fill('https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lcmNlZGVzJTIwZTUzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60');

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowLeft') {
                scroll('left');
            } else if (event.key === 'ArrowRight') {
                scroll('right');
            }
        };
    
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);
    
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
    
        const checkScroll = () => {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 1
            );
        };
    
        container.addEventListener('scroll', checkScroll);
        checkScroll();
        window.addEventListener('resize', checkScroll);
    
        return () => {
            container.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);
    
    const scroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            // Calculate the width of one image including margin
            const imageWidth = container.querySelector('div').offsetWidth + 4; // 4px for margin
            
            container.scrollTo({
                left: direction === 'left' 
                    ? container.scrollLeft - imageWidth 
                    : container.scrollLeft + imageWidth,
                behavior: 'smooth'
            });
        }
    };
    

    const openModal = (index) => {
        setSelectedImage(index);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const navigateImage = (direction) => {
        if (direction === 'next') {
            setSelectedImage((prev) => (prev + 1) % images.length);
        } else {
            setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    return (
        <div>
            {/* Mobile/Tablet Header */}
            <div className="md:hidden relative">
                <div className="absolute top-4 left-4 z-10">
                    <button onClick={() => window.location.href = '/cars'} className="p-2 bg-white/90 rounded-lg shadow-lg">
                        <ChevronLeft className="h-6 w-6 text-[#1a224f] stroke-[1.5]" />
                    </button>
                </div>
                <div className="absolute top-4 right-4 z-10">
                    <button className="p-2 bg-white/90 rounded-lg shadow-lg ml-2">
                        <Share className="h-6 w-6 text-[#1a224f] stroke-[1.5]" />
                    </button>
                </div>
            </div>

            {/* Desktop Header Section */}
            <div className="hidden md:block max-w-7xl mx-auto px-8 py-4">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                        <ChevronLeft className="h-6 w-6 text-[#1a224f] stroke-[1.5] mr-1" />
                        <h1 className="text-[28px] font-bold text-red-600/70 tracking-[-0.5px]">
                            Suzuki SX4 S-Cross 95 kW
                        </h1>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="flex items-center text-red-500 hover:text-red-600">
                            <Heart className="h-5 w-5 mr-1.5 stroke-[1.5]" />
                            <span className="text-[14px] font-medium underline underline-offset-2">Favorites</span>
                        </button>
                        <button className="flex items-center text-red-500 hover:text-red-600">
                            <Share className="h-5 w-5 mr-1.5 stroke-[1.5]" />
                            <span className="text-[14px] font-medium underline underline-offset-2">Share</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 mb-4">
                    {specs.map((spec, index) => (
                        <div key={index} className="flex items-center text-[#4a5578]">
                            <span className="mr-1.5 size-4">{spec.icon}</span>
                            <span className="text-[14px] font-bold">{spec.text}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                    {features.map((feature, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-red-100/70 text-red-600/80 rounded-lg text-[14px] font-medium"
                        >
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            {/* Image Slider Section */}
            <div className="relative w-full">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(index)}
                            className="relative flex-shrink-0 w-full sm:w-[calc(50%-4px)] md:w-[calc(32%-4px)] snap-start cursor-pointer first:ml-0 ml-1" style={{ aspectRatio: '4/3' }}
                        >
                            <img
                                src={image}
                                alt={`Car view ${index + 1}`}
                                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    {showLeftArrow && (
                        <div className="absolute inset-y-0 left-6 flex items-center">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    scroll('left');
                                }}
                                className="hidden sm:flex pointer-events-auto p-3 items-center justify-center bg-red-100/90 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6 text-red-400" />
                            </button>
                        </div>
                    )}
                    {showRightArrow && (
                        <div className="absolute inset-y-0 right-6 flex items-center">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    scroll('right');
                                }}
                                className="hidden sm:flex  pointer-events-auto p-3 items-center justify-center bg-red-100/90 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6 text-red-400" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile/Tablet Content Section */}
            <div className="md:hidden px-4 py-6">
                <h1 className="text-2xl font-bold text-red-600/70 tracking-[-0.5px] mb-4">
                    Suzuki SX4 S-Cross 95 kW
                </h1>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                    {specs.map((spec, index) => (
                        <div key={index} className="flex items-center text-[#4a5578]">
                            <span className="mr-1.5 size-4">{spec.icon}</span>
                            <span className="text-[14px] font-bold">{spec.text}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                    {features.map((feature, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-red-100/70 text-red-600/80 rounded-lg text-[14px] font-medium"
                        >
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            {/* Modal Viewer */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
                    <button
                        onClick={closeModal}
                        className="absolute right-4 top-4 text-white hover:text-gray-300 z-50"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="h-full flex items-center justify-center relative w-full">
                        <img
                            src={images[selectedImage]}
                            alt={`Car view ${selectedImage + 1}`}
                            className="max-h-[85vh] max-w-[85vw] object-contain"
                        />

                        <div className="absolute bottom-4 right-4 bg-black/50 px-4 py-2 rounded-lg">
                            <span className="text-white text-sm">
                                {selectedImage + 1} / {images.length}
                            </span>
                        </div>

                        <button
                            onClick={() => navigateImage('prev')}
                            className="absolute left-4 p-2 bg-white/10 rounded-lg hover:bg-white/20"
                        >
                            <ChevronLeft className="w-8 h-8 text-white" />
                        </button>

                        <button
                            onClick={() => navigateImage('next')}
                            className="absolute right-4 p-2 bg-white/10 rounded-lg hover:bg-white/20"
                        >
                            <ChevronRight className="w-8 h-8 text-white" />
                        </button>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${selectedImage === index ? 'bg-white' : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}

            <style>
                {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
            </style>
            <GuaranteeCard/>
            <AppBar/>
        </div>
    );
};

export default CarDetailPage;