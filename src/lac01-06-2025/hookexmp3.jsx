import { useState } from "react";

function StateExample3 () {
    const [color,setColor] = useState("green");
    const [isItalic, setItalic]=useState(false);
    const [isBold, setBold]=useState(false);
    const [isUnderline, setUnderline]=useState(false);
    return (
        <div>
            <input type="radio" name="color" onChange={()=>setColor("yellow")}/>
            {"yellow"}
            <br/>
            <input type="radio" name="color" onChange={()=>setColor("blue")}/>
            {"blue"}
            <br/>
            <input type="radio" name="color" onChange={()=>setColor("Red")}/>
            {"Red"}
            <br/>
            <input type="checkbox" name="Style" onChange={()=>setItalic(!isItalic)} />
            {"italic"}
            <br/>
            <input type="checkbox" name="Style" onChange={()=>setBold(!isBold)}/>
            {"bold"}
            <br/>
            <input type="checkbox" name="Style" onChange={()=>setUnderline(!isUnderline)}/>
            {"Underline"}
            <br/>
            <p style={{color: color ,
                fontStyle: isItalic?"italic":"normal",
                fontWeight: isBold?"bold":"normal",
                textDecoration: isUnderline?"underline":"none",
            }}>this is the text content for display</p>
            </div>
    );
}

export default StateExample3;