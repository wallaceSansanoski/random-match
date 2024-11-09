import style from "../player/player.module.css"
import {  useState } from "react";

const Player = ({player}) => {

    const [ counter , setCounter ] = useState(0)

    return (
        <div
            className={style.wrapperPlayer}
        >
            <p className={style.namePlayer}>{player}</p>
            <button className={style.btn} onClick={() => setCounter(counter => counter += 1)}>+</button>
            <span className={style.score}><strong>{counter}</strong></span>
            <button
                className={style.btn}
                onClick={() => setCounter(counter => counter -= 1)}
                style={{ opacity: counter < 1 ? .8 : 1 }}
                disabled={counter < 1 ? true : false}
            >-</button>
        </div>
    )
}

export default Player;