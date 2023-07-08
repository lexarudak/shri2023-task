import './styles/reset.css'
import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Main } from './components/main'

function App() {
  return (
    <>
    <div id='app'>
      <Header />
      <Main />
    </div>
      <Footer />
    </>
  )
}

export default App
