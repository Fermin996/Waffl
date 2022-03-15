import React from "react";

import styles from './ViewButton.module.css';

const ViewButton =(props)=>{

    let buttonStyle= styles.vButtonDiv

    if(props.buttonData.clicked){
        buttonStyle=styles.buttonClicked
    }

    let currentButton = props.onClick

    return(
        <div className={buttonStyle} onClick={currentButton}>
            {props.buttonData.title}
        </div>
    )
}

export default ViewButton;