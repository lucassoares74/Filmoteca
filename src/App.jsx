import { AppContext } from "./contexts/AppContext";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-300 w-screen min-h-screen">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <SubHeader></SubHeader>
      <Footer></Footer>
    </div>
  );
}

export default App;
