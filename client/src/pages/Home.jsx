import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="min-h-screen bg-yha-gray-light">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="relative bg-gradient-to-r from-yha-orange to-yha-orange-light text-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to YHA Shop</h1>
          <p className="text-lg mb-6">Discover the best products at unbeatable prices!</p>
          <button className="bg-yha-gray text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;