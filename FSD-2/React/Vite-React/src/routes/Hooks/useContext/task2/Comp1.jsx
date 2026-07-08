import { createContext } from 'react'
import Comp2 from './Comp2'
const C1 = createContext()
const myCss = {backgroundColor:'red',color:'blue',fontSize:20}
function Comp1() {
  return (
    <>
    <C1.Provider value={myCss} >
        <Comp2 />
    </C1.Provider> 
    
    </>
  )
}

export default Comp1
export {C1}