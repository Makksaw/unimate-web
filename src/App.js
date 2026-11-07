import "./App.css"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ReviewMarquee from "./components/ReviewMarquee/ReviewMarquee"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ReviewMarquee />
    </div>
  )
}

export default App
