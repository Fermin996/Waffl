import React, {useState} from "react";

import styles from './TableCheck.module.css'
import CheckItem from "./CheckItem/CheckItem";

const TableCheck =(props)=>{

    const [checkTab, setCheckTab] = useState(null)
    
    let checkTabs = null;

    let tabBtnStyle = styles.tabBtn

    function checkAddedHandler(){
        props.createArr();

        tabBtnStyle = styles.clickedTabBtn

        checkTabs = (
            <div className={styles.checkTabBtns}>
                {props.wholeCheck.map((check) => {
                    return <div 
                        key={props.wholeCheck.indexOf(check)}
                        className={tabBtnStyle}
                        onClick={()=>props.updateCheckIndex(props.wholeCheck.indexOf(check))}
                        >Check #{props.wholeCheck.indexOf(check)+1}</div>
                })}
            </div>
        )

        setCheckTab(checkTabs)

    }

    function sentClickedHandler(){
        props.wholeCheck[props.checkIndex].forEach((item) => item.sent = true);
        props.updateCheck([...props.wholeCheck])
    }


    return(
        <div className={styles.checkDiv}>
            <div className={styles.checkDivItems}>
                <div className={styles.actualHeader}>
                    <p className={styles.tableP}>Table 32</p>
                    {checkTab}
                    <div className={styles.addCheck} onClick={checkAddedHandler}>+Add Check</div>
                </div>
                <div className={styles.checkHeader}>
                    <div className={styles.itemDiv} >Item</div>
                    <div className={styles.itemDiv2}>Quantity</div>
                    <div className={styles.itemDiv2}>Price</div>
                    <div className={styles.itemDiv3}>Total</div>
                </div>
                {props.checkData.map((data) => {
                    return <CheckItem 
                        key={props.checkData.indexOf(data)}
                        title={data.title}
                        quantity={data.quantity}
                        price={data.price}
                        mods={data.mods}
                        isSent={data.sent}
                        isClicked={data.clicked}
                        checkIndex={props.checkIndex}
                        itemStyle={props.itemStyle}
                        setItemStyle={props.setItemStyle}
                        checkData={props.checkData}
                        updateCheck={props.updateCheck}
                        wholeCheck={props.wholeCheck}
                    />
                })}
            </div>
            

            <div className={styles.checkEdit}>
                <div className={styles.editBtns}>
                    <div className={styles.btn1} onClick={sentClickedHandler}><p>Send</p></div>
                    <div className={styles.btn1} onClick={props.updateSplitIsOpen}><p>Split</p></div>
                    <div className={styles.btn1}><p>Print</p></div>
                    <div className={styles.btn2}><p>Pay</p></div>
                </div>
            </div>
        </div>
    )
}

export default TableCheck;