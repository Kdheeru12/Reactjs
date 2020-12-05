// import {useState,useEffect} from 'react'
// import {Firestore } from '../firebase/config'
// export default function Usedata(collection) {
//     const [img, setImages] = useState([]);
//     useEffect(() => {
//        const cleanupFunction= Firestore.collection(collection)
//         .orderBy('UploadedTime','desc')
//         .onSnapshot( (snap) =>{
//             let doucment = []
//             snap.forEach( (i) =>{
//                 doucment.push({...i.data(),id:i.id})
//             })
//             setImages(doucment)
//         })
//         return () => {
//             cleanupFunction()
//         };
//     }, [collection]);
//     return img 
// }

import React from 'react'
import {useState,useEffect} from 'react'
import {Firestore } from '../firebase/config'
export const Usedata = (collection) => {
    const [im, setImages] = useState([]);
    useEffect(() => {
        //const cleanupFunction= 
        Firestore.collection(collection)
        .orderBy('UploadedTime','desc')
        .onSnapshot( (snap) =>{
            let doucment = []
            snap.forEach( (i) =>{
                doucment.push({...i.data(),id:i.id})
            })
            setImages(doucment)
        })
        // return () => cleanupFunction()
    }, [collection]);
    return  {im} 
}
