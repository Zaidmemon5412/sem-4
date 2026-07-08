import { useContext } from 'react'
import { C1 } from './Comp1'
import { Name } from './Comp2'

function Comp3() {
    const c1 = useContext(C1)
    const name = useContext(Name)
  return (
    <>
    <h2 style={c1} > Welcome {name}</h2>

    
    </>
  )
}

export default Comp3