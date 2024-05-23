const VideoLogic = ({video,fn,title}) => {
    return (
       <div className="title">
           <h1>{title}</h1>  
        <div className="video">
        {
            
            (fn.length === 0) ? <div className="text-center text-white w-100 p-5  bg-secondary"><h1>no video avilable</h1></div> :
            
            video.map((data)=>(
                <div className="video_link">
                     
                    {/* <a href={data.link}> */}
                    <div className="thumbnail">
                            <img src={data.Thumbnail} alt="" />
                        </div>
    
                        <div className="details">
                            <div className="icon">
                                <img src={data.Channelicon} alt="" />
                            </div>
                            <div className="title">
                                <div className="head">
                                <p>{data.title}</p>
                                </div>
                                <p>{data.ChannelName}</p>
                                <div className="delete">
                                <p>{data.Views}</p>
                                <button onClick={()=>fn(data.id)}>delete</button>
                                </div>
                            </div>
                        </div>
                    {/* </a> */}
                        
    
                </div>
                    ))
        }
           {/* <button onClick={()=> setView([])} >DeleteAll</button> */}
           </div>
        </div>
     );
}
 
export default VideoLogic;