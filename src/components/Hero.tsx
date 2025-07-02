export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Swag & Merchandise
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Express your coding passion with our curated collection of developer-themed apparel, 
            accessories, and gear. From witty programming jokes to iconic framework logos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              View Collections
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative">
        <svg className="absolute bottom-0 w-full h-16 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
