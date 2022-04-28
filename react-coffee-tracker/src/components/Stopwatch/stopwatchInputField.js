import { useState } from 'react'
import { StyledStopwatch } from './stopwatch.style'
export const StopwatchInputField = () => {

    const [timeFromStopwatch, setTimeFromStopwatch] = useState(0)
    const [extractionTime, setExtractionTime] = useState("")

    const getCurrentTime = (time) => {
        setTimeFromStopwatch(`${time.minutes}:${time.seconds}:${time.milliseconds}`)
    }

    return (
        <>
            {/* This div underneath is nessasarry for the defaultValue from the input to update */}
            <div key={timeFromStopwatch}>
                <input
                    autoFocus
                    className="mb-3"
                    type="text"
                    defaultValue={timeFromStopwatch === 0 ? "00:00:00" : timeFromStopwatch}
                    onChange={(e) => setExtractionTime(e.target.value)}
                />
            </div>
            {/* </div> */}
            <StyledStopwatch
                onTimerRunning={e => getCurrentTime(e)}
                className="stopwatch"
                timeVisible={false}
            />
        </>
    )
}