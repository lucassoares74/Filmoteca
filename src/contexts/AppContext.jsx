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
  useEffect(() => {
    fetchFeatured();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setisOpen,
        isSearchOpen,
        setisSearchOpen,
        fetchFeatured,
        FeatArr,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
