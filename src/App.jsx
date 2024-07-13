import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Page from "./components/Page.jsx"
import NotFound from "./components/NotFound.jsx"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/page/:id" element={<Page/>}/>
          <Route path="*" element={<NotFound/>}/> 
        </Routes>
      </Router>
    </>
  )
}

export default App
