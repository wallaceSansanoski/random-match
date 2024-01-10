import { useContext, useState} from "react";
import { ContextActivity } from "../../Context/contextActivit";
import { Link } from "react-router-dom";
import { ContextPlayers } from "../../Context/contextPlayers";

const  SelectingPlayers = () => {

    const { kindActivity } = useContext(ContextActivity)
    const { setPlayers } = useContext(ContextPlayers)

    const  [ listOfPlayers, setListOfPlayers ]  = useState([])
    const  [ singlePLayer, setSinglePlayer ]  = useState()

    const quantatyPlayer = {
        'Futebol de campo' : 11,
        'Futebol de salão' : 6,
        'Volleyball' : 6,
        'Basketball': 5
    }

    let quantatyInput = new Array(quantatyPlayer[kindActivity] ).fill('player')///  * 2

    const handleInserPLayer = (e) => {
        e.preventDefault()
        setListOfPlayers(prevPlayer => [...prevPlayer, singlePLayer])
    }

    
    function shuffle() {

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
    
    return (
        <div>
            <div>
                <p>Você selecionou a atividade de <strong>{kindActivity}</strong>, lembre - se : </p>
                <p>Em partidas oficiais serão duas equipes composta de {quantatyPlayer[kindActivity]} jogadores.</p>
            </div>
            {
                quantatyInput.map((_, index) => {
                    return (
                        <form key={quantatyInput[index] + index} onSubmit={handleInserPLayer}>
                            <input
                                required
                                type="text"
                                onChange={e => setSinglePlayer(e.target.value)}
                                placeholder={`Digite o nome do jogador ${index + 1}`}
                            />
                        </form>
                    )
                })
            }
        <Link to={'/field'} ><button onClick={shuffleArray}>Gera time aleatorio</button></Link>
        </div>
    )
}

export default SelectingPlayers;