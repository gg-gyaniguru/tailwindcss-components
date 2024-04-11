import {useEffect, useRef, useState} from 'react';

const Modal = ({question}) => {

    const [modal, setModal] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [height, setHeight] = useState(0)

    const navbar = useRef(null);

    const active = () => {
        if (toggle) {
            setTimeout(() => {
                setToggle(false)
            }, 0)
        } else {
            if (!modal) {
                setModal(true)
            }
        }
    }

    useEffect(() => {
        if (modal) {
            setTimeout(() => {
                setToggle(true)
            }, 0)
        }
    }, [modal])

    useEffect(() => {
        if (!toggle) {
            if (modal) {
                setTimeout(() => {
                    setModal(false)
                }, 300)
            }
        }
    }, [toggle])

    return (
        <>

                <button className="bg-blue-600" onClick={active}>Model</button>
                {modal &&
                    <div className={`w-dvw h-dvh fixed top-0 left-0 right-0 flex justify-center`}>
                        <div className={`w-80 h-60 p-6 relative z-50 bg-blue-600 transition-all duration-300 ${toggle ? 'top-0' : '-top-60'} rounded-3xl transition-all`}>
                            {question}
                        </div>
                        <div className={`w-dvw h-dvh fixed z-10 top-0 left-0 right-0 ${toggle ? 'backdrop-blur-md' : 'backdrop-blur-0'} transition-all`} onClick={active}></div>
                    </div>
                }
        </>
    );
};

export default Modal;