import {useEffect, useState} from "react";

const TypingEffect = ({titles = [], typing = 150, backSpace = 150}) => {

    const [effect, setEffect] = useState('typing')
    const [titleCount, setTitleCount] = useState(0)
    const [charCount, setCharCount] = useState(0)
    const [title, setTitle] = useState('')

    useEffect(() => {
        const typingEffect = setTimeout(() => {
            if (effect === 'typing') {
                if (titles[titleCount].length === charCount) {
                    setEffect('backSpace')
                } else {
                    setCharCount(charCount => charCount + 1)
                }
            }
        }, typing)
        return () => {
            clearTimeout(typingEffect)
        }
    }, [effect, titleCount, charCount])

    useEffect(() => {
        const typingEffect = setTimeout(() => {
            if (effect === 'backSpace') {
                if (charCount === 0) {
                    setEffect('typing')
                    if (titles.length === titleCount + 1) {
                        setTitleCount(0)
                    } else {
                        setTitleCount(titleCount => titleCount + 1)
                    }
                } else {
                    setCharCount(charCount => charCount - 1)
                }
            }
        }, backSpace)
        return () => {
            clearTimeout(typingEffect)
        }
    }, [effect, titleCount, charCount])

    useEffect(() => {
        setTitle(titles[titleCount].slice(0, charCount))
    }, [titleCount, charCount])

    return (
        <>
            <h1 className={'text-center text-3xl'}>{title}</h1>
        </>
    );
};

export default TypingEffect;