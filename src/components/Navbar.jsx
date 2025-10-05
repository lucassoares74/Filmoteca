import { Menu } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "./../contexts/AppContext";

function Navbar() {
  const { isOpen, setisOpen } = useContext(AppContext);

  return (
    <div className="flex justify-center  lg:grid grid-cols-3  bg-gradient-to-r from-slate-800 via-blue-800 to-gray-700  w-screen lg:h-[400px] p-6 lg:p-0 lg:justify-between">
      <div className=" hidden lg:flex justify-center">
        <img
          src="https://images.tcdn.com.br/img/img_prod/460977/pre_venda_boneco_homem_de_ferro_iron_man_mark_xliii_vingadores_era_de_ultron_avengers_age_of_ultron__41852_1_20190313164222.png"
          alt=""
          className="h-[400px]"
        />
      </div>
      <div className="flex flex-col gap-6 lg:flex-col place-items-center justify-center">
        <h1 className="text-4xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
          Filmoteca
        </h1>
        <button
          onClick={() => {
            setisOpen(!isOpen);
          }}
          className="lg:hidden"
        >
          <Menu />
        </button>
        <div
          className={`bg-amber-50 lg:bg-transparent lg:flex lg:flex-row justify-center flex-col ${
            isOpen ? "flex" : "hidden"
          } w-screen`}
        >
          <button className="lg:text-white lg:text-3xl text-2xl  p-6  hover:text-pink-400 hover:text-4xl ">
            Home
          </button>
          <button className="lg:text-white lg:text-3xl text-2xl p-6  hover:text-pink-400 hover:text-4xl">
            Search
          </button>
          <button className="lg:text-white lg:text-3xl text-2xl p-6  hover:text-pink-400 hover:text-4xl">
            About Us
          </button>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img
          className="h-[400px]"
          src="https://i.pinimg.com/originals/8c/41/f1/8c41f1d34b4b720bc6f963f71dee2fb9.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
