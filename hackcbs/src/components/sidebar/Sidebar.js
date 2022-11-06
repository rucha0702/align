import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar=()=>{
  return (
    <div className={`${styles.sidebar} d-flex flex-column p-5 `}>
    <div className={`${styles.content}`}>
     
        <div className={`${styles.logo} my-4`}></div>
    
     <div>
        
     </div>
     <div className={`py-3 my-1 ${styles.cell} d-flex align-items-center`}>
        <div className={`${styles.logo1}`}></div>
        <div>Interview Practise</div>
     </div>
     <div className={`py-3 my-1 ${styles.cell} d-flex align-items-center`}>
     <div className={`${styles.logo2}`}></div>
        <div>Apply for Jobs</div>
     </div>
     <div className={`py-3 my-1 ${styles.cell} d-flex align-items-center`}>
     <div className={`${styles.logo3}`}></div>
        <div>Resume</div>
     </div>
     <div className={`py-3 my-1 ${styles.cell} d-flex align-items-center`}>
     <div className={`${styles.logo4}`}></div>
        <div>Courses</div>
     </div>
     <div className={`py-3 my-1 ${styles.cell} d-flex align-items-center`}>
     <div className={`${styles.logo5}`}></div>
        <div>Quiz</div>
     </div>
     <div className={`py-3 my-1 ${styles.cell} d-flex align-items-center`}>
     <div className={`${styles.logo6}`}></div>
        <div>Get Pro</div>
     </div>
     <div className={`mt-5 ${styles.userDetails}`}>
        User details
     </div>
    </div>
    </div>
  )
}

export default Sidebar