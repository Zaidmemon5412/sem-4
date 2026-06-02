import {createContext,useState} from 'react'
import Uc2 from './Uc2'

const ThemeContext = createContext()
function Uc1() {
    const [darkMode,setDarkMode] = useState(false)
    const toggleTheme = ()=>{
        setDarkMode(!darkMode)
    }

  return (
    <>
    <ThemeContext.Provider value = {{darkMode,toggleTheme}}>
        <Uc2 />
    </ThemeContext.Provider>
    </>
  )
}

export default Uc1

export {ThemeContext}
