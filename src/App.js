import './App.css'
import Cards from './components/Cards'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Instructors from './components/Instructors'
import Learn from './components/LearnOne'
import LearnTwo from './components/LearnTwo'
import Navigation from './components/Navigation'
import Newsletter from './components/Newsletter'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Showcase />
      <Newsletter />
      <Cards />
      <Learn />
      <LearnTwo />
      <Faq />
      <Instructors />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
