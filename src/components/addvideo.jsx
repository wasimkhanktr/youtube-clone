import { useRef } from 'react';
import '../styles/addVideo.css'
const Addvideo = () => {
  let Thumbnail = useRef()
  let Channelicon = useRef()
  let title= useRef()
  let ChannelName= useRef()
  let Views= useRef()

  let submitVideo = (e) => {
    e.preventDefault()
    let video = {
        Thumbnail: Thumbnail.current.value,
        Channelicon: Channelicon.current.value,
        title: title.current.value,
        ChannelName: ChannelName.current.value,
        Views: Views.current.value
    }
    if(video.Thumbnail!=="")
    {
        fetch('http://localhost:4000/video', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(video)
    })
    }
}


    return ( 
       <div className="body">
        <div className="form">
         <div className="addVideo">
            <form action="" onSubmit={submitVideo}>
            <label>Thumbnail</label>
            <input type="text" placeholder="enter the Thumbnail" ref={Thumbnail}/>
            <label>Channelicon</label>
            <input type="text" placeholder="enter the Channelicon" ref={Channelicon} />
            <label>Title</label>
            <input type="text" placeholder="enter the Title" ref={title}/>
            <label>ChannelName</label>
            <input type="text" placeholder="enter the ChannelName" ref={ChannelName}/>
            <label>Views</label>
            <input type="text" placeholder="enter the Views" ref={Views}/>
            <button className='btn btn-outline-primary'>AddVideo</button>
            </form>
        </div>
        </div>
       </div>
     );
}
 
export default Addvideo;