function Navbar() {
  return (
    <div className=" flex flex-col place-items-center bg-gradient-to-r from-slate-700 via-gray-600 to-slate-500  w-screen h-[400px] justify-between">
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
        Filmoteca
      </h1>
      <div>
        <button className="text-white text-3xl border-r-2 p-6 border-l-2 hover:text-pink-400 hover:text-4xl ">
          Home
        </button>
        <button className="text-white text-3xl border-r-2 p-6 border-l-2 hover:text-pink-400 hover:text-4xl">
          Search
        </button>
        <button className="text-white text-3xl border-r-2 p-6 border-l-2 hover:text-pink-400 hover:text-4xl">
          About Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
