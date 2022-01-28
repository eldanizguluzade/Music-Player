import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';
import { Button } from '@mui/material';
import ReactDOM from 'react-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Control ({music}:any) {

  // const secondsConvertMinute = (seconds:number) =>
  //     Math.floor(seconds / 60)  + ":" + Math.floor(seconds) %  60;

     const getMusicPath = (item:any) => {
       if(!item?.path) return;
       
       return "musics/" + item.path;
     }


  return(
    <div className="control">

    <AudioPlayer
      autoPlay
      src={getMusicPath(music)}
      progressJumpStep ={2000}
     // other props here
     />
   


    {/* 
     <div className="duration">
       <span>duration</span>
    </div>

    <div className="audio-footer">
      <div className="btn-group">
        <Button variant="contained"> 
          <SkipPrevious /> 
        </Button>


        <Button variant="contained">
          <Pause onClick={()=>null} />
      </Button>

      <Button variant="contained">
          <PlayArrow onClick={()=>null}/> 
      </Button>
    
      <Button variant="contained"> 
        <SkipNext /> 
      </Button>

      </div>
     </div>        */}
    </div>
    )
    
  }

  export default Control;

