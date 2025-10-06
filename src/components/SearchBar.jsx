import { useContext } from "react";
import { AppContext } from "./../contexts/AppContext";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isSearchOpen, getName, setpage } = useContext(AppContext);
  return (
    <div className={isSearchOpen ? "" : "hidden"}>
      <div className={`flex flex-col justify-center place-items-center`}>
        <h1 class="text-4xl font-bold text-slate-800 mb-4 tracking-wide drop-shadow-md">
          buscar...
        </h1>
        <input
          onChange={(event) => {
            if (location.pathname !== "/Search") {
              navigate("/Search");
            }
            setTimeout(() => {
              setpage(1);
              getName(event.target.value);
            }, 500);
          }}
          className="w-[80%] text-center text-xl px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white placeholder-slate-500 shadow-md"
          type="text"
          placeholder="Digite aqui o nome do filme desejado..."
        />
      </div>
    </div>
  );
}

export default SearchBar;
