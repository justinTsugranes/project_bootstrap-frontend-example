import {
  Cards,
  Contact,
  Faq,
  Footer,
  Instructors,
  LearnOne,
  LearnTwo,
  Navigation,
  Newsletter,
  Showcase,
} from './components'

const App = () => (
  <div className="App">
    <Navigation />
    <Showcase />
    <Newsletter />
    <Cards />
    <LearnOne />
    <LearnTwo />
    <Faq />
    <Instructors />
    <Contact />
    <Footer />
  </div>
)

export default App
