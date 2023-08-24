import Video from './Video';
import PlayButton from './PlayButton';
import Counter from './Counter';
import useVideos from './hooks/Videos';

function VideoList({editVideo}){

  const videos = useVideos();
    return ( 
        <>
              {
        videos.map(video => <Video
          // yea saare (view , time , title , channel , verified , id ) props hai 
          // aur jab hum list rendering karte hai to har list ki key unique honi chaiye to isliye usse id dedi value
          key={video.id}
          views={video.views}
          time={video.time}
          title={video.title}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo = {editVideo}
        > 

          <PlayButton onPause={() => console.log('pause.. ', video.title)} onPlay={() => console.log('playing.. ', video.title)}>{video.title}</PlayButton>
        </Video>)


      }

      <div style={{ clear: 'both' }}>
        {/*<PlayButton  message="play-msg" onPause={()=>console.log('pause')} onPlay={()=>console.log('playing')}>Play</PlayButton>*/}
        { /*<PlayButton message="pause-msg" >Pause</PlayButton> */}
      </div>
      <Counter></Counter>
        </>
    )
}

export default VideoList;