import {useEffect, useLayoutEffect, useRef, useState} from "react";
import DropDown from "./DropDown.jsx";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [show, setShow] = useState(true)
    const [currentScroll, setCurrentScroll] = useState(0)
    const [height, setHeight] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const showNavbar = () => {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop
        setCurrentScroll(scroll)
        if (scroll > 56) {
            if (scroll > currentScroll) {
                setShow(false)
            } else {
                if (scroll < currentScroll - 6) {
                    setShow(true)
                }
            }
        } else {
            setShow(true)
        }
        if (toggle) {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showNavbar)
        return () => {
            window.removeEventListener('scroll', showNavbar)
        }
    }, [currentScroll])

    const navbar = useRef(null);

    useLayoutEffect(() => {
        if (screenWidth < 1024) {
            setHeight(navbar.current.clientHeight)
        } else {
            setHeight(0)
        }
    }, [screenWidth]);

    const active = () => {
        setToggle(toggle => !toggle)
    }

    const remove = () => {
        setToggle(false)
    }

    const reSize = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', reSize)
        return () => {
            window.removeEventListener('resize', reSize)
        }
    }, [screenWidth]);

    useEffect(() => {
        if (screenWidth >= 1024) {
            setToggle(false)
        }
    }, [screenWidth]);

    return (
        <>
            <div className={`w-full text-white fixed left-0 ${show ? 'top-0' : '-top-12'} right-0 z-[999] bg-indigo-600 transition-all duration-300 overflow-hidden`} style={{height: `${toggle?`${height+48}px`:'48px'}`}}>
                <div className={'w-[90%] m-auto flex flex-wrap items-center justify-between'}>
                    <div
                        className={'w-full h-12 flex items-center justify-between relative z-50 bg-indigo-600 lg:w-fit lg:bg-transparent'}>
                        <div className={'cursor-pointer'}>
                            {/*<NavLink to={''} className={({isActive}) => `w-fit ${isActive ? '' : ''}`}*/}
                            {/*         onClick={remove}>Logo</NavLink>*/}
                            <div className={'w-fit'} onClick={remove}>Logo</div>
                        </div>
                        <div className={'w-6 flex flex-col items-end gap-[.35rem] cursor-pointer lg:hidden'}
                             onClick={active}>
                            <div className={`w-full h-[.1rem] bg-white transition-all duration-300 ${toggle ? 'translate-y-[.45rem] -rotate-45' : ''}`}></div>
                            <div className={`h-[.1rem] bg-white transition-all duration-300 ${toggle ? 'w-0 opacity-0' : 'w-1/2'}`}></div>
                            <div className={`h-[.1rem] bg-white transition-all duration-300 ${toggle ? 'w-full -translate-y-[.45rem] rotate-45' : 'w-3/4'}`}></div>
                        </div>
                    </div>
                    <div className={`w-full flex transition-all duration-300 ease-in-outs bg-indigo-600 relative z-[10] lg:w-fit lg:h-fit lg:mt-0`}
                        ref={navbar}
                        style={{marginTop: `${toggle ? `0px` : `-${height}px`}`}}>
                        <div
                            className={'w-full py-4 flex flex-col justify-center gap-4 relative z-[10] lg:items-center lg:w-fit lg:h-12 lg:flex-row lg:gap-10 bg-indigo-600'}>
                            {/*<NavLink className={`w-fit`} to={''} onClick={remove}>Home</NavLink>*/}
                            <div className={'w-fit'} onClick={remove}>Home</div>
                            {/*<DropDown/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;