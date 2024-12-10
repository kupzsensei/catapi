import { useEffect } from "react";
import CatCard from "./components/CatCard";
import { getCatAPI } from "./API/catAPI";
import { useState } from "react";

function App() {
  const [cats, setCats] = useState([]); // state variable
  const [toggleReload, setToggleReload] = useState(true);

  useEffect(() => {
    getCatAPI().then((hey) => {
      setCats(hey);
    });
  }, [toggleReload]);

  const handleReload = () => {
    setToggleReload(!toggleReload);
  };

  return (
    <main className="w-screen p-5 h-screen bg-red-200 flex flex-col">
      <h1
        className="font-bold text-3xl text-white drop-shadow-md"
        onClick={handleReload}
      >
        CATAPI
      </h1>

      <section className="flex-1 min-h-0 overflow-y-auto flex flex-wrap gap-5">
        {cats?.map((cat) => (
          <CatCard key={cat.id} data={cat} />
        ))}
      </section>
    </main>
  );
}

export default App;
