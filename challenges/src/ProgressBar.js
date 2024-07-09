const ProgressBar = ({width})=>{
    return (width>100 || width<0)?<p>Please enter a number between 0 and 100</p>:<div className="progress-bar">
    <div className="progress" style={{width: `${width}%`}}>
        {width}%
    </div>
</div>
}

export default ProgressBar