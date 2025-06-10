import ProgressBar from "./Components/ProgressBar.js"
import React, {useState} from "react"

export default function App(){
    const [progress, setProgress] = useState(0)

    function updateProgress(){
        setProgress((val) => Math.min(100, val + 5))
    }

    return (
        <div className="container">
            <ProgressBar progress={progress}/>
            <button className="progress-btn" onClick={updateProgress}>Click for Progress</button>
        </div>
    )
}