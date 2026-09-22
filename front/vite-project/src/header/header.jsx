import styles from './header.module.scss'
import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import {im} from '../img/img.js';
import axios from "axios";


function Header(){
    return(
     <>
        <header>
            <div className={styles.div}>
                <div className={styles.logo}>
                    <img src={im.logo} />
                </div>
                <nav className={styles.nav}>
                    <NavLink to={'/page1'} >Home</NavLink>
                    <NavLink to={'/page2'} >News</NavLink>
                    <NavLink to={'/page4'} >Podcasts</NavLink>
                    <NavLink to={'/page5'} >Resources</NavLink>
                </nav> 
                <button><NavLink to={'/page6'} >Contact Us</NavLink></button>
            </div>
        </header>
     </>
    )
}

export default Header