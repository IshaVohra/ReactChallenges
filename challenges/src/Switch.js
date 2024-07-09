import { useState } from "react"

const Switch = ({checkedProp=false})=>{
    const [checked, setChecked] = useState(checkedProp)
    return <div className="switch-bg" onClick={()=>{setChecked(!checked)}}>
        <div className={`switch-toggle ${checked?'checked': ''}`} >

        </div>
    </div>
}

export default Switch