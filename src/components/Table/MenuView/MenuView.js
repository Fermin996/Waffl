import React, { useState, useEffect } from "react";

import styles from './MenuView.module.css';
import ViewButton from './ViewButton/ViewButton';

import SubPanel from "./SubPanel/SubPanel";
//import SplitWindow from "./SplitWindow/SplitWindow";

const MenuView =(props)=>{

    let objs=[
        {
            title: 'Dessert',
            buttonType:"category",
            subItems: [
                {
                    id: null,
                    title: 'coco-flan',
                    price: 9,
                    quantity:1,
                    buttonType:"menu-item",
                    clicked:false,
                    mods:[],
                    sent:false
                },
                {
                    title: 'panna-cotta',
                    price: 8,
                    quantity:1,
                    buttonType:"menu-item",
                    mods:[],
                    clicked:false,
                    sent:false
                },
                {
                    title: 'fried ice cream',
                    price: 9000,
                    quantity:1,
                    buttonType:"menu-item",
                    mods:[],
                    clicked:false,
                    sent:false
                },
            ],
        },
        {
            title: 'Mains',
            buttonType:"category",
            subItems: [
                {
                    title: 'steak',
                    price: 35,
                    quantity:1,
                    buttonType:"menu-item",
                    clicked:false,
                    subItems:[
                        {title:"Med Rare"},
                        {title:"Med"},
                        {title:"Med well"},
                        {title:"Well Done"},
                    ],
                    mods:[],
                    selectedOption:"",
                    sent:false
                },
                {
                    title: 'Salmon',
                    price: 32,
                    quantity:1,
                    buttonType:"menu-item",
                    clicked:false,
                    subItems:[
                        {title:"Med Rare"},
                        {title:"Med"},
                        {title:"Well Done"},
                    ],
                    mods:[],
                    selectedOption:"",
                    sent:false
                },
                {
                    title: 'quarter chicken',
                    price: 25,
                    quantity:1,
                    buttonType:"menu-item",
                    mods:[],
                    clicked:false,
                    sent:false
                },
            ],
        },
        {
            title: 'Apps',
            buttonType:"category",
            subItems: [
                {
                    title: 'Wings',
                    price: 12,
                    quantity:1,
                    buttonType:"menu-item",
                    mods:[],
                    clicked:false,
                    sent:false
                },
                {
                    title: 'brussel sprouts',
                    price: 13,
                    quantity:1,
                    buttonType:"menu-item",
                    mods:[],
                    clicked:false,
                    sent:false
                },
                {
                    title: 'chicken fingers',
                    price: 9,
                    quantity:1,
                    buttonType:"menu-item",
                    mods:[],
                    clicked:false,
                    sent:false
                },
            ],
        },
        {
            title: "Wines",
            buttonType:"category",
            subItems:[
                {
                    title: "red",
                    buttonType:"category",
                    subItems:[
                        {
                            title:"By Glass",
                            buttonType:"category",
                            subItems:[
                                {
                                    title:"Montepulciano D'abruzzio",
                                    price:9,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                },
                                {
                                    title:"Negroamaro",
                                    price:11,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                },
                                {
                                    title:"Brunello",
                                    price:15,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                }
                            ]
                        },
                        {
                            title:"By the Bottle",
                            buttonType:"category",
                            subItems:[
                                {
                                    title:"Montepulciano D'abruzzio BTL",
                                    price:45,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                },
                                {
                                    title:"Negroamaro BTL",
                                    price:60,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                },
                                {
                                    title:"Brunello BTL",
                                    price:120,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "white",
                    buttonType:"category",
                    subItems:[
                        {
                            title:"By Glass",
                            buttonType:"category",
                            subItems:[
                                {
                                    title:"Sauvignon Blancv",
                                    price:9,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                },
                                {
                                    title:"Chardonnay",
                                    price:11,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                },
                                {
                                    title:"pinot grigio",
                                    price:15,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                }
                            ]
                        },
                        {
                            title:"By the Bottle",
                            buttonType:"category",
                            subItems:[
                                {
                                    title:"Sauvignon Blanc BTL",
                                    price:25,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                },
                                {
                                    title:"Chardonnay BTL",
                                    price:51,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                },
                                {
                                    title:"pinot grigio BTL",
                                    price:25,
                                    quantity:1,
                                    buttonType:"menu-item",
                                    clicked:false,
                                    sent:false
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ];

    const [buttons, setButtons] = useState(objs)
    const [subPanel, setSubPanel] = useState(false)
    const [currentButton, setCurrentButton] = useState({})
    const [counter, setCounter] = useState(1);

    // useEffect(()=>{
    //     if(props.itemStyle === styles.itemSelected){
    //         setSubPanel(true)
    //     }
    // },[props.itemStyle])

    let rightPanel = (
        <div className={styles.buttonsDiv}>
                {buttons.map((item) => {
                    return <ViewButton 
                        key={buttons.indexOf(item)} 
                        buttonData={item} 
                        onClick={()=>buttonHandler(buttons.indexOf(item), item)}/>
                })}
        </div>
    )

    // if(props.splitIsOpen){
    //     rightPanel = (
    //         <SplitWindow />
    //     )
    // }

    let currentPanel=null;
    

    function buttonHandler(clickedIndex, itemCheck){
    

        if(itemCheck.buttonType === "category"){
            setButtons(buttons[clickedIndex].subItems)
        }else if(itemCheck.buttonType==="menu-item" && !subPanel){

            if(props.currentArr[0].title==="-"){
                props.currentArr.pop();

                let itemCont = itemCheck;
                itemCont.id=counter;
                //let countCont=counter;

                setCounter(countCont => countCont+1);

                props.currentArr.push(itemCont);

                props.wholeCheck[props.checkIndex] = props.currentArr

                props.updateCheck([...props.wholeCheck]);

            }else{
                let itemCont = itemCheck;
                itemCont.id=counter;
                let countCont=counter;

                setCounter(countCont => countCont+1);

                props.currentArr.push(itemCont)
                props.wholeCheck[props.checkIndex] = props.currentArr
                props.updateCheck([...props.wholeCheck])

            }

            let buttonsCont = [...buttons];
            buttonsCont[clickedIndex].clicked = true;
            setCurrentButton(buttonsCont[clickedIndex])
            setButtons(buttonsCont);

            setSubPanel(true);

        }


    }


    if(subPanel){
        currentPanel= <SubPanel 
            updateSp={setSubPanel} 
            cancelButton={setButtons}
            updateCurrButton={setCurrentButton} 
            buttonsState={buttons}
            currButtonData={currentButton}
            initButtons={objs}
            updateCheck={props.updateCheck}
            checkData={props.wholeCheck[props.checkIndex]}
            wholeCheck={props.wholeCheck}
            checkIndex={props.checkIndex}
            setItemStyle={props.setItemStyle}
            />
    }

    function backHandler(){
        setButtons(objs)
        setSubPanel(false)

        let checkCont = [...props.wholeCheck[props.checkIndex]];


        if(checkCont.length === 1 && subPanel){
            props.updateCheck([{title:"-", quantity:0, price:0}])
        }else if(subPanel){
            checkCont.pop()
            props.updateCheck([...checkCont])
        }
        

    }

    return(
        <div className={styles.menuViewDiv}>
            <div>
            <div className={styles.mViewHead}>
                <div className={styles.backButton}>
                    <p className={styles.backButtonP} onClick={backHandler}>
                        Back
                    </p></div>
                <div className={styles.clock}>
                    <p className={styles.clockTime}>5:15pm</p>
                </div>
                <div className={styles.xButton}>
                    <p className={styles.xButtonP}>x</p>
                </div>
            </div>
            {rightPanel}
            </div>    
            {currentPanel}
        </div>
    )

}

export default MenuView;