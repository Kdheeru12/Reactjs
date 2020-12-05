import React from 'react'
import {Usedata} from '../hooks/Usedata'
export default function images() {
    const {im} = Usedata('images')
    // const a = im.map((i) =>i.ImageLink)
    // console.log(a) 
    return (
        <div className='img-grid'>
            {im.map( (i) =>(
                <div key={i.id} className="img-wrap">
                    <img src={i.ImageLink} alt=""/>
                    
                </div>
            )) }
        </div>
    )
}
