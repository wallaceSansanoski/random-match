import style from '../home/home.module.css'
import volleyball  from '../../images/volleyball.jpg'
import field  from '../../images/campo.jpg'
import quadra from '../../images/futsal.png'
import basketball from '../../images/basketball.jpg'
import camposociety from '../../images/camposociety.jpg'
import { useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import { ContextActivity } from '../../Context/contextActivit';


const Home = () => {

    const soccerImage = useRef()
    const volleyballImage = useRef()
    const quadraSalao = useRef()
    const basket = useRef()
    const society = useRef()
    const { setKindActivity, kindActivity} = useContext(ContextActivity)

    return (
        <div>
            <h1>Random Players</h1>
            <div className={style.wrapperContainerHome}>
                <div className={style.wrapperOption}>
                <h2>Qual atividade voce vai escolher : </h2>
                    <select onChange={e => setKindActivity(e.target.value)}>
                        <optgroup label="Tipo de Futebol">
                            <option  value="Futebol de campo">Futebol de campo</option>
                            <option value="Futebol society">Futebol society</option>
                            <option value="Futebol de salão">Futebol de salão</option>
                        </optgroup>
                        <option value={'Volleyball'} >Volleyball</option>
                        <option value={'Basketball'} >BasketBall</option>
                    </select>
                </div>
                <div className={style.containerFields}>
                    <img ref={soccerImage} src={field} alt=""  style={{display : kindActivity === 'Futebol society' || 'Futebol de salão' || 'Futebol de campo' ? 'block' : 'none'}}/>
                    <img ref={volleyballImage} src={volleyball} alt="" style={{display : kindActivity === 'Volleyball' ? 'block' : 'none'}} />
                    <img ref={quadraSalao} src={quadra} alt="" style={{display : kindActivity === 'Futebol de salão' ? 'block' : 'none'}} />
                    <img ref={basket} src={basketball} alt="" style={{display : kindActivity === 'Basketball' ? 'block' : 'none'}} />
                    <img ref={society} src={camposociety} alt="" style={{display : kindActivity === 'Futebol society' ? 'block' : 'none'}} />
                </div>
                <button><Link to={'/selectPlayer'} >Selecionar</Link></button>
            </div>
        </div>
    )
}

export default Home;