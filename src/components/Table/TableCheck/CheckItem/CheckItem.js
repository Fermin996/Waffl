import React, { useState, useEffect } from "react";

import styles from './CheckItem.module.css';

const CheckItem=(props)=>{


    useEffect(()=>{

        if(props.isClicked){
            props.setItemStyle(styles.itemSelected)
        }

    })

    let currentStyle = props.itemStyle;
    if(props.isClicked !== true){
        currentStyle = styles.bItemStyle
    }


    if(props.isSent){
        props.setItemStyle(styles.alreadySent)
    }

    let modsDisplay = null;
        
    if(props.mods && props.mods.length > 0){
        modsDisplay=(
            props.mods.map((mod)=> {
                return <div key={props.mods.indexOf(mod)} className={styles.modItem}>
                            {mod}
                        </div>
            })
        )
          
    }

    function itemClickedHandler(){
        
        let thisIndex = props.checkData.findIndex((item) => item.title === props.title)
        if(!props.isSent &&  !props.isClicked){
            props.checkData[thisIndex].clicked = true;
            props.updateCheck([...props.wholeCheck])
            props.setItemStyle(styles.itemSelected)
        }else if(props.title === '-'){
            props.setItemStyle(styles.bItemStyle)
        }else if(!props.isSent &&  props.isClicked){
            props.checkData[thisIndex].clicked = false;
            props.setItemStyle(styles.bItemStyle)
        }

    }

    return(
        <div className={currentStyle}>
            <div className={styles.chItmDiv} onClick={()=>itemClickedHandler()}>
                <div className={styles.itmColumn}>{props.title}</div>
                <div className={styles.itmColumn2}>{props.quantity}</div>
                <div className={styles.itmColumn2}>{props.price}</div>
                <div className={styles.itmColumn3}>{props.price*props.quantity}</div>
            </div>
            {modsDisplay}
        </div>
    )
}

export default CheckItem;