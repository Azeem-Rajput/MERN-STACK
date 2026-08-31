import { useRef } from "react";


function Video(){
    const videoRef=useRef(null)

    function handleStart(){
        videoRef.current.play();
    }
    
    function handleStop(){
        videoRef.current.pause();
    }

    function handleRestart(){
        videoRef.current.currentTime=0;
    }
    function handleForward(){
        videoRef.current.currentTime+=10;
    }
    function handleReverse(){
        videoRef.current.currentTime-=10;
    }
    

    return(
        <>
        
        <video ref={videoRef} src="video.mp4"></video>
        <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleRestart}>restart</button>
        <button onClick={handleForward}>forward</button>
        <button onClick={handleReverse}>Reverse</button>
        </div>
        </>
    )
}

export default Video;