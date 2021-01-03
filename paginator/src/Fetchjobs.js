import React ,{useReducer} from 'react';

function reducer(state,action){
    switch(action.type){
        case 'request':
            return {loading:true,jobs:[]}
        case 'get-data':
            return {...state,loading:false,jobs=action.payload}
        case 'error':
            return {...state,loading:false,error:action.payload.error,jobs:[]}
        default:
             return state
    }
}

const Fetchjobs = () => {
    const [state, dispatch] = useReducer(reducer,{jobs:[],loading:true})
    return (
        <div>
              
        </div>
    );
}

export default Fetchjobs;
