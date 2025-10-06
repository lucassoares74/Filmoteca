import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { useContext } from "react";
import { AppContext } from "./../contexts/AppContext";
import SearchBar from "./../components/SearchBar";

function Single() {
  const { singleMov } = useContext(AppContext);
  return (
    <div className="bg-slate-300 w-full min-h-screen overflow-x-hidden">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div>
        <div className="flex flex-col justify-center place-items-center bg-slate-500 border-white rounded-md border-4">
          <div className="bg-slate-400  border-4 rounded-md">
            <img src={singleMov ? singleMov.Poster : ""} alt="" />
          </div>

          {singleMov ? (
            <div>
              <div className="grid grid-cols-[100px_1fr] grid-rows-9 bg-white border-2 font-semibold text-[16px]">
                <div className="border-2 p-2">Title</div>
                <div className="border-2 p-2">{singleMov.Title}</div>

                <div className="border-2 p-2">Diretor</div>
                <div className="border-2 p-2">{singleMov.Director}</div>

                <div className="border-2 p-2">Ano</div>
                <div className="border-2 p-2">{singleMov.Year}</div>

                <div className="border-2 p-2">Gênero</div>
                <div className="border-2 p-2">{singleMov.Genre}</div>

                <div className="border-2 p-2">Idioma</div>
                <div className="border-2 p-2">{singleMov.Language}</div>

                <div className="border-2 p-2">Duração</div>
                <div className="border-2 p-2">{singleMov.Runtime}</div>

                <div className="border-2 p-2">IMDb</div>
                <div className="border-2 p-2">{singleMov.imdbRating}</div>

                <div className="border-2 p-2">Produção</div>
                <div className="border-2 p-2">{singleMov.Production}</div>

                <div className="border-2 p-2">Sinopse</div>
                <div className="border-2  text-balance">{singleMov.Plot}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Single;
