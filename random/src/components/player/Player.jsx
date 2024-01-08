import style from "../player/player.module.css"
import { useEffect, useRef, useState } from "react";

const Player = ({prop}) => {

    const [ position, setPosition ] = useState(prop)

    const  player = useRef()


    return (
        <div
            ref={player}
            className={style.wrapperPlayer}
            style={{ position: 'absolute', left: prop.x, top: prop.y }}>
                <div className={style.playerImage}>
                  </div>
                <p>Name Player</p>
        </div>
    )
}

export default Player;