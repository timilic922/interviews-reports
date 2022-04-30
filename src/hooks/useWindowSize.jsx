import { useState, useEffect } from "react";


const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        // cleanUp is neccesseru to prevent a memory leak
        // runs if a useEffect dependency change
        return () => window.removeEventListener('resize', handleResize)

    }, [])
return windowSize;
}

export default useWindowSize