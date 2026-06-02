import { useReducer} from 'react'


function Ur2() {
    const [state,dispatch] = useReducer(reducer,{num1:0,num2:0,result:0})
    function reducer(state,action){
        switch(action.type){
            case 'SET_NUM1':
                return({...state,num1:Number(action.payload)})
            case 'SET_NUM2':
                return({...state,num2:Number(action.payload)})

            case 'add':
                return ({...state,result: state.num1+state.num2 })
            case 'sub':
                return ({...state,result: state.num1-state.num2 })
            case 'mul':
                return ({...state,result: state.num1 * state.num2 })
            case 'div':
                return ({...state,result: state.num1 / state.num2 })

            default : 
            return (state)
        }

    }
  return (
  <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow">
  <h1 className="text-2xl font-semibold text-center mb-5">
    Calculator
  </h1>

  <input
    type="number"
    placeholder="Enter Number 1"
    className="w-full p-2 mb-3 border rounded"
    onChange={(e) =>
      dispatch({
        type: "SET_NUM1",
        payload: e.target.value,
      })
    }
  />

  <input
    type="number"
    placeholder="Enter Number 2"
    className="w-full p-2 mb-4 border rounded"
    onChange={(e) =>
      dispatch({
        type: "SET_NUM2",
        payload: e.target.value,
      })
    }
  />

  <div className="grid grid-cols-2 gap-2">
    <button
      className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      onClick={() => dispatch({ type: "add" })}
    >
      Add
    </button>

    <button
      className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      onClick={() => dispatch({ type: "sub" })}
    >
      Sub
    </button>

    <button
      className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      onClick={() => dispatch({ type: "mul" })}
    >
      Mul
    </button>

    <button
      className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      onClick={() => dispatch({ type: "div" })}
    >
      Div
    </button>
  </div>

  <h2 className="mt-5 text-xl font-medium text-center">
    Result: {state.result}
  </h2>
</div>
);
}

export default Ur2
