import React ,{useReducer,useEffect} from 'react';
import axios from "axios"
function reducer(state,action){
    switch(action.type){
        case 'request':
            return {loading:true,jobs:[]}
        case 'get-data':
            return {...state,loading:false,jobs:action.payload}
        case 'error':
            return {...state,loading:false,error:action.payload.error,jobs:[]}
        default:
             return state
    }
}

const Fetchjobs = () => {
    const [state, dispatch] = useReducer(reducer,{jobs:[],loading:true})
    const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({type:'request'})
        console.log('hdh');
        axios.get(url,{
            cancelToken:cancelToken.token,
            params:{markdown:true}})
            .then(res =>{
                dispatch({
                    type:'get-data',
                    payload:res.data
                    
                })
                console.log('chh');
            }).catch(e =>{
                if (axios.isCancel(e)) return
                dispatch({
                    type:'error',
                    payload:{error:e}
                })
                console.log('hh');
            })

        return () => {
            cancelToken.cancel()
        }
    }, [])
    return state
}

export default Fetchjobs;
