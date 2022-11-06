import UserDetails from './UserDetails';
import UserBlockchainDetails from './UserBlockchainDetails';
import AllUsers from './AllUsers';
import JobsData from './JobsData';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  UserDetails,
  UserBlockchainDetails,
  AllUsers,
  JobsData
});

export default rootReducer;
