import { Stopwatch, ThermometerHalf, Droplet, SlashCircle } from "react-bootstrap-icons"

export const Icon = ({ name, fontSize }) => {
    return (
        <>
            {name === "bean" &&
                <SlashCircle className="m-1" fontSize={fontSize} />
            }
            {name === "time" &&
                <Stopwatch className="m-1" fontSize={fontSize} />
            }
            {name === "temperature" &&
                <ThermometerHalf className="m-1" fontSize={fontSize} />
            }
            {name === "water" &&
                <Droplet className="m-1" fontSize={fontSize} />
            }
        </>
    )
}