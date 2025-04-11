import './style/index.css'
import { Banner } from "./Componentes/Banner"
import { Footer } from "./Componentes/Footer"
import { Header } from "./Componentes/Header"
import { Projeto } from "./Componentes/Projeto"
import { Sobre } from "./Componentes/Sobre"
import { Contatos } from './Componentes/Contatos'

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Sobre/>
      <Projeto/>
      <Contatos/>
      <Footer/>
    </>
  )
}

export default App
