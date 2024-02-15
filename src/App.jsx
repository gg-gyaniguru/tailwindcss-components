import './App.css'
import slide1 from './assets/slide-1.png'
import slide2 from './assets/slide-2.png'
import slide3 from './assets/slide-3.png'
import Carousel from "./components/Carousel.jsx";
import TypingEffect from "./components/TypingEffect.jsx";

const App = () => {

    const slides = [slide1, slide2, slide3]
    const titles = ['Gyani Guru', 'Full Stack Developer', 'Coding Guru']

    return (
        <>
            <div className={'mt-6 h-10'}>
                <TypingEffect titles={titles}/>
            </div>
            <div className={'mt-6'}>
                <Carousel slides={slides} autoSlide={true}/>
            </div>
        </>
    )
}

export default App