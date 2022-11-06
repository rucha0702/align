import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import {useState} from 'react';
import Question from './Question';
import styles from './InterviewPrep.module.css';

const InterviewPrep=()=>{
  const [num,setNum] = useState(0);
  const questions = [
  "Introduce yourself.",
  "Why do you think you are the best person for this job?",
  "What makes you a good leader?"
]
  return (
    <div className={`d-flex w-100`}>
        <div className={`${styles.sidebar}`}>
          <Sidebar/>
        </div>
        <div className={`${styles.videoSection} d-flex w-100 p-3`}>
            <div className={`${styles.questionSection} d-flex flex-column h-100 justify-content-center align-items-center`}>
            <div>
             <Question question ={questions[num]} />
            </div>
            <div className='btn text-light mt-3 border-light' onClick={()=>{
              if(num<questions.length-1){setNum((num)=>num+1)};
            }}>
              Next
            </div>
            </div>
            <div className={`${styles.video}`}>
        video
            </div>
        </div>
    </div>
  )
}

export default InterviewPrep