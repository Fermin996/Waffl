import React, { useState, useRef } from "react";

import styles from "./SubPanel.module.css";
import ViewButton from "../ViewButton/ViewButton";

const SubPanel=(props)=>{


    const [mod, setMod] = useState(null)
    const modInputRef = useRef();
    
    let chDataCont = [...props.checkData]
    let foundIndex = props.checkData.findIndex((item) => item.title === props.currButtonData.title)
    let foundLastIndex = props.checkData.lastIndexOf(props.currButtonData);
   
    function quantHandler(operation){


        if(operation === "add"){
            chDataCont[foundLastIndex].quantity+=1;
            props.wholeCheck[props.checkIndex] = chDataCont;
            props.updateCheck([...props.wholeCheck])
        }else if(operation === "subtract" && chDataCont[foundLastIndex].quantity === 0){
            chDataCont[foundLastIndex].quantity=0
        }else{
            chDataCont[foundLastIndex].quantity--;
            props.wholeCheck[props.checkIndex] = chDataCont;
            props.updateCheck([...props.wholeCheck]);
        }

    }

    function updateSubHandler(isDone){

        props.updateSp(false);
        
        let buttonsCont = [...props.buttonsState];
        buttonsCont[buttonsCont.indexOf(props.currButtonData)].clicked = false;
        props.updateCurrButton(buttonsCont[buttonsCont.indexOf(props.currButtonData)]);
        props.cancelButton(buttonsCont)

        props.cancelButton([...buttonsCont])

        if(isDone === true){
            console.log(props.currButtonData)
            console.log(props.checkData)
            props.cancelButton([...props.initButtons])
            if(props.checkData.find((item) => item.title === props.currButtonData.title 
                && item.id !== props.currButtonData.id)  ){
    
                if(chDataCont[foundLastIndex].mods.length>0){
                    props.setItemStyle(styles.bItemStyle)
                    props.wholeCheck[props.checkIndex] = chDataCont;
                    props.wholeCheck[props.checkIndex][foundLastIndex].clicked=false;
                    props.updateCheck([...props.wholeCheck])
                }else{
                    props.setItemStyle(styles.bItemStyle)
                    chDataCont[foundIndex].quantity += props.currButtonData.quantity
                    chDataCont.pop();

                    props.wholeCheck[props.checkIndex] = chDataCont;
                    props.wholeCheck[props.checkIndex][foundLastIndex].clicked=false;
                    props.updateCheck([...props.wholeCheck])

                }    
                

            }else{
                props.setItemStyle(styles.bItemStyle)
                props.wholeCheck[props.checkIndex] = chDataCont;
                props.wholeCheck[props.checkIndex][foundLastIndex].clicked=false;
                props.updateCheck([...props.wholeCheck])
            }

        }else{
            console.log("no me")
            let dataCont=props.checkData;
            dataCont.pop();

            if(dataCont.length === 0){
                props.wholeCheck[props.checkIndex] = [{title:"-", quantity:0, price:0}];
                props.updateCheck([...props.wholeCheck])
            }else{
                props.setItemStyle(styles.bItemStyle)
                props.wholeCheck[props.checkIndex] = dataCont;
                props.wholeCheck[props.checkIndex][foundLastIndex].clicked=false;
                props.updateCheck([...props.wholeCheck])
            }

        }

    }


    
    let optionsArr = false;
    if(chDataCont[foundLastIndex].subItems){
        optionsArr = [...chDataCont[foundLastIndex].subItems]
    }
    
    let opButtons = null;
    let modInput = null;

    const onSubmitHandler=(e)=>{
        e.preventDefault();

        const enteredVal = modInputRef.current.value
        chDataCont[foundLastIndex].mods.push(enteredVal);
        
        props.wholeCheck[props.checkIndex] = chDataCont;
        props.updateCheck([...props.wholeCheck])
        setMod(null)
    }


    function createMod(){
        
        modInput=(
            <div className={styles.modBox}>
                <form className={styles.modForm} onSubmit={onSubmitHandler}>
                    <input className={styles.textBar} ref={modInputRef} type="text" name="mod" />
                    <div className={styles.modFormBtns}>
                        <p className={styles.modCancel} onClick={()=>setMod(null)}>Cancel</p>
                        <input className={styles.modSubmit} type="submit" value="submit"/>
                    </div>                    
                </form>
            </div>
            
        )

        setMod(modInput)
    }
    
    return(
        <div className={styles.subPanDiv}>
            {opButtons}
            {mod}

            <div className={styles.itemDetails}>
                <div className={styles.quantButton}>
                    <div className={styles.pmDiv} onClick={()=>quantHandler("subtract")}>
                        <p>-</p>
                    </div>
                    <div className={styles.quantDisplay}><p>{props.checkData[foundLastIndex].quantity}</p></div>
                    <div className={styles.pmDiv} onClick={()=>quantHandler("add")}>
                        <p>+</p>
                    </div>
                </div>
                <div className={styles.modDiv}>
                    <p className={styles.modDivP} onClick={()=>createMod()}>Mods</p>
                </div>
                <div className={styles.dcBtns}>
                    <div className={styles.cancelButton}>
                        <p className={styles.cancelButtP} onClick={updateSubHandler} >Cancel</p>
                    </div>
                    <div className={styles.doneButton}>
                        <p className={styles.doneButtP} onClick={()=>updateSubHandler(true)}>Done</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SubPanel;