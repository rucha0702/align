import React from 'react';
import styles from './Courses.module.css';
import Sidebar from '../../sidebar/Sidebar';

const Courses=()=>{
  return (
    <div className={`d-flex w-100`}>
        <div className={`${styles.sidebar}`}>
          <Sidebar/>
        </div>
        <div className={`${styles.rightSection} `}>
            Jobs listed here
        </div>
    </div>
  )
}

export default Courses;