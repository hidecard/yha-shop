function Navbar() {
    return (
      <nav className="bg-yha-orange text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">YHA Shop</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 rounded-full text-yha-gray focus:outline-none focus:ring-2 focus:ring-yha-orange-light"
            />
            <button className="bg-yha-gray px-4 py-2 rounded-full hover:bg-gray-700 transition">
              Cart
            </button>
            <button className="bg-yha-gray px-4 py-2 rounded-full hover:bg-gray-700 transition">
              Login
            </button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;