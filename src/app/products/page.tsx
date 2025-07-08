import React from "react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-[family-name:var(--font-sans)]">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium text-black hover:text-green-500 transition-colors">Home</Link>
              <Link href="/products" className="text-sm font-medium text-black hover:text-green-500 transition-colors">Shop</Link>
              <a href="#" className="text-sm font-medium text-black hover:text-green-500 transition-colors">Categories</a>
              <a href="#" className="text-sm font-medium text-black hover:text-green-500 transition-colors">Pages</a>
            </nav>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center md:flex-none">
              <Link href="/" className="text-xl font-bold tracking-wider">DEVSWAG</Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-green-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 hover:text-green-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="p-2 hover:text-green-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="p-2 hover:text-green-500 transition-colors relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 005 16h12M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4.01" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-black transition-colors">Home</Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-black font-medium">Product Listing</span>
          </div>
        </div>
      </section>

      {/* Category Header */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            {/* Category Title */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Developer Gear</h1>
              <div className="flex items-center space-x-4 text-sm">
                <button className="text-black border-b-2 border-black pb-1">Active</button>
                <button className="text-gray-500 hover:text-black transition-colors pb-1">Popular</button>
              </div>
            </div>

            {/* Filter Button */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded hover:border-black transition-colors">
              <span className="text-sm font-medium">Filter by</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="relative bg-blue-100 rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V12L16.2,14.2L17,12.9L12.5,11.2V6H11Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Pomodoro Timer</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 24.5</p>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2,21V19H20V21H2M20,8V5L18,5V3A2,2 0 0,0 16,1H8A2,2 0 0,0 6,3V5H4V8A4,4 0 0,0 8,12H16A4,4 0 0,0 20,8M16,5H8V3H16V5Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Code & Coffee Mug</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 18.5</p>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">Sale</div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-20 bg-orange-500 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Desk Lamp</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 89.5</p>
            </div>

            {/* Product 4 */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-16 bg-gray-300 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Mechanical Keyboard</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 125.0</p>
            </div>

            {/* Product 5 */}
            <div className="group cursor-pointer">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">Sale</div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-20 bg-orange-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-8 bg-orange-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Desk Organizer</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 45.0</p>
            </div>

            {/* Product 6 */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-24 bg-gray-400 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V12L16.2,14.2L17,12.9L12.5,11.2V6H11Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Standing Desk</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 299.0</p>
            </div>

            {/* Product 7 */}
            <div className="group cursor-pointer">
              <div className="relative bg-yellow-100 rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-16 bg-yellow-300 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-yellow-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Rubber Duck</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 12.5</p>
            </div>

            {/* Product 8 */}
            <div className="group cursor-pointer">
              <div className="relative bg-blue-100 rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-300 rounded flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Monitor Stand</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 67.5</p>
            </div>

            {/* Product 9 */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Wireless Mouse</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 45.0</p>
            </div>

            {/* Product 10 */}
            <div className="group cursor-pointer">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">Sale</div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-20 bg-orange-400 rounded flex items-center justify-center">
                    <div className="w-8 h-2 bg-orange-200 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Desk Pad</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 35.0</p>
            </div>

            {/* Product 11 */}
            <div className="group cursor-pointer">
              <div className="relative bg-blue-100 rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-16 bg-blue-300 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Cable Management</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 22.0</p>
            </div>

            {/* Product 12 */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-700 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">Laptop Stand</h3>
              <p className="text-sm text-gray-600 mb-2">Desk Accessory</p>
              <p className="text-sm font-medium">US$ 78.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">Showing</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">1 of 8</span>
            </div>
            <button className="text-sm font-medium hover:text-green-500 transition-colors">Next</button>
          </div>
        </div>
      </section>
    </div>
  );
}
