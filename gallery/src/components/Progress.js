import React,{useEffect} from 'react'
import useStorage  from '../hooks/FormUpload'
export default function Progress({file,Selected}) {
    const {progress,url,error} = useStorage(file)
    console.log(progress,url,error);

    useEffect(() => {
        if(url){
            Selected(null)
        }
    }, [url,Selected]);
    return (
            <div className='progress-bar' style={{width:progress + '%'}}></div>

    )
}
