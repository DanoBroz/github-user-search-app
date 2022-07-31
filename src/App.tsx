import { useDarkmode } from "./hooks/useDarkmode";

function App() {
  useDarkmode()
  return (
    <div className="bg-blue-400 dark:bg-blue-900 dark:text-blue-50">
      Hello there
    </div>
  );
}

export default App;
