import { useState, useRef, useCallback } from 'react';

const useTimer = () => {
    const [centisecond, setCentisecond] = useState(0);
    const [lapCount, setLapCount] = useState(1);
    const [isRunning, setIsRunning] = useState(false);
    const [timerInterval, setTimerInterval] = useState(null);
    const [laps, setLaps] = useState([]);

    let prevLap = useRef(0);

    // state 값을 사용하고 있지 않기 때문에 deps를 빈값으로
    const start = useCallback(() => {
        let _interval = setInterval(() => {
            setCentisecond((prev) => prev + 1);
        }, 10);
        setTimerInterval(_interval);
        setIsRunning((prev) => !prev);
    }, []);

    // timerInterval을 사용하고 있기 때문에 deps에 추가
    const pause = useCallback(() => {
        clearInterval(timerInterval);
        setTimerInterval(null);
        setIsRunning((prev) => !prev);
    }, [timerInterval]);

    //
    const createLap = useCallback(() => {
        setLapCount((prev) => prev + 1);
        const lapTime = centisecond - prevLap.current;
        setLaps((prev) => [[lapCount, lapTime], ...prev]);
        prevLap.current = centisecond;
    }, [lapCount, centisecond]);

    const reset = useCallback(() => {
        setCentisecond(0);
        setLapCount(0);
        prevLap.current = 0;
        setLaps([]);
    }, []);

    return { centisecond, start, pause, createLap, reset, isRunning, laps };
};

export default useTimer;
