import {useEffect, useState} from "react";
import {FaArrowUp} from "react-icons/fa";

const ScrollToTop = () => {

    const [toggle, setToggle] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const active = () => {

        const scrollFromTop = document.documentElement.scrollTop

        if (scrollFromTop > 156) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', active)

        return () => {
            window.removeEventListener('scroll', active)
        }
    }, [toggle]);

    return (
        <>
            <div className={`w-10 h-10 fixed bottom-10 ${toggle ? 'right-10' : '-right-10'} z-[99999] transition-all duration-300`}>
                <button
                    className={`w-full h-full flex items-center justify-center rounded-full bg-blue-600 ${toggle ? 'animate-bounce' : ''}`}
                    onClick={scrollToTop}>
                    <FaArrowUp size={20}/>
                </button>
            </div>
        </>
    );
};

export default ScrollToTop;