import './App.css'
import slide1 from './assets/slide-1.png'
import slide2 from './assets/slide-2.png'
import slide3 from './assets/slide-3.png'
import Carousel from "./components/Carousel.jsx";

const App = () => {

  const slides = [slide1, slide2, slide3]

    return (
        <>
          <Carousel slides={slides}/>
        </>
    )
}

export default App
