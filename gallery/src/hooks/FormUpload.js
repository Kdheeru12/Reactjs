import React,{useState,useEffect} from 'react'
import {Storage } from '../firebase/config'


export default function FormUpload(file) {
    const[progress,setProgress] = useState(0)
    const[error,setError] = useState(null)
    const[url,setUrl] =useState(null)
    useEffect(() =>{
       const Firebasename = Storage.ref(file.name)
       console.log(Firebasename);
       //adding event listner for putting file to firebase
        Firebasename.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100//for getting percentage
            setProgress(percentage)
        },(err)=>{
            setError(err)
        },async  ()=>{
            const url = await Firebasename.getDownloadURL()
            setUrl(url)
        })
    },[file])  
      return {progress,url,error}
}
