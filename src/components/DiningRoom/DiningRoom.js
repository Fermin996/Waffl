import React from "react";

import { NavLink } from "react-router-dom";
import styles from './DiningRoom.module.css';

const DiningRoom =(props)=>{



    return(
        <div className={styles.dRoomBack}>
            <div className={styles.leftHalfRoom}>
                <div className={styles.dSection1}>
                    <NavLink className={styles.sec1Table} to="/user-view/table" onClick={()=>props.setTable("31")}>31</NavLink>
                    <section>32</section>
                    <section>33</section>
                </div>
                <div className={styles.dSection2}>
                    <section>11</section>
                    <section>12</section>
                    <section>13</section>
                    <section>14</section>
                    <section>15</section>
                </div>
            </div>
            <div className={styles.halfRoom}>
                <div className={styles.dSection3}>
                    <section>21</section>
                    <section>22</section>
                    <section>23</section>
                    <section>24</section>
                </div>
                <div className={styles.barSection}>
                    <div className={styles.barTops}>
                        <section>1</section>
                        <section>2</section>
                        <section>3</section>
                        <section>4</section>
                        <section>5</section>
                        <section>6</section>
                    </div>
                    <section className={styles.barText}>Bar</section>
                </div>
            </div>
        </div>
    )
}

export default DiningRoom;