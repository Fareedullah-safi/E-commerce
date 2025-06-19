import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
// import { ExternalLink } from 'lucide-react';

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            title: "Unparalleled Sound",
            description: "Experience crystal-clear audio with premium headphones.",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Premium headphones on colorful background"
        },
        {
            id: 2,
            title: "Stay Connected",
            description: "Compact and stylish earphones for every occasion.",
            image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Woman with curly hair wearing earphones"
        },
        {
            id: 3,
            title: "Power in Every Pixel",
            description: "Shop the latest laptops for work, gaming, and more.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Professional man working on laptop"
        }
    ];

    return (
        <main>
            <h1 className="text-2xl md:text-3xl font-semibold pt-10 pb-4 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
                Popular products
            </h1>
            <div className='grid w-full gap-8 px-4 grid-cols-1 sm:grid-cols-2 w-full justify-center items-center md:grid-cols-2 lg:grid-cols-3 md:px-8 lg:px-16 xl:px-23 2xl:px-30'>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 group w-full sm:max-w-none"
                    >
                        {/* Product Image */}
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-80 xl:h-96 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent sm:from-black/60 sm:via-black/20"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-4 sm:p-6 md:p-6 lg:p-8 flex flex-col justify-end text-white">
                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                                    {product.title}
                                </h3>
                                <p className="text-gray-200 mb-4 sm:mb-6 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed line-clamp-2 sm:line-clamp-none">
                                    {product.description}
                                </p>

                                {/* CTA Button */}
                                <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md sm:rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-1 sm:gap-2 self-start group-hover:shadow-lg touch-manipulation">
                                    Buy now <FaCartArrowDown />
                                </button>
                            </div>
                        </div>

                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                <button className="bg-gray-800 hover:bg-gray-900 active:bg-black text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-md sm:rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl touch-manipulation">
                    View All Products
                </button>
            </div>
        </main>
    );
};

export default FeaturedProducts;
