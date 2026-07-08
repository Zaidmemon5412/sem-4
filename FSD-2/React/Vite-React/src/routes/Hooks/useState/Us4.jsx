import { useState } from "react";

// import img3 from "../assets/img3.png"

function Us4() {
  
    const [txt,setTxt] = useState('')
    const [btn,setBtn] = useState('Show')
    function Txt(){
        if(btn =='Show'){
            setBtn('Hide')
            setTxt('Hiii')
        }
        else{
            setBtn('Show')
            setTxt('')
        }
    }
    return (

        <>
        <div style={{padding:20}}>
        <button onClick={Txt}>{btn}</button> {txt}
        </div>

        </>
    )

}
export default Us4