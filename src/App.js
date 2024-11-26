import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Project from './components/pages/Project'
import PedidosAnteriores from './components/pages/PedidosAnteriores'
import Funcionario from './components/pages/Funcionario'
import LoginApp from './components/pages/LoginApp'
import Carrinho from './components/pages/carrinho'
import Inicio from './components/pages/inicio'
import Cardapio from './components/pages/cardapio'
import Doces from './components/pages/doces'
import Comprar from './components/pages/comprar'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Container customClass="min-height">
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/newproject">
            <NewProject />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
          <Route path="/pedidosanteriores">
            <PedidosAnteriores />
          </Route>
          <Route path="/Funcionario">
            <Funcionario />
          </Route>
          <Route path="/LoginApp">
            <LoginApp />
          </Route>
          <Route path="/carrinho">
            <Carrinho />
          </Route>
          <Route path="/inicio">
            <Inicio />
          </Route>
          <Route path="/cardapio">
            <Cardapio />
          </Route>
          <Route path="/doces">
            <Doces />
          </Route>
          <Route path="/comprar">
            <Comprar />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
