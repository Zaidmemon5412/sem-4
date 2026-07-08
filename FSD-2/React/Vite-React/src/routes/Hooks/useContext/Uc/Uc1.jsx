import { createContext } from "react";
import Uc2 from "./Uc2";
const Num1 = createContext()
const Num2 = createContext()
function Uc1(){
    return(
        <>
        <Num1.Provider value={5} >
            <Num2.Provider value={10} >
                <Uc2 />
            </Num2.Provider>
        </Num1.Provider>
        </>
    )

}
export default Uc1
export {Num1,Num2}