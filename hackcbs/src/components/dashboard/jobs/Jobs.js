import React from 'react';
import styles from './Jobs.module.css';
import Sidebar from '../../sidebar/Sidebar';
import {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { JobsData } from '../../../actions';
import axios from 'axios';

const Jobs=()=>{
    const d = useSelector(state=>state.JobsData.jobsData);
    const [data,setData] = useState(d?d:[{title:"",company:"",experience:""}]);
    let dispatch = useDispatch();
    const x = useSelector(state=>state.JobsData.jobsData);


    const getData = async ()=>{
        try{
            const res = await axios.get('https://gdsc-quiz-6e515-default-rtdb.firebaseio.com/jobs/-NG9ZzcVuNYKAFNswZLD.json')
            if(res)
            {
                console.log("first",res.data);

                const mappedDataArray = [];

                for (const key in res.data) {
                  const mappedData = {
                    ...res.data[key]
                  };
                  mappedDataArray.push(mappedData);
                  // setData()
                }
                // setData((s)=>{
                //   s =mappedDataArray
                // });
                setData(res.data.open);
                dispatch(JobsData(mappedDataArray));
                // console.log(mappedDataArray);

                // setData(res.data);
                // dispatch(JobsData(res.data));
            }
            else{
                console.log("oops");
            }
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
        console.log("ss",data)
    },[])
  return (
    <div className={`d-flex w-100 h-100`}>
        <div className={`${styles.sidebar} h-100`}>
          <Sidebar/>
        </div>
        <div className={`${styles.rightSection} d-flex flex-column m-4 w-100`}>
            <div className={`${styles.header}`}>Header</div>
            <div className={`${styles.jobSection} w-100 d-flex justify-content-between flex-column `}>
                {
                    data.map((item,i)=>{
                        return(
                            <div key={i} className={`${styles.jobCell} d-flex justify-content-between align-items-center p-2 pl-3 py-3`}>
                                <div className={`${styles.jobsLeft} d-flex justify-content-between`}>
                                    <div className={`${styles.title}`}>
                                    <div className={`${styles.small}`}>Title</div>
                                   <div>{item.title}</div>
                                    </div>
                                    <div className={`${styles.company}`}>
                                    <div className={`${styles.small}`}>Company</div>
                                   <div>{item.company}</div>
                                    </div>
                                    <div className={`${styles.experience}`}>
                                    <div className={`${styles.small}`}>Experience</div>
                                   <div>{item.experience} years</div>
                                    </div>
                                    <div className={`${styles.description}`}>
                                    <div className={`${styles.small}`}>Job Description</div>
                                   <div>{item.experience}</div>
                                    </div>
                              </div>
                              <div className={`${styles.apply}`}>
                              <button className={`${styles.applyBtn} px-5 py-2`}>Apply</button>
                            </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default Jobs