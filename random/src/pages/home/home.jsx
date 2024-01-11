import style from '../home/home.module.css'
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import { ContextActivity } from '../../Context/contextActivit';
import FieldImage from '../../components/fieldImage/FieldImage'


const Home = () => {

    const { setKindActivity } = useContext(ContextActivity)

    return (
        <div className={style.wrapperContainerHome}>
            <h1>Easy Mix Team</h1>
            <div className={style.wrapperContainerHomeOpstions} >
                <div className={style.wrapperOption}>
                    <select className={style.select} onChange={e => setKindActivity(e.target.value)}>
                        <option disabled selected value='Selecionar Opção'>Selecionar Atividade</option>
                        <option value="Futebol de campo">Futebol de campo</option>
                        <option value="Futebol society">Futebol society</option>
                        <option value="Futebol de salão">Futebol de salão</option>
                        <option value={'Volleyball'} >Volleyball</option>
                        <option value={'Basketball'} >BasketBall</option>
                    </select>
                </div>
                <div className={style.containerFields}>
                    <FieldImage/>
                </div>
                <button className={style.btn}><Link className={style.link} to={'/selectPlayer'} >Selecionar</Link></button>
            </div>
        </div>
    )
}

export default Home;