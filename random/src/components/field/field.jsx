import style from '../field/field.module.css'
import campo from '../../images/campo.jpg'
import basketball from '../../images/basketball.jpg'
import campoSociety from '../../images/camposociety.jpg'
import futsal from '../../images/futsal.png'
import volleyball from '../../images/volleyball.jpg'
import Player from '../player/Player'
import { useContext, useEffect } from 'react'
import { ContextActivity } from '../../Context/contextActivit'
import { ContextPlayers } from '../../Context/contextPlayers'
import { useState, useRef} from 'react'
import Timer from '../timer/timer'

const Field = () => {

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
    
    const imagesField = {
        'Futebol de campo': {
            'campo' : campo,
            'formacao' : [1,4,3,3, 3, 3, 4, 1]
        },
        'Futebol society': campoSociety,
        "Futebol de salão": futsal,
        'Volleyball': volleyball,
        'Basketball': basketball
    }

    useEffect(()=> {

        Array.from(wrapperField?.current?.children).map((stripper, index) => {

            console.log(index)

        if(index === 0 && stripper.children.length === 0) {
            const arr =  new  Array(imagesField[kindActivity].formacao[index]).fill('player')
            arr.map(_ => {
                 const element = document.createElement('div')
                 stripper.append(element)
             })
        }

          if(index  === 1 && stripper.children.length === 0) {
             const arr =  new  Array(imagesField[kindActivity].formacao[index]).fill('player')
             arr.map(_ => {
                  const element = document.createElement('div')
                  stripper.append(element)
              })
          }

          if(index  === 2 && stripper.children.length === 0) {
             const arr =  new  Array(imagesField[kindActivity].formacao[index]).fill('player')
             arr.map(_ => {
                  const element = document.createElement('div')
                  stripper.append(element)
              })
          }

          if(index  === 3 && stripper.children.length === 0) {
             const arr =  new  Array(imagesField[kindActivity].formacao[index]).fill('player')
             arr.map(_ => {
                  const element = document.createElement('div')
                  stripper.append(element)
              })
          }
          if(index  === 4 && stripper.children.length === 0) {
             const arr =  new  Array(imagesField[kindActivity].formacao[index]).fill('player')
             arr.map(_ => {
                  const element = document.createElement('div')
                  stripper.append(element)
              })
          }

          if(index  === 5 && stripper.children.length === 0) {
             const arr =  new  Array(imagesField[kindActivity].formacao[index]).fill('player')
             arr.map(_ => {
                  const element = document.createElement('div')
                  stripper.append(element)
              })
          }

          if(index  === 6 && stripper.children.length === 0) {
             const arr =  new  Array(imagesField[kindActivity].formacao[index]).fill('player')
             arr.map(_ => {
                  const element = document.createElement('div')
                  stripper.append(element)
              })
          }
          if(index  === 7 && stripper.children.length === 0) {
             const arr =  new  Array(imagesField[kindActivity].formacao[index]).fill('player')
             arr.map(_ => {
                  const element = document.createElement('div')
                  stripper.append(element)
              })
          }
        })


    }, [wrapperField])
    
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
                    <div className={style.positionInField}>
                        {/* <div></div> */}
                    </div>
                    <div className={style.positionInField}>
                    </div>
                    <div className={style.positionInField}>
             
                    </div>
                    <div className={style.positionInField}>
                    </div>
                    <div className={style.positionInField}></div>
                    <div className={style.positionInField}></div>
                    <div className={style.positionInField}></div>
                    <div className={style.positionInField}></div>
                    <div className={style.field}>
                        <img className={style.fieldImage} src={imagesField[kindActivity].campo} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Field;