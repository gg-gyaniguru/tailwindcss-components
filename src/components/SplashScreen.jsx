import {useEffect, useState} from 'react';

const SplashScreen = ({duration = 300}) => {

    const [splash, setSplash] = useState(true)
    const [toggle, setToggle] = useState(true)

    const active = () => {
        if (toggle) {
            setToggle(false)
        } else {
            setSplash(false)
        }
    }

    useEffect(() => {
        const remove = setTimeout(() => {
            active()
        }, duration)
        return () => {
            clearTimeout(remove)
        }
    }, [toggle]);

    return (
        <>
            {
                splash &&
                <div
                    className={`w-dvw h-dvh fixed left-0 ${toggle ? 'top-0' : '-top-[100dvh]'} right-0 z-[99999999999] bg-neutral-900 transition-all duration-300 ease-in-out`}>
                    <div className={'w-full h-full flex items-center justify-center'}>
                        <h1 className={'text-3xl'}>Logo</h1>
                    </div>
                </div>
            }
        </>
    );
};

export default SplashScreen;