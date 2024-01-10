import { useState } from "react";
import style from '../timer/timer.module.css'

const Timer = () => {

    let milissegundos = 0
    let second = 0
    let minute = 0
    let [milisegundo, setMlisegundo] = useState(0)
    let [seconds, setSecond] = useState(0)
    let [minutes, setMinutes] = useState(0)

    const [setIntervalID, setSetIntervalID] = useState(null)
    const [toggleDisableBtn, setToggleDisableBtn] = useState(false)


    const handleStartTimer = () => {

        milissegundos = 1

        const ID = setInterval(() => {

            setMlisegundo(milissegundos)

            ++milissegundos

            if (milissegundos >= 100) {
                setSecond(++second)
                clearInterval(ID)
                handleStartTimer()
            }


            if (second === 59) {
                setMinutes(++minute)
                second = 0
            }


        }, 10)

        setSetIntervalID(ID)
    }

    const handleStopTimer = () => {
        setSecond(0)
        setMinutes(0)
        setMlisegundo(0)
        clearInterval(setIntervalID)
    }

    return (
        <>
            <div className={style.wrapperTimer}>
                <h3>Tempo Partida</h3>
                <span>
                    {minutes > 10 ? minutes : `0${minutes}`}
                    :
                    {seconds >= 10 ? seconds : `0${seconds}`}
                    :
                    {milisegundo >= 10 ? milisegundo : `0${milisegundo}`}
                </span>
                <div className={style.wrapperBtn}>
                    <button className={style.start} disabled={toggleDisableBtn} style={{ opacity: toggleDisableBtn ? .9 : 1 }} onClick={() => {
                        handleStartTimer()
                        setToggleDisableBtn(true)
                    }}>
                        Start</button>
                    <button className={style.end} onClick={() => {
                        handleStopTimer()
                        setToggleDisableBtn(false)
                    }}>End</button>
                </div>
            </div>
        </>
    )
}

export default Timer;