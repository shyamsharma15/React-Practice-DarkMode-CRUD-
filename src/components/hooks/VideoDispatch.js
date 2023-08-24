import {useContext} from 'react';
import VideoDispatchContext from '../../context/VideoDispatchContext'; 

// hook hamesha function component ke under hee call hote hai yaa custom react hook function ke under call hote hai to isliye hamme apna custom react hook function bnana padega 

function useVideoDispatch(){

    return useContext(VideoDispatchContext);

}


export default useVideoDispatch;