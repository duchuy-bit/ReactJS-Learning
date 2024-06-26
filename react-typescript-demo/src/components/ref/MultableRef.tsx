import React, { useEffect, useRef, useState } from "react";

const MultableRef = () => {
    const [timer, setTimer] = useState(0);

    const interValRef = useRef<number | undefined>(undefined);

    const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current);
        }
    };

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            stopTimer();
        };
    }, []);

    return (
        <div>
            HookTimer - {timer} -<button onClick={() => stopTimer()}> Stop Timer</button>
        </div>
    );
};

export default MultableRef;
