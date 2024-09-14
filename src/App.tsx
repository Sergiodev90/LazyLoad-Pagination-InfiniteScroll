
import { NavLink } from 'react-router-dom'
import './App.css'
import { Header } from "./components/Header"

import { Menu } from './pages/Menu'
import { ContainerImages } from './components/ContainerImages'



function App() {

  return (
    <>
      <NavLink to="/">Go Back Home</NavLink>
      <Menu/>
      <Header/>
      <ContainerImages/>
    </>
  )
}

export default App
