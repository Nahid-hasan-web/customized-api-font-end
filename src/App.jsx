import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Data from './Pages/Data'


function App() {

  const Allroute = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route  path='/'  element ={<Home />} />
        <Route path='/data' element = {<Data />} />
      </Route>
    )
  )
  return (
    <>
    
    <RouterProvider router={Allroute} />
    </>
  )
}

export default App
