import { useState,useEffect } from 'react';
import '../styles/video.css'
import VideoLogic from './videologic';
const Video = () => {
    
    let [view,setView]=useState([])
    useEffect(()=>{
        let fetchData=async ()=>{
            let responce =await fetch("http://localhost:4000/video")
            var data=await responce.json()
            setView(data)

        }
        fetchData()
    },[setView])

    const Remove = (id) =>{
      setView(view.filter((data)=>id !== data.id))
    }
    
    return (  
        <div className="videoss">
            <VideoLogic video={view} fn={Remove} title={"All video"}/>
            <VideoLogic video={view.filter(y=>y.Views>5)} fn={Remove} title={">5M views"}/>
            <VideoLogic video={view.filter(y=>y.Views<5)} fn={Remove} title={"<5M views"}/>
            <VideoLogic video={view.filter(y=>y.Views===5)} fn={Remove} title={"=5M views"}/>
        </div>
    );
}
 
export default Video;