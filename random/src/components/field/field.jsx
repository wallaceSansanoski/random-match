import style from '../field/field.module.css'
// import image from '../../images/field.jpg'
import Player from '../player/Player'

const Field = () => {

    const positionsSocityField = [
        {
            x: 508,
            y: 401
        },
        {
            x: 512,
            y: 320
        },
        {
            x: 354,
            y: 353
        },
        {
            x: 678,
            y: 353
        },
        {
            x: 512,
            y: 215
        },
        {
            x: 426,
            y: 148
        },
        {
            x: 615,
            y: 148
        }
    ]
    return (
        <div className={style.wrapperField}>
            <div className={style.field}>
                {/* <img className={style.fieldImage} src={} /> */}
            </div>

            {positionsSocityField.map(position => {
                return (
                    <Player key={position.x} prop={position} style={{top : position.x , left : position.y}} />
                )
            })}
        </div>
    )
}

export default Field;