import React, { createContext,useState,useEffect } from 'react';
import axios from 'axios'

export default function Lyrics(props) {
    const [songlyrics, setsonglyrics] = useState([]);
    useEffect(() => {
        const songlyrics = async () =>{
            const  song = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=399e7bdc935fe00a60212d0c02620698`)
              setsonglyrics(song.data.message.body.lyrics.lyrics_body);
          }
         return songlyrics()
    }, []);
  //  https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=399e7bdc935fe00a60212d0c02620698
    return (
        <div>
            <h1>lyrics</h1>
            {songlyrics}
        </div>
    )
}
