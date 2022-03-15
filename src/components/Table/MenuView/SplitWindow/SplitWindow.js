import React, {useState} from "react";

import styles from './SplitWindow.module.css';

const SplitWindow=()=>{

    const [panelState, setPanelState] = useState()

    let splitPanel =(
        <div className={styles.initPanel}>
            <div className={styles.initPanelBtn} onClick={()=>setPanelState("even")}>Evenly</div>
            <div className={styles.initPanelBtn} onClick={()=>setPanelState("by-item")}>By item</div>
        </div>
    )

    // if(panelState === "even"){
    //     splitPanel=(
    //         <div>EVENLYYYY</div>
    //     )
    // }else if(panelState === "by-item"){

    //     splitPanel=(
    //         <div>BY FUKIN ITEM</div>
    //     )
    // }

    return(
       <React.Fragment>
           {splitPanel}
       </React.Fragment> 
    )
}

export default SplitWindow