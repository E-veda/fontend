import React from 'react';
import styles from './Navbar.module.css'
export default (props) => {
    return <>
        <div className={styles.nav}>
            <div className={styles.left}>
                {/* //logo */}
                <h3>E-VEDA</h3>
            </div>
            <div className={styles.right}>
            <a className={props.current=="about"?styles.active:styles.list} href='/'>Home</a>
                    <a href='/hospital' className={props.current=="hospital"?styles.active:styles.list}>Hospital</a>
                    <a className={styles.list}>Language</a>
                    <a className={props.current=="about"?styles.active:styles.list}>About Us</a>
            
            </div>
        </div>
    </>
}