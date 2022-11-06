import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Home.module.css';

const Home=()=>{
  return (
    <div>
        <div>
         <Link className='m-2' to="/login">Login</Link>
         <Link className='m-2' to="/signup">Sign Up</Link>
        </div>
    </div>
  )
}

export default Home