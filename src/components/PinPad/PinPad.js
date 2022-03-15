import React, { useState } from "react";

import styles from "./PinPad.module.css";

const PinPad=()=>{

    const [currentNum, setCurrentNum] = useState(null);

    

    function pinDisplayHandler(number){
        
        if(currentNum!==null){
            
            let numCont = [...currentNum];

            numCont.push(number)
            numCont.join('')
            setCurrentNum(numCont)
        }else{
            setCurrentNum(number)
        }

    }

    return(
        <div className={styles.pinBack}>

            <div>{currentNum}</div>

            <h3>Enter Pin</h3>

            <div className={styles.pinBox}>
                <div className={styles.pinRow}>
                    <section onClick={()=>pinDisplayHandler("1")}>
                        <p>
                            1
                        </p>
                    </section>
                    <section onClick={()=>pinDisplayHandler("2")}>
                        <p>
                            2
                        </p>
                    </section>
                    <section onClick={()=>pinDisplayHandler("3")}>
                        <p>
                            3
                        </p>
                    </section>
                </div>
                <div className={styles.pinRow}>
                    <section onClick={()=>pinDisplayHandler("4")}>
                        <p>
                            4
                        </p>
                    </section>
                    <section onClick={()=>pinDisplayHandler("5")}>
                        <p>
                            5
                        </p>
                    </section>
                    <section onClick={()=>pinDisplayHandler("6")}>
                        <p>
                            6
                        </p>
                    </section>
                </div>
                <div className={styles.pinRow}>
                    <section onClick={()=>pinDisplayHandler("7")}>
                        <p>
                            7
                        </p>
                    </section>
                    <section onClick={()=>pinDisplayHandler("8")}>
                        <p>
                            8
                        </p>
                    </section>
                    <section onClick={()=>pinDisplayHandler("9")}>
                        <p>
                            9
                        </p>
                    </section>
                </div>
                <div className={styles.pinRow}>
                    <section className={styles.clockInDiv}>
                        <p>
                            GO
                        </p>
                    </section>
                    <section onClick={()=>pinDisplayHandler("0")}>
                        <p>
                            0
                        </p>
                    </section>
                    <section className={styles.clockInDiv} onClick={()=>setCurrentNum(null)}>
                        <p>
                            Clear
                        </p>
                    </section>
                </div>
            </div>

        </div>
    );

}

export default PinPad;