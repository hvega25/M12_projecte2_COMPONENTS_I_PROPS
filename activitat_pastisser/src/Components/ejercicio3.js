import React from 'react';
import pastis from '../Images/pastis.jfif';
import '../Styles/style.css';

const Ejercicio3 = () => {
    return (
        <div>
            <Pastisser nom="Jonathan" pasti="pastisser" lorem="Lorem ipsum dolor sit amet" />
            <Pastisser nom="Herson" pasti="Flequer" lorem="consectetur adipscing elit" />
        </div>
    )
}

const Pastisser = (props) => {
    return (
        <div className='pastisser-container'>
            <img src={pastis} alt={props.nom} />
            <div className='text-container'>
                <h2>{props.nom}</h2>
                <h2>{props.pasti}</h2>
                <p>{props.lorem}</p>
            </div>

        </div>
    )
}
export default Ejercicio3;