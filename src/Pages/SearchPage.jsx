import Navbar from "./../components/Navbar";
import SearchBar from "./../components/SearchBar";
import Footer from "./../components/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "./../contexts/AppContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Searchpage() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  const navigate = useNavigate();
  const { setpage, page, totalresults, FullList, loadingList, setSearchparam } =
    useContext(AppContext);
  useEffect(() => {
    setSearchparam(name);
  }, []);
  function isArr() {
    console.log(loadingList);

    if (loadingList === false && Array.isArray(FullList.Search)) {
      return FullList.Search.map((a) => {
        return (
          <div className="bg-slate-400 p-2 rounded-md shadow-black shadow-2xl flex gap-1 justify-center">
            <img className="h-[250px] rounded-md" src={a.Poster} alt="" />
            <div className="flex flex-col justify-center place-items-center">
              <h1 className="text-gray-300">{a.Year}</h1>
              <h1 className="text-[16px]">{a.Title}</h1>
            </div>
          </div>
        );
      });
    }
  }
  return (
    <div className="bg-slate-300 w-screen min-h-screen">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="flex mt-4 mb-4 justify-center ">
        <div className="grid grid-cols-5 gap-2">{isArr()}</div>
      </div>
      <div className="flex justify-center gap-2">
        <button
          onClick={() => {
            if (page < totalresults / page) {
              setpage((prevpage) => prevpage + 1);
            }
          }}
          className={`text-2xl ${page < totalresults / page ? "" : "hidden"}`}
        >
          Next
        </button>
        <button
          onClick={() => {
            if (page > 1) {
              setpage((prevpage) => Math.max(prevpage - 1, 0));
            }
          }}
          className={`text-2xl ${page > 1 ? "" : "hidden"}`}
        >
          Prev
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Searchpage;
