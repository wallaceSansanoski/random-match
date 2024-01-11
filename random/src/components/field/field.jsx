import style from '../field/field.module.css'
import { useContext, useEffect } from 'react'
import { ContextActivity } from '../../Context/contextActivit'
import { ContextPlayers } from '../../Context/contextPlayers'
import { useRef } from 'react'
import Timer from '../timer/timer'
import FieldImage from '../fieldImage/FieldImage'
import Player from '../player/Player'

const Field = () => {

    let counter = 0
    const { kindActivity } = useContext(ContextActivity)
    const { players } = useContext(ContextPlayers)
    const wrapperField = useRef()

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
            'formacao': [1, 3, 3, 3, 3, 1],
            'quantatyPlayer': 12
        },
        "Futebol de salão": {
            'formacao': [1, 3, 3, 3, 3, 1],
            'quantatyPlayer': 12
        },
        'Basketball': {
            'formacao': [1, 3, 1, 1, 3, 1],
            'quantatyPlayer': 10
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

                if (counter < players.length / 2) {
                    element.style.background = 'red'
                    element.style.textAlign = 'center'
                    element.style.height = '20px'
                    element.style.width = '20px'
                    element.style.borderRadius = '50px'
                }
                if (counter >= players.length / 2) {
                    element.style.background = 'white'
                    element.style.textAlign = 'center'
                    element.style.height = '20px'
                    element.style.width = '20px'
                    element.style.borderRadius = '50px'
                }

                const p = document.createElement('p')
                p.textContent = players[counter]
                counter += 1

                const wrapper = document.createElement('div')
                wrapper.style.width = '50px'
                wrapper.style.height = '50px'
                wrapper.style.display = 'flex'
                wrapper.style.flexDirection = 'column'
                wrapper.style.justifyContent = 'center'
                wrapper.style.alignItems = 'center'
                wrapper.style.background = 'transparent'
                wrapper.append(element)
                wrapper.append(p)
                strippers.append(wrapper)
            }
        }

    }, [])

    return (
        <>
            <div className={style.container}>
                <Timer />
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
                <div ref={wrapperField} className={style.wrapperField}>
                    <FieldImage/>
                </div>
            </div>
        </>
    )
}

export default Field;