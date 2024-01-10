import './App.css'
import Field from './components/field/field'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import SelectingPlayers from './components/selectingPlayers/selectingPlayer'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/selectPlayer' element={<SelectingPlayers/>}/>
        <Route path='/field' element={<Field/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
