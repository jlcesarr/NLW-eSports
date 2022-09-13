import "./styles/main.css";
import LogoImg from "./assets/logo-nlw-esports.svg";
import { MagnifyingGlassPlus } from "phosphor-react";
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center  my-20">
      <img src={LogoImg} alt="Esports Logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-[24px] mt-16">
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="./game-1.png" alt="" />
          <div className="absolute w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="./game-2.png" alt="" />
          <div className="absolute w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="./game-3.png" alt="" />
          <div className="absolute w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="./game-4.png" alt="" />
          <div className="absolute w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="./game-5.png" alt="" />
          <div className="absolute w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="./game-6.png" alt="" />
          <div className="absolute w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="bg-nlw-gradient pt-1 self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-white">
              Não encontrou seu duo?
            </h2>
            <p className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </p>
          </div>
          <button className="py-3 px-4 hover:bg-violet-600 bg-violet-500 text-white rounded-[6px] transition delay-0.5 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            <span>Publicar anúncio</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
