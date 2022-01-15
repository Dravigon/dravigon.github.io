import React, { PureComponent } from 'react'
import './style.scss'
const Card = (props)=>{
    let constructedClass = "card-" + props.width||"100" + " " ;
    constructedClass += " "+ (props.align || "left") +" ";
    constructedClass += " "+ (props.type||"")  + " ";
    constructedClass += " "+(props.customClass || "");
    return(
        <div className={constructedClass}>
            {props.children}
        </div>
    );
}

export default Card;