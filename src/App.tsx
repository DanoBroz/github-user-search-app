import { Navigation, Search, UserCard } from "./components";
import { useDarkmode } from "./hooks";

function App() {
  useDarkmode()
  return (
    <div className="flex justify-center items-center transition-colors bg-[#F6F8FF] dark:bg-[#141D2F] h-screen w-screen">
      <main className="font-spaceMono w-4/5 sm:w-[573px] md:w-[730px]">
        <Navigation />
        <Search />
        <UserCard />
      </main>
    </div>
  );
}

export default App;
