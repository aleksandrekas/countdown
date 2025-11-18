import "../src/app.css"
import Counter from "./components/counter/Counter"


function App() {


  return (
    <div className="container">
      <Counter/>
      <img src="src\assets\background\pattern-hills.svg" alt="hills_bg" className="hills" />
      <img src="src/assets/background/bg-stars.svg" alt="stars_background" className="stars" />
    </div>
  )
}

export default App
