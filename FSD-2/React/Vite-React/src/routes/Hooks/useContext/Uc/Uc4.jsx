import { useContext } from 'react'
import { Num1,Num2 } from './Uc1'

export default function Uc4() {
    const num1 = useContext(Num1)
    const num2 = useContext(Num2)
    const ans = num1 + num2
  return (
    <>
    {ans}
    </>
  )
}
