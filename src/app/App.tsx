import './App.css'
import { Routes, Route} from "react-router-dom";
import { Chord } from "../pages/chord";
import { Home } from "../pages/home";
import Layout from './Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/chord' element={<Chord />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
