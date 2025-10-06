import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const [isSearchOpen, setisSearchOpen] = useState(false);
  const featuredNames = [
    "Superman",
    "F1: The Movie",
    "Sinners",
    "Weapons",
    "Ballerina",
    "Thunderbolts*",
    "Mission: Impossible – The Final Reckoning",
    "The Fantastic Four: First Steps",
    "Dune: Part Two",
    "Deadpool 2",
    "Joker: Folie à Deux",
    "Avatar: The Way of Water",
    "The Batman",
    "Spider-Man: No Way Home",
    "Oppenheimer",
    "The Marvels",
  ];
  const [FeatArr, setFeatArr] = useState();
  const [singleMov, setsingleMov] = useState();
  const [name, setname] = useState("Zootopia");
  const [Searchparam, setSearchparam] = useState("");
  const [FullList, setFullList] = useState();
  const [page, setpage] = useState(1);
  const [totalresults, settotalresults] = useState();
  const [loadingList, setloadingList] = useState(true);
  function getName(name) {
    setSearchparam(name);
  }

  function fetchFeatured() {
    const Featured = featuredNames.map((a) => {
      return axios
        .get(`https://www.omdbapi.com/?t=${a}&apikey=ab6d5543`)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.error("Erro na requisição:", error.message);
        });
    });
    Promise.all(Featured).then((results) => {
      const filtrados = results.filter((r) => r); // remove nulos
      setFeatArr(filtrados);
      console.log(filtrados);
    });
  }

  function GetSingle() {
    axios
      .get(`https://www.omdbapi.com/?t=${name}&apikey=ab6d5543`)
      .then((r) => {
        console.log("achadoooo");
        console.log(r.data);
        setsingleMov(r.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error.message);
      });
  }
  useEffect(() => {
    fetchFeatured();
    GetSingle();
  }, []);

  useEffect(() => {
    GetSingle();
  }, [name]);

  useEffect(() => {
    GetFullList();
  }, [Searchparam, page, totalresults]);
  function GetFullList() {
    axios
      .get(
        `https://www.omdbapi.com/?s=${Searchparam}&page=${page}&apikey=ab6d5543`
      )
      .then((r) => {
        console.log("felipinhoo");
        console.log(r.data);
        setFullList(r.data);
        settotalresults(r.data.totalResults);
        console.log(totalresults);
        if (totalresults > 0) {
         setloadingList(false);
          console.log("foi")
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error.message);
      });
  }
  return (
    <AppContext.Provider
      value={{
        isOpen,
        setisOpen,
        isSearchOpen,
        setisSearchOpen,
        fetchFeatured,
        FeatArr,
        GetSingle,
        singleMov,
        getName,
        setpage,
        page,
        totalresults,
        FullList,
        loadingList,
        setSearchparam,
        setname,        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
