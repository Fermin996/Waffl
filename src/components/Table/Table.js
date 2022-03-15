import React, { useState } from "react";

import styles from './Table.module.css';
import TableCheck from './TableCheck/TableCheck';
import MenuView from "./MenuView/MenuView";

const Table=()=>{

    const [check, setCheck] = useState([[{title:"-", quantity:0, price:0}]])
    const [splitCheckOpen, setSplitCheckOpen] = useState(false)
    const [checkIndexState, setCheckIndex] = useState(0)
    const [itemIsClicked, setItemIsClicked] = useState(false)
    const [itemStyle, setItemStyle] = useState(styles.bItemStyle);

    let checkIndex=checkIndexState;
    
    let itemsArr = check[checkIndex]
    let wholeCheck = check



    // let checkMap={
    //      items:itemsArr
    // }

    function createArr(){
        wholeCheck.push([{title:"-", quantity:0, price:0}])
        setCheck([...wholeCheck])
        
    }

    function itemClickedHandler(item, currentCheck){

        if(!itemIsClicked && item.title !== "-"){
            setItemIsClicked([wholeCheck.indexOf(currentCheck), currentCheck.indexOf(item)])
            wholeCheck[wholeCheck.indexOf(currentCheck)][currentCheck.indexOf(item)].clicked=true;
            setCheck([...wholeCheck])
        }else if(wholeCheck[wholeCheck.indexOf(currentCheck)][currentCheck.indexOf(item)].clicked){
            wholeCheck[wholeCheck.indexOf(currentCheck)][currentCheck.indexOf(item)].clicked=false;
            setCheck([...wholeCheck])   
        }

    }

    function checkClickedHandler(clickedCheckIndex){
        if(itemIsClicked){
            wholeCheck[itemIsClicked[0]][itemIsClicked[1]].clicked=false;
            wholeCheck[clickedCheckIndex].push(wholeCheck[itemIsClicked[0]][itemIsClicked[1]])
            wholeCheck[itemIsClicked[0]].splice(itemIsClicked[1], 1)
            setCheck([...wholeCheck])
            setItemIsClicked(false)
        }



    }

    let addCheck=(
        <div className={styles.splitCheck} onClick={createArr}>
            <p>Add Check</p>
        </div>
    )

    if(wholeCheck.length%2===0){
        addCheck=(
            <React.Fragment>
                <div className={styles.splitCheck} onClick={createArr}>
                    <p>Add Check</p>
                </div>
                <div className={styles.splitCheck} onClick={createArr}>
                    <p>Add Check</p>
                </div>
            </React.Fragment>
        )
    }

    let tablePanel=(
        <div className={styles.tableView}>
            <div className={styles.tableTab}>
                <TableCheck 
                    itemIsClicked={itemIsClicked}
                    setItemIsClicked={setItemIsClicked}
                    checkData={itemsArr}
                    wholeCheck={wholeCheck}
                    checkIndex={checkIndex} 
                    updateSplitIsOpen={setSplitCheckOpen} 
                    createArr={createArr}
                    updateCheckIndex={setCheckIndex}
                    updateCheck={setCheck}
                    itemStyle={itemStyle}
                    setItemStyle={setItemStyle}
                    />
            </div>
            <div className={styles.menuItems}>
                <MenuView 
                    currentArr={itemsArr} 
                    updateCheck={setCheck} 
                    wholeCheck={wholeCheck} 
                    splitIsOpen={splitCheckOpen} 
                    checkIndex={checkIndex}
                    setItemStyle={setItemStyle}
                    itemStyle={itemStyle}
                    />
            </div>
        </div>
    )


    if(splitCheckOpen){
        tablePanel=(
            <React.Fragment>
            <div className={styles.splitHeader}>
                <div className={styles.splitHeaderBack} onClick={()=>setSplitCheckOpen(false)}>Back</div>
                <div>Table 25</div>
            </div>    
            <div className={styles.splitChecksDiv}>
                {wholeCheck.map((currentCheck) => {
                   
                    return <div key={wholeCheck.indexOf(currentCheck)} className={styles.splitCheck} onClick={()=>checkClickedHandler(wholeCheck.indexOf(currentCheck))}>
                        {currentCheck.map((item) => {
                            return (
                            <div 
                            key={currentCheck.indexOf(item)}
                            className={wholeCheck[wholeCheck.indexOf(currentCheck)][currentCheck.indexOf(item)].clicked ? styles.splitItemClickedDiv : styles.splitItemDiv} onClick={()=>itemClickedHandler(item, currentCheck)}>
                                <p>{item.title}</p>
                                <p>{item.quantity}</p>
                            </div>
                                )
                        })}
                    </div>
                })}

                {addCheck}
            </div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {tablePanel}
        </React.Fragment>
    )
}

export default Table;