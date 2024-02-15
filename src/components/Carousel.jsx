import {useEffect, useState} from "react";

const Carousel = ({slides = [], effect = 'fade', autoSlide = false, slideDuration = 3000}) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [upComingSlide, setUpComingSlide] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [disabledSliding, setDisabledSliding] = useState(false)
    const [animation, setAnimation] = useState(false)
    const [delay, setDelay] = useState(false)
    const [indicator, setIndicator] = useState('')


    const swipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (touchStart && touchEnd) {
            const distance = touchStart - touchEnd;
            const swipeLeft = distance > swipeDistance;
            const swipeRight = distance < -swipeDistance;
            if (!disabledSliding) {
                if (swipeLeft || swipeRight) {
                    if (swipeRight) {
                        previousSlide()
                    } else {
                        nextSlide()
                    }
                }
            }
        }
    }

    const previousSlide = () => {
        if (!disabledSliding) {
            setIndicator('previousSlide')
            if (upComingSlide === 0) {
                setUpComingSlide(slides?.length - 1)
            } else {
                setUpComingSlide(upComingSlide => upComingSlide - 1)
            }
        }
    }

    const nextSlide = () => {
        if (!disabledSliding) {
            setIndicator('nextSlide')
            if (upComingSlide === slides?.length - 1) {
                setUpComingSlide(0)
            } else {
                setUpComingSlide(upComingSlide => upComingSlide + 1)
            }
        }
    }

    const nextUpComingSlide = (key) => {
        if (!disabledSliding) {
            if (currentSlide > key) {
                setIndicator('previousSlide')
            } else {
                setIndicator('nextSlide')
            }
            setUpComingSlide(key)
        }
    }


    useEffect(() => {
        if (currentSlide !== upComingSlide) {
            setDisabledSliding(true)
            setAnimation(true)
        }
        const transition = setTimeout(() => {
            if (currentSlide === upComingSlide) {
                setDisabledSliding(false)
                setAnimation(false)
            } else {
                setCurrentSlide(upComingSlide)
            }
        }, 500)
        return () => {
            clearTimeout(transition)
        }
    }, [currentSlide, upComingSlide]);

    useEffect(() => {
        const transition = setTimeout(() => {
            if (animation) {
                setDelay(true)
            } else {
                setDelay(false)
                setIndicator('')
            }
        }, 50)
        return () => {
            clearTimeout(transition)
        }
    }, [animation]);


    useEffect(() => {
        const autoNextSlide = setTimeout(() => {
            if (autoSlide) {
                nextSlide()
            }
        }, slideDuration)
        return () => {
            clearTimeout(autoNextSlide)
        }
    }, [upComingSlide]);

    return (
        <>
            <div className={'w-full relative'}>
                <div className={'w-full relative left-0 top-0 right-0 z-[500] overflow-hidden'}>
                    {
                        slides?.map((slide, key) => (
                            <div
                                className={`w-full ${effect === 'fade' ? `${currentSlide === key ? 'relative opacity-100' : 'absolute opacity-0'} ${upComingSlide === key && animation ? `z-[500] ${delay ? 'opacity-100' : ''}` : ''} top-0 transition-all duration-500 ease-in-out` : ``} ${effect === 'slide' ? `${currentSlide === key ? 'relative z-[500]' : 'absolute'} ${currentSlide === key && animation ? `z-[550] ${delay ? `${indicator === 'previousSlide' ? 'translate-x-[100%]' : ''} ${indicator === 'nextSlide' ? '-translate-x-[100%]' : ''}` : ''} transition-all duration-500 ease-in-out` : ''} ${upComingSlide === key && animation ? `z-[550] ${indicator === 'previousSlide' ? '-left-[100%]' : ''} ${indicator === 'nextSlide' ? '-right-[100%]' : ''} ${delay ? `${indicator === 'previousSlide' ? 'translate-x-[100%]' : ''} ${indicator === 'nextSlide' ? '-translate-x-[100%]' : ''}` : ''} transition-all duration-500 ease-in-out` : ''} top-0` : ``}`}
                                key={key}>
                                <img className={`w-full relative`} src={slide} alt={''}/>
                            </div>
                        ))
                    }
                </div>
                <div className={'w-full h-full absolute left-0 top-0 right-0 z-[1000]'}>
                    <button className={'w-full h-full absolute left-0 top-0 right-0 z-[1000]'}
                            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}></button>
                </div>
                <div className={'w-[20%] h-full absolute left-0 top-0 z-[1500]'}>
                    <button className={'w-full h-full flex items-center justify-center absolute left-0 top-0 z-[1500]'}
                            onClick={previousSlide}>
                        <span
                            className={`w-[1rem] h-[1rem] absolute left-[40%] z-[1500]  border-b-[0.2rem] border-l-[0.2rem] border-black rotate-45 ${animation && delay && indicator === 'previousSlide' ? 'opacity-[.96]' : 'opacity-[.36]'} transition-all duration-500 ease-in-out`}></span>
                    </button>
                </div>
                <div className={'w-[20%] h-full absolute top-0 right-0 z-[1500]'}>
                    <button
                        className={'w-full h-full flex items-center justify-center absolute left-0 right-0 z-[1500]'}
                        onClick={nextSlide}>
                        <span
                            className={`w-[1rem] h-[1rem] absolute right-[40%] z-[1500] border-t-[0.2rem] border-r-[0.2rem] border-black rotate-45 ${animation && delay && indicator === 'nextSlide' ? 'opacity-[.96]' : 'opacity-[.36]'} transition-all duration-500 ease-in-out`}></span>
                    </button>
                </div>
                <div
                    className={'w-full h-[10%] flex items-end justify-center gap-[.6rem] absolute left-0 bottom-0 right-0 z-[1500]'}>
                    {
                        slides?.map((slide, key) => (
                            <div className={`w-[2rem] h-[0.2rem] relative bottom-[60%] z-[1500]`} key={key}>
                                <button
                                    className={`w-full h-full absolute z-[1500] bg-black ${currentSlide === key ? 'opacity-[.96]' : 'opacity-[.36]'} ${upComingSlide === key && animation && delay ? 'opacity-[.96]' : ''} transition-all duration-500 ease-in-out`}
                                    onClick={() => nextUpComingSlide(key)}>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Carousel;