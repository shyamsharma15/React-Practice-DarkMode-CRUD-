import './PlayButton.css'
import { useState , useContext } from "react";
import ThemeContext from '../context/ThemeContext';


function PlayButton({message,children,onPlay , onPause}){
    console.log('render playbutton');
    
    const theme = useContext(ThemeContext);

    const[playing , setPlaying] = useState(false);

    function handleClick(e){// yea ekk handler function hai kuch bhi name dedo isko 
        console.log(e); // e:- yea ekk event object hai yaa synthetic event hai jisse event propagate rokte hai 
        e.stopPropagation(); // event propagation ko rokne ki method hai yea 

    if(playing) onPause();
    else onPlay();

    setPlaying(!playing); // yea isliye jisse click karne ke baad agar true hai to flase ho jaaye aur false hai to true ho jaaye

    }

    return(
        <button className={theme} onClick={handleClick}>{children}:{playing ? ' ||' : ' >'}</button>
    )

}

export default PlayButton;