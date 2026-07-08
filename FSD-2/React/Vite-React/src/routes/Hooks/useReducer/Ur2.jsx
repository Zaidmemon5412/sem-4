import { useReducer } from "react";

const initialState = {
  num1: "",
  num2: "",
  result: null,
};

function reducer(state, action) {
  const n1 = parseFloat(state.num1);
  const n2 = parseFloat(state.num2);

  switch (action.type) {
    case "SET_NUM1":
      return { ...state, num1: action.payload };
    case "SET_NUM2":
      return { ...state, num2: action.payload };
    case "ADD":
      if (state.num1 === "" || state.num2 === "") {
        return { ...state, result: "Please enter both numbers" };
      }
      return { ...state, result: isNaN(n1) || isNaN(n2) ? "Invalid input" : n1 + n2 };
    case "SUBTRACT":
      if (state.num1 === "" || state.num2 === "") {
        return { ...state, result: "Please enter both numbers" };
      }
      return { ...state, result: isNaN(n1) || isNaN(n2) ? "Invalid input" : n1 - n2 };
    case "MULTIPLY":
      if (state.num1 === "" || state.num2 === "") {
        return { ...state, result: "Please enter both numbers" };
      }
      return { ...state, result: isNaN(n1) || isNaN(n2) ? "Invalid input" : n1 * n2 };
    case "DIVIDE":
      if (state.num1 === "" || state.num2 === "") {
        return { ...state, result: "Please enter both numbers" };
      }
      if (isNaN(n1) || isNaN(n2)) {
        return { ...state, result: "Invalid input" };
      }
      if (n2 === 0) {
        return { ...state, result: "Cannot divide by zero" };
      }
      return { ...state, result: n1 / n2 };
    case "CLEAR":
      return { num1: "", num2: "", result: null };
    default:
      return state;
  }
}

function Ur2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center p-6 mt-10">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Simple Calculator (useReducer)
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Number 1
            </label>
            <input
              type="number"
              value={state.num1}
              onChange={(e) =>
                dispatch({ type: "SET_NUM1", payload: e.target.value })
              }
              placeholder="Enter first number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Number 2
            </label>
            <input
              type="number"
              value={state.num2}
              onChange={(e) =>
                dispatch({ type: "SET_NUM2", payload: e.target.value })
              }
              placeholder="Enter second number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-gray-50"
            />
          </div>

          <div className="grid grid-cols-4 gap-2 pt-2">
            <button
              onClick={() => dispatch({ type: "ADD" })}
              className="py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors duration-200"
            >
              +
            </button>
            <button
              onClick={() => dispatch({ type: "SUBTRACT" })}
              className="py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors duration-200"
            >
              -
            </button>
            <button
              onClick={() => dispatch({ type: "MULTIPLY" })}
              className="py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors duration-200"
            >
              &times;
            </button>
            <button
              onClick={() => dispatch({ type: "DIVIDE" })}
              className="py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors duration-200"
            >
              &divide;
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors duration-200"
            >
              Clear
            </button>
          </div>

          {state.result !== null && (
            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 text-center">
              <span className="block text-sm text-blue-600 font-semibold uppercase tracking-wider">
                Result
              </span>
              <span className="text-2xl font-bold text-blue-900 mt-1 block">
                {state.result}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ur2;
