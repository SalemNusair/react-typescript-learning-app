import { useState, useRef, useEffect } from "react";
const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null);
    const stopTimer = () => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        console.log("before the clean up");
        return () => {
            console.log("after the clean up");
            stopTimer();
        };
    }, []);
    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => stopTimer()}> Stop Timer</button>
        </div>
    );
};
export default MutableRef;
