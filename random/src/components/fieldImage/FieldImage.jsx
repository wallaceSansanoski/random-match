import { useContext } from "react";
import { ContextActivity } from "../../Context/contextActivit";
import campo from '../../images/campo.jpg'
import basketball from '../../images/basketball.jpg'
import campoSociety from '../../images/camposociety.png'
import futsal from '../../images/futsal.png'
import volleyball from '../../images/volleyball.jpg'
import style  from '../fieldImage/fieldImage.module.css'


const FieldImage = () => {

    const { kindActivity }  = useContext(ContextActivity)

    const fieldInformation = {
        'Futebol de campo': campo,
        'Futebol society': campoSociety,
        "Futebol de salão": futsal,
        'Volleyball': volleyball,
        'Basketball':  basketball,
    }

    return (
        <div className={style.field}>
            <img className={style.fieldImage} src={fieldInformation[kindActivity]} />
        </div>
    )
}

export default FieldImage;