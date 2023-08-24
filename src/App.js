import './App.css'
import { useState ,useReducer} from "react";
import VideoList from './components/VideoList';
import AddVideo from './components/AddVideo'
import videoDB from './data/data'
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';
import Counter from './components/Counter';



function App() {

  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState('darkMode');

  // yahan 1st argument(videos)reducer ki state hota hai aur 2nd argument(action) mai actions aate hai jo dispatch mai banaye hai 
  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...videos, { ...action.payload, id: videos.length + 1 }
        ]

      case 'DELETE':
        return videos.filter(video => video.id !== action.payload)

      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id)
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null); // jab update ho jaaye to isko phir null pai kardo jisse agli baar fir agar video update karna ho to 
        return newVideos;

      default:
        return videos;

    }



  }
  // yahan videos state hai dispatch function hai jisme action batainge aur videoReducer ekk reducer function hai aur videoDB initial state hai 
  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  //const [videos, setVideos] = useState(videoDB);

  //const themeContext = useContext(ThemeContext); // jo ThemeContext uper import kiya hai usko use karna ahi mujhe 
  //console.log({themeContext});




  // function addVideos(video) {
  //   //action={type:'ADD',payload:video } // kya action perform karha hai jesse yahan add karna hai aur ky extra information chaiye add karne ke liye usse payload mai rakhte hai . aur iss action ko dispatch mai use lette hai 
  //   dispatch({type:'ADD' , payload:video})
  //   //setVideos([...videos, { ...video, id: videos.length + 1 }]);

  // }

  // function deleteVideo(id){
  //  // setVideos(videos.filter(video=>video.id !== id)); // yahan video iterator chalega aur wo saari videos ko ekk alag jagah copy kardega filter karke jinki id meri delete video ki id se match nhi ho rhi hai (aur jiski match ho gyi id usko wo copy mai nhi add karega matlab hogyi naa video delete )

  //  // reducer ki help se delete karne kaa logic 
  //  dispatch({type:'DELETE' , payload:id})
  //   // console.log(id);
  // } 

  function editVideo(id) {
    setEditableVideo(videos.find(video => video.id === id));
    //console.log(id);
    //setEditableVideo(videos.id)

  }

  // function updateVideo(video){ 
  //  // const index = videos.findIndex(v=>v.id === video.id)  // jo video change karni hai uska index dhoond liya yahan 
  //  // const newVideos = [...videos] // copy isliye pahelle banai kyunki directly state mai changes nhi karte copy mai karte hai changes
  //  // newVideos.splice(index , 1 , video) // index par se 1 (ekk) element hata do aur yea video jod do to wo replace kardi new walli se humne
  //   //setVideos(newVideos); // bas abb iss new walli ko add kardo 


  //   // abb reducer ki help se kesse update karinge

  //   dispatch({type:'UPDATE' , payload: video})

  // }



  return (

    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>


        <div className={`App ${mode}`} onClick={() => console.log('App')}>
          <Counter></Counter>
          <button onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>Mode</button>
          {/* // hum context kaa provider bhi set kar sakte hai jo btata hai kahan se kahan tak hai yea context
       contextKaName.Provider aur value mai hum context ki new value pass karte hai iss context ki  */}


          <AddVideo  editableVideo={editableVideo}></AddVideo>
          <VideoList editVideo={editVideo}></VideoList>
     


    </div>
    </VideoDispatchContext.Provider>
    </VideosContext.Provider>
    </ThemeContext.Provider >


  );
}

export default App;
