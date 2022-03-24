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


            <p className={sectionstyles.text}>
          <b>Thanks to</b><br></br>
            Aman Sahoo<br></br>
            Muskan Dubey<br></br>
            Rohit Jain<br></br>
            Sarita Patel<br></br>
            Manav Jain<br></br>
            Mahima Andani<br></br>
            </p>


      </div>
      
  )
}
