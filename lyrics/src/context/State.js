import React, { createContext,useState,useEffect,useReducer } from 'react';
import axios from 'axios'
import AppReducer from './Dispatcher'
// Create context
export const Context = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
    const [lyrics, setLyrics] = useState([])
    const [heading, setheading] = useState('Top 5 lyrics');
    useEffect(() => {
        const songs = async () =>{
          const  song = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=399e7bdc935fe00a60212d0c02620698`)
            //console.log(song.data.message.body)
            setLyrics(song.data.message.body.track_list)
        }
       return songs()
    }, [])
    const [state, dispatch] = useReducer(AppReducer, lyrics);

    function hello(value){
        dispatch({
            type: 'SEARCH',
            payload:value
        });
    }
    return (<Context.Provider value={{lyrics,heading,hello}}>
        {children}
    </Context.Provider>);
}
