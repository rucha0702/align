const initialState = {
    jobsData: [],
  };
  
  const JobsData = (state = initialState, action) => {
    switch (action.type) {
      case 'JOBS_DATA': {
        const data = action.payload;
  
        return {
          ...state,
  
          jobsData: data,
        };
      }
        
      case 'LOGOUT':
        return {
          ...state,
  
          jobsData: [],
        };
  
      default:
        return state;
    }
  };
  
  export default JobsData;
  