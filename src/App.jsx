import { AppContext } from "./contexts/AppContext";
import Navbar from "./components/Navbar";
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="bg-slate-300 w-screen min-h-screen">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
