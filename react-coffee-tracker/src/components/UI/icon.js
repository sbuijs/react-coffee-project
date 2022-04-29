import { Stopwatch, ThermometerHalf, Droplet, SlashCircle } from "react-bootstrap-icons"

export const Icon = ({ name, fontSize }) => {

    const margin = "m1";

    return (
        <>
            {name === "bean" &&
                <SlashCircle
                    className={margin}
                    fontSize={fontSize}
                />
            }
            {name === "time" &&
                <Stopwatch
                    className={margin}
                    fontSize={fontSize}
                />
            }
            {name === "temperature" &&
                <ThermometerHalf
                    className={margin}
                    fontSize={fontSize}
                />
            }
            {name === "water" &&
                <Droplet
                    className={margin}
                    fontSize={fontSize}
                />
            }
        </>
    )
}