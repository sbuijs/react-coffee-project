import { useState, useEffect } from 'react'
import { StyledButton } from '../UI/button/button.style'

export const Stopwatch = ({ className, onTimerRunning, timeVisible }) => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10);
        } else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [running]);

    const defaultFormattedTime = {
        minutes: "00",
        seconds: "00",
        milliseconds: "00"
    }

    const [formattedTime, setFormattedTime] = useState(defaultFormattedTime)

    const stopStopwatch = (e) => {
        e.preventDefault()
        setRunning(false)
    }

    useEffect(() => {
        onTimerRunning(formattedTime)
    }, [formattedTime, onTimerRunning, time])


    const startStopwatch = (e) => {
        e.preventDefault()
        setRunning(true)
        onTimerRunning(formattedTime)
    }
    const resetStopwatch = (e) => {
        e.preventDefault()
        setRunning(false)
        setTime(0)
        setFormattedTime(defaultFormattedTime)
    }

    useEffect(() => {
        setFormattedTime({
            minutes: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
            seconds: ("0" + Math.floor((time / 1000) % 60)).slice(-2),
            milliseconds: ("0" + ((time / 10) % 100)).slice(-2)
        })
    }, [time])

    return (
        <div className={className + ' d-flex flex-column align-items-center'}>

            {timeVisible &&
                <div className="numbers">
                    test
                    <span>
                        {formattedTime.minutes}:
                        {formattedTime.seconds}:
                        {formattedTime.milliseconds}
                    </span>
                </div>
            }

            <div className="buttons">
                {!running && time === 0 &&
                    <StyledButton
                        buttonLabel="Start"
                        onClick={(e) => startStopwatch(e)}
                    />
                }
                {!running && time !== 0 &&
                    <>
                        <StyledButton
                            secondary buttonLabel="Reset"
                            onClick={(e) => resetStopwatch(e)}
                        />
                        <StyledButton
                            buttonLabel="Resume"
                            onClick={() => setRunning(true)}
                        />
                    </>
                }
                {running &&
                    <StyledButton
                        buttonLabel="Stop"
                        onClick={(e) => stopStopwatch(e)}
                    />
                }
            </div>
        </div>
    )
}