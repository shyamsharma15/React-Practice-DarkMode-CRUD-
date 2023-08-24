import './Video.css'
import ThemeContext from '../context/ThemeContext';
import {useEffect , useContext} from 'react';
import VideoDispatchContext from '../context/VideoDispatchContext';
import useVideoDispatch from './hooks/VideoDispatch';

function Video({ title, channel = "default value",id , views, time, verified , children , editVideo }) {
   let bg = 'dark';
   const theme = useContext(ThemeContext)
   const dispatch = useVideoDispatch();

   

   // useEffect(()=>{
   //    const idx = setInterval(()=>{
   //       console.log('hey this is a video playing ',id)
   //    },3000)

   //    // clean up function of useEffect :- return ke under hee clean up function hai 
   //    return ()=>{
   //       clearInterval(idx);

   //    }

   // },[id])

   {
      return (
         <>
            <div className={`container ${theme}`}>
               <button className="close" onClick={()=>dispatch({type:'DELETE' , payload:id})}>X</button>
               <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
               <div className="pic">
                  <img src={`https://picsum.photos/id/${id}/160/90`} alt=""/>
               </div>
               <div className="title" >{title}</div>
               <div className="channel">{channel}{verified && '✔️' }</div>
               <div className="views">
                  {views} views <span>.</span> {time}
                  

               </div>
               <div>
                  {children}
               </div>
               
            </div>
         </>
      );
   }
}
export default Video; 