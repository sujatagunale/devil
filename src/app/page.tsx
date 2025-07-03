import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-[family-name:var(--font-sans)]">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-black hover:text-green-500 transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-black hover:text-green-500 transition-colors">Shop</a>
              <a href="#" className="text-sm font-medium text-black hover:text-green-500 transition-colors">Categories</a>
              <a href="#" className="text-sm font-medium text-black hover:text-green-500 transition-colors">Pages</a>
            </nav>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center md:flex-none">
              <h1 className="text-xl font-bold tracking-wider">DEVSWAG</h1>
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

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Elements Menu */}
              <div className="hidden lg:block">
                <h3 className="text-sm font-medium text-gray-500 mb-4">ELEMENTS</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-400">01</span>
                    <div className="h-px bg-gray-300 flex-1"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-400">02</span>
                    <div className="h-px bg-gray-300 flex-1"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-black font-medium">03</span>
                    <div className="h-px bg-black flex-1"></div>
                  </div>
                </div>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                  CODE. DRINK.<br />
                  DEPLOY. REPEAT.
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                  Minimal developer swag to make your setup & you stand out.
                </p>
              </div>
            </div>

            {/* Right Product Showcase */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            {/* Tabs */}
            <div className="flex flex-wrap gap-6">
              <button className="text-sm font-medium text-black border-b-2 border-black pb-2">ALL</button>
              <button className="text-sm font-medium text-gray-500 hover:text-black transition-colors pb-2">T-SHIRTS</button>
              <button className="text-sm font-medium text-gray-500 hover:text-black transition-colors pb-2">HOODIES</button>
              <button className="text-sm font-medium text-gray-500 hover:text-black transition-colors pb-2">STICKERS</button>
              <button className="text-sm font-medium text-gray-500 hover:text-black transition-colors pb-2">MUGS</button>
              <button className="text-sm font-medium text-gray-500 hover:text-black transition-colors pb-2">ACCESSORIES</button>
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">FILTER</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                <div className="absolute top-3 left-3 bg-white px-2 py-1 text-xs font-medium rounded">NEW</div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-300 rounded flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,10.5C7.5,10.5 9,13 7.5,15.5C6,13 7.5,10.5 7.5,10.5M16.5,10.5C16.5,10.5 18,13 16.5,15.5C15,13 16.5,10.5 16.5,10.5Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium text-center mb-2">FRONTEND DEV TEE</h3>
              <p className="text-sm text-center text-gray-900 font-medium">$29</p>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">-15%</div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2,21V19H20V21H2M20,8V5L18,5V3A2,2 0 0,0 16,1H8A2,2 0 0,0 6,3V5H4V8A4,4 0 0,0 8,12H16A4,4 0 0,0 20,8M16,5H8V3H16V5Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium text-center mb-2">CODE & COFFEE MUG</h3>
              <div className="text-center">
                <span className="text-sm text-gray-400 line-through mr-2">$25</span>
                <span className="text-sm text-gray-900 font-medium">$21</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-16 bg-gray-300 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium text-center mb-2">REACT STICKER PACK</h3>
              <p className="text-sm text-center text-gray-900 font-medium">$8</p>
            </div>

            {/* Product 4 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                <div className="absolute top-3 left-3 bg-white px-2 py-1 text-xs font-medium rounded">NEW</div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                    <div className="w-2 h-8 bg-white rounded-full"></div>
                    <div className="w-2 h-12 bg-white rounded-full mx-1"></div>
                    <div className="w-2 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium text-center mb-2">DEVELOPER HOODIE</h3>
              <p className="text-sm text-center text-gray-900 font-medium">$65</p>
            </div>

            {/* Product 5 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-20 bg-gray-300 rounded flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V12L16.2,14.2L17,12.9L12.5,11.2V6H11Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium text-center mb-2">LAPTOP STAND</h3>
              <p className="text-sm text-center text-gray-900 font-medium">$45</p>
            </div>

            {/* Product 6 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">-20%</div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium text-center mb-2">MECHANICAL KEYBOARD</h3>
              <div className="text-center">
                <span className="text-sm text-gray-400 line-through mr-2">$120</span>
                <span className="text-sm text-gray-900 font-medium">$96</span>
              </div>
            </div>

            {/* Product 7 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-24 bg-red-500 rounded flex items-center justify-center">
                    <div className="w-8 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium text-center mb-2">GIT COMMIT POSTER</h3>
              <p className="text-sm text-center text-gray-900 font-medium">$18</p>
            </div>

            {/* Product 8 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                <div className="absolute top-3 left-3 bg-white px-2 py-1 text-xs font-medium rounded">NEW</div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-6 h-24 bg-gray-300 rounded-full flex items-end justify-center pb-4">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium text-center mb-2">DESK LAMP</h3>
              <p className="text-sm text-center text-gray-900 font-medium">$85</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Customer Service */}
            <div>
              <h3 className="text-sm font-medium text-black mb-4">CUSTOMER SERVICE</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Help & Contact Us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Online Stores</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-medium text-black mb-4">COMPANY</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">What We Do</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Available Services</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Latest Posts</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-medium text-black mb-4">SOCIAL MEDIA</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Twitter</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Tumblr</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Pinterest</a></li>
              </ul>
            </div>

            {/* Profile */}
            <div>
              <h3 className="text-sm font-medium text-black mb-4">PROFILE</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">My Account</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Checkout</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Order Tracking</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Help & Support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">Copyright©DevSwag Themes</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
