import React from 'react'
import sectionstyles from '../sections/section.module.css';

export default function nav() {
  return (
    <div className={sectionstyles.right}>
        <a className={sectionstyles.active} href='/'>Home</a>
        <a href='/hospitals'>Hospitals</a>
        <a>Language</a>
        <a href='/About'>About us</a>
    </div>
  )
}