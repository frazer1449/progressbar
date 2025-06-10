export default function ProgressBar(props){
    return (
        <div className="progress-bar-container">
            <h1 className="progress-title">Progress Bar</h1>
            <div className="progress-track" style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "4px" }}>
                <div
                style={{
                    width: `${props.progress}%`,
                    backgroundColor: `hsl(${props.progress}, 100%, 50%)`,
                    height: "24px",
                    borderRadius: "4px",
                }}
                ></div>
            </div>
            <p className="progress-text">{props.progress}% Complete</p>
        </div>
    )
}