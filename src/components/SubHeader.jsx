import { useContext } from "react";
import { AppContext } from "./../contexts/AppContext";

function SubHeader() {
  const { FeatArr } = useContext(AppContext);
  return (
    <div className="flex flex-col place-items-center mt-6 gap-8">
      <div>
        <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-4 py-2 rounded-md shadow-md">
          Filmes em destaque
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
       {FeatArr? FeatArr.map((a)=>{
       return( <div className="flex flex-col " key={a.imdbID}>
          <img className="h-[300px]"
            src={a.Poster}
            alt=""
          />
          <h1 className="text-center font-extrabold">
            {a.Title}
          </h1>
          <h1 className="text-center text-slate-500">{a.Year}</h1>
        </div>)
       }):""}
      </div>
    </div>
  );
}

export default SubHeader;
