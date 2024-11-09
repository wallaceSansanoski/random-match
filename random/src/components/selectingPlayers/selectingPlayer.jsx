import { useContext, useEffect, useState } from "react";
import { ContextActivity } from "../../Context/contextActivit";
import { Link } from "react-router-dom";
import { ContextPlayers } from "../../Context/contextPlayers";
import style from '../selectingPlayers/selectingPlayer.module.css'
import { ContextNameTeam } from "../../Context/ContextNameTeam";

const SelectingPlayers = () => {

    const { kindActivity } = useContext(ContextActivity)
    const { setPlayers } = useContext(ContextPlayers)
    const { teamNames ,setTeamNames } = useContext(ContextNameTeam)

    const [listOfPlayers, setListOfPlayers] = useState([])
    const [singlePLayer, setSinglePlayer] = useState('')

    console.log(singlePLayer)

    const quantatyPlayer = {
        'Futebol de campo': 22,
        'Futebol de salão': 12,
        'Futebol society' : 12,
        'Volleyball': 12,
        'Basketball': 10
    }

    const isListOfPLayersFull = listOfPlayers.length === quantatyPlayer[kindActivity] ? true : false

    const handleSetNameTeam = (e) => {
        e.preventDefault()
        const valueInput = e.target.input.value
        setTeamNames(prevNameTeam => [...prevNameTeam,valueInput])
        
        e.target.input.value = ''
    }

    const handleSubmitSaveplayer = e => {
        e.preventDefault()
        setListOfPlayers(prevPlayer => [...prevPlayer, singlePLayer])
        setSinglePlayer('')
    }

    const handeRemovePlayer = e => {
        const playerShouldBeRemoved = e.target.value
        setListOfPlayers(prevPlayers => prevPlayers.filter(player => player !== playerShouldBeRemoved))
    }


    const shuffle = () => {

        const newArray = [...listOfPlayers];

        for (let i = newArray.length - 1; i > 0; i--) {
            const positionPlayer = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[positionPlayer]] = [newArray[positionPlayer], newArray[i]];
        }

        return newArray;
    }

    const shuffleArray = () => {
        setPlayers(shuffle(listOfPlayers.length))
    }

    useEffect(() => {
        setTeamNames([])
    },[])

    return (
        <div className={style.wrapperPage}>
             <Link to={'/'}><button className={style.backBtn}>Voltar</button></Link>
            <div>
                <p className={style.description}>Você selecionou a atividade de <strong>{kindActivity}</strong>, lembre - se : </p>
                <p className={style.description}>Em partidas oficiais serão duas equipes composta de {quantatyPlayer[kindActivity]/2} jogadores cada.</p>
            </div>
            <div>
                <form onSubmit={handleSetNameTeam}>
                    <label>
                        <input
                            className={style.inputPlayer}
                            name="input"
                            required
                            autoFocus
                            type="text"
                            placeholder={`Digite o nome do ${teamNames.length === 0 ? 'primeiro' : 'segundo'} time`}
                        ></input>
                    </label>
                    <button
                    className={style.savePlayerBtn}
                        disabled={teamNames.length === 2 ? true : false}
                        type="submit"
                    >Salvar</button>
                </form>

                <form onSubmit={handleSubmitSaveplayer}>
                    <label>
                        <input
                            className={style.inputPlayer}
                            required
                            value={singlePLayer}
                            autoFocus
                            type="text"
                            placeholder="Digite o nome do jogador"
                            onChange={e => setSinglePlayer(e.target.value)}
                        ></input>
                    </label>
                    <button
                    className={style.savePlayerBtn}
                        disabled={isListOfPLayersFull}
                        type="submit"
                    >Salvar</button>
                    {isListOfPLayersFull && <p>Lista de jogadores completa.</p>}

                </form>
            </div>
            <div className={style.wrapperPlayerList}>
                {
                    listOfPlayers.map(player => {
                        return (
                            <ul key={player} className={style.singlePLayerInList}>
                                <li className={style.namePlayer}>{player}</li>
                                <button
                                    className={style.removePlayerBtn}
                                    value={player}
                                    onClick={handeRemovePlayer}
                                >X</button>
                            </ul>
                        )
                    })
                }
            </div>
            <Link to={'/field'} ><button
                className={style.btn}
                disabled={!isListOfPLayersFull}
                onClick={shuffleArray}
            >Gera time aleatorio
            </button></Link>
        </div>
    )
}

export default SelectingPlayers;