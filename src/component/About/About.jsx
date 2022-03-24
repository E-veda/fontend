import React from 'react'
import styles from './About.module.css'; 
import sectionstyles from '../sections/section.module.css';

export default function About() {
  return (
      <div className={sectionstyles.basic}>
        <div className={styles.About}>
          <h2 className={sectionstyles.heading}>About Us</h2>
          {/* <h3 className={sectionstyles.subheading}>Find AYSUH Ministry verified hospital near you now!</h3>
          <p>
            Ministry of Ayurveda, Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy (AYUSH). 
          </p> */}
          <p className={sectionstyles.text}>
            E-Veda is an approach to solve AYUSH services availability in India. We are team E-Veda, 3<sup>rd</sup> year B.Tech studends from Oriental Institute of Science and Technology, Bhopal. We propose a solution towards SIH 2022 problem statement DK735 under the theme MedTech / BioTech / HealthTech.
          </p>
          <p className={sectionstyles.text}>
            Opt for natural, sustainable, holistic way of healthcare, opt for AYUSH!
          </p>
        </div>
        <h1>
          <span>Thanks to</span>
          <div className={styles.message}>
            <div className={styles.word1}>Aman Sahoo</div>
            <div className={styles.word2}>Muskan Dubey</div>
            <div className={styles.word3}>Rohit Jain</div>
            <div className={styles.word4}>Sarita Patel</div>
            <div className={styles.word5}>Manav Jain</div>
            <div className={styles.word6}>Mahima Andani (Team Lead)</div>
          </div>
        </h1>
      </div>
      
  )
}
