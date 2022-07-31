import { Navigation, Search } from "./components";
import { useDarkmode } from "./hooks";

function App() {
  useDarkmode()
  return (
    <div className="flex justify-center items-center transition-colors bg-[#F6F8FF] dark:bg-[#141D2F] h-screen w-screen">
      <main className="font-spaceMono w-[730px]">
        <Navigation />
        <Search />
      </main>
    </div>
  );
}

export default App;
