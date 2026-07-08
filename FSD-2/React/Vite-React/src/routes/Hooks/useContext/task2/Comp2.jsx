import { createContext } from 'react'
import Comp3 from './Comp3'
const Name = createContext()

function Comp2() {
  return (
    <>
    <Name.Provider value="Student">
        <Comp3 />
    </Name.Provider>
    </>
  )
}

export default Comp2
export {Name}