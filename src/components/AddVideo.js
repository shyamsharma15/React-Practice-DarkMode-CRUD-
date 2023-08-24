import './AddVideo.css'
import {useState , useEffect , useRef} from 'react';
import useVideoDispatch from './hooks/VideoDispatch';

const initialState = {
    time: "5 min ago",
    channel: "Coder Dost",
    verified: true,
    title:'',
    views:'',
}
function AddVideo({editableVideo}) {
    const [video , setVideo] = useState(initialState);
    const dispatch = useVideoDispatch();// yea custom hook ko call karliya yahan 
    const inputRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();
        
        if(editableVideo){
            dispatch({type:'UPDATE' , payload: video})
        }else{
            dispatch({type:'ADD' , payload:video});
        }
       
        setVideo(initialState);
        //console.log(video);

    }

    function handleChange(e){
       // console.log(e.target.name , e.target.value);
        setVideo({...video , 
            [e.target.name]:e.target.value,
        })
        //console.log(video);   

    }

    useEffect(()=>{
        if(editableVideo){ // jab editableVideo mai kuch aaye tabhi chalna faltu mai mat chalna jab ediTable video null ho nhi to erreo aagyega
        setVideo(editableVideo);
        }

        inputRef.current.value= "welcome"; 

    },[editableVideo])

    return (
        <form>
            <input ref={inputRef} type="text" name="title" onChange={handleChange} placeholder='title' value={video.title} />
            <input type="text" name="views" onChange={handleChange} placeholder='views' value={video.views}/>
            <button 
            onClick = {handleSubmit}
           
            >{editableVideo ? 'Edit' :'ADD'} VIDEOS</button>
        </form>
    )

}

export default AddVideo;

