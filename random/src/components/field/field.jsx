import style from '../field/field.module.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { ContextActivity } from '../../Context/contextActivit'
import { ContextPlayers } from '../../Context/contextPlayers'
import { Link } from 'react-router-dom'
import Timer from '../timer/timer'
import FieldImage from '../fieldImage/FieldImage'
import Player from '../player/Player'
import { ContextNameTeam } from '../../Context/ContextNameTeam'

const Field = () => {

    let counter = 0
    let  pressing = false
    const { kindActivity } = useContext(ContextActivity)
    const { players } = useContext(ContextPlayers)
    const { teamNames } = useContext(ContextNameTeam)
    const wrapperField = useRef()
    const [scoreOne, setScoreOne] = useState(0)
    const [scoreTwo, setScoreTwo] = useState(0)

    let teamOne = players.filter((player, index) => {
        if (index % 2 === 0) {
            return player
        }
    })

    let teamTwo = players.filter((player, index) => {
        if (index % 2 === 1) {
            return player
        }
    })


    const fieldInformation = {
        'Futebol de campo': {
            'formacao': [1, 4, 3, 3, 3, 3, 4, 1],
            'quantatyPlayer': 22
        },
        'Futebol society': {
            'formacao': [1, 3, 2, 2, 3, 1],
            'quantatyPlayer': 12
        },
        "Futebol de salão": {
            'formacao': [1, 3, 3, 3, 3, 1],
            'quantatyPlayer': 12
        },
        'Basketball': {
            'formacao': [1, 3, 1, 1, 3, 1],
            'quantatyPlayer': 10
        },
        "Volleyball": {
            'formacao': [3, 3, 3, 3],
            'quantatyPlayer': 12
        }
    }

    useEffect(() => {

        for (let i = 0; i <= fieldInformation[kindActivity].formacao.length - 1; i++) {

            const strippers = document.createElement('div')
            strippers.classList.add('positionInField')
            strippers.style.height = '40px'
            wrapperField?.current?.append(strippers)

            const arr = new Array(fieldInformation[kindActivity].formacao[i]).fill('player')

            for (let k = 0; k < arr.length; k++) {
                const element = document.createElement('div')
                element.setAttribute('id', Math.floor(Math.random() * 100))

                if (counter < players.length / 2) {
                    element.style.background = 'blue'
                    element.style.textAlign = 'center'
                    element.style.height = '13px'
                    element.style.width = '13px'
                    element.style.borderRadius = '50px'
                    element.style.position = 'relative'
                }
                if (counter >= players.length / 2) {
                    element.style.background = 'red'
                    element.style.textAlign = 'center'
                    element.style.height = '13px'
                    element.style.width = '13px'
                    element.style.borderRadius = '50px'
                    element.style.position = 'relative'

                }

                const p = document.createElement('p')
                p.textContent = players[counter]
                p.style.fontSize = '13px'
                p.style.fontWeight = 'bolder'
                p.style.position = 'absolute'
                p.style.top = '10px'
                counter += 1

                element.draggable = 'true'

                element.onmousedown = function (event) {

                    pressing = true

                    let shiftX = event.clientX - element.getBoundingClientRect().left;
                    let shiftY = event.clientY - element.getBoundingClientRect().top;

                    element.style.position = 'absolute';

                    document.body.append(element); 

                    function moveAt(pageX, pageY) {
                        element.style.left = pageX - shiftX / 2 + 'px';
                        element.style.top = pageY - shiftY / 2 + 'px';
                    }

                    moveAt(event.pageX, event.pageY);

                    function onMouseMove(event) {

                        if(!pressing) return 

                        moveAt(event.pageX, event.pageY);

                    }

                    document.addEventListener('mousemove', onMouseMove);

                    wrapperField.current.onmouseup = function (e) {
                        pressing = false
                        console.log('end')
                        document.removeEventListener('mousemove', onMouseMove);
                        element.onmouseup = null;
                    }


                }

                // element.ondragstart = function () {
                //     return false
                // }

                element.insertAdjacentElement('afterbegin',p)
                strippers.append(element)
            }
        }

    }, [])

    return (
        <>
            <div className={style.container}>
                <Link to={'/selectPlayer'}><button className={style.backBtn}>Voltar</button></Link>
                <Timer />
                <div className={style.containerNameTeam}>
                    {teamNames.length === 0 && (
                        <>
                            <p><><strong>TIME 1</strong></></p>
                            <p><><strong>TIME 2</strong></></p>
                        </>
                    )}
                    {teamNames.length > 0 && (
                        teamNames.map(names => {
                            return (
                                <p key={names}><strong>Time: {names}</strong></p>
                            )
                        })
                    )}
                </div>
                <div className={style.wrapperPlayers}>
                    <div>
                        {
                            teamOne.map(player => {
                                return (
                                    < Player key={player} player={player} />
                                )
                            })
                        }
                    </div>
                    <div>
                        {
                            teamTwo.map(player => {
                                return (
                                    < Player key={player} player={player} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className={style.containerScore}>
                    <p><strong>PLACAR</strong></p>
                    <div className={style.scores}>
                        <div>
                            <button onClick={() => setScoreOne(prev => prev = prev + 1)}>+</button>
                            <span>{scoreOne}</span>
                            <button
                                disabled={scoreOne === 0 ? true : false}
                                onClick={() => setScoreOne(prev => prev = prev - 1)}>
                                -</button>
                        </div>
                        <div>
                            <button onClick={() => setScoreTwo(prev => prev = prev + 1)}>+</button>
                            <span>{scoreTwo}</span>
                            <button
                                disabled={scoreTwo === 0 ? true : false}
                                onClick={() => setScoreTwo(prev => prev = prev - 1)}>
                                -</button>
                        </div>
                    </div>
                </div>
                <div onDrop={e => e.preventDefault()} onDragOver={e => e.preventDefault()} ref={wrapperField} className={style.wrapperField}>
                    <FieldImage />
                </div>
            </div>
        </>
    )
}

export default Field;