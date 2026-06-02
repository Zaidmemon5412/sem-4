import { useContext } from "react";
import { ThemeContext } from "./Uc1";

function Uc3() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>

      <button
        onClick={toggleTheme}
        className="px-8 py-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Uc3;
