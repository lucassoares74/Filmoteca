import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

function Single() {
  return (
    <div className="bg-slate-300 w-screen min-h-screen">
      <Navbar></Navbar>
      <div>
        <div className="flex justify-center bg-slate-500 border-white rounded-md border-4">
          <div className="bg-slate-400  border-4 rounded-md">
            <img
              src="https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_SX300.jpg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-[180px_1fr] grid-rows-9 bg-white border-2 font-semibold text-[16px]">
            <div className="border-2 p-2">Title</div>
            <div className="border-2 p-2">Superman</div>

            <div className="border-2 p-2">Diretor</div>
            <div className="border-2 p-2">Marivaldo dos Santos</div>

            <div className="border-2 p-2">Ano</div>
            <div className="border-2 p-2">1978</div>

            <div className="border-2 p-2">Gênero</div>
            <div className="border-2 p-2">Ação, Aventura</div>

            <div className="border-2 p-2">Idioma</div>
            <div className="border-2 p-2">Inglês</div>

            <div className="border-2 p-2">Duração</div>
            <div className="border-2 p-2">143 min</div>

            <div className="border-2 p-2">IMDb</div>
            <div className="border-2 p-2">7.3</div>

            <div className="border-2 p-2">Produção</div>
            <div className="border-2 p-2">Warner Bros.</div>

            <div className="border-2 p-2">Sinopse</div>
            <div className="border-2 p-2">
              Um bebê alienígena é enviado à Terra e cresce como herói.
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Single;
