import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import Navbar from '../shared/component/Navbar'
import Clock from '../shared/component/Clock'
import Task1 from './Tasks/Task1'
import UD1 from './Tasks/UD1'
function  Main(){

    return(
        <>
        <Router>
             <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/Timer' element={<Clock />}></Route>
        <Route path='/Task1' element={<Task1 />}></Route>
        <Route path='/UD1' element={<UD1 />}></Route>

      </Routes>

        </Router>
        </>

    )

}
export default Main