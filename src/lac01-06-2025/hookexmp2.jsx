import { useState } from "react";

function StateExample2() {
    const [name, SetName] = useState("RKU");
    const [age, SetAge] = useState(45);
    return(
        <div>
            <h1>{name}</h1>
            <input 
            type="text"
            value={name}
            onChange={(e) => SetName(e.target.value)}/>
            <h1>{name}</h1>
            <input 
            type="text"
            value={age}
            onChange={(e) => SetAge(e.target.value)}/>
            <h1>{age}</h1>
        </div>
    );
}
export default StateExample2;





// import {  StrictMode } from 'react'
// import { createRoot } from 'react-dom/client';
// import StateExample2 from './lac01-06-2025/hookexmp2';
// import HookExmp from './lac01-06-2025/hookexmp';
// import HookExmp1 from './lac3112/hookexmp1';
// import MyCustComp from './lac3112/propexmp3';
// import Purefunc1 from './lac3112/purefunc1';
// import MyCustButton from './lac3112/purefunc2';
// import StateMerge from './30-12-2024/statemgmt3';
// import StateABC from './30-12-2024/statemgmt1';
// import StateXYZ from './30-12-2024/statemgmt2';
// import HtmlComponent from './24-12-2024/htmlcomp';
// import Timetable from './24-12-2024/Timetable';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Timetable/> */}
//     {/* <HtmlComponent/> */}
//     {/* <Component1/> */}
//     {/* <StateXYZ/> */}
//     {/* <StateMerge/>   */}
//     {/* <MyCustComp/> */}
//     {/* <Purefunc1 var1={true} var2={"hellioo"}/>
//     <Purefunc1 var1={false} var2={"how are you"}/> */}
//     {/* <MyCustButton var1={true}/>
//     <br/>
//     <MyCustButton var2={"6CEB"}/>
//     <br/>
//     <MyCustButton var1={true} var2={"B.tech"}/> */}
//     {/* <HookExmp1/> */}
//     <StateExample2/>
// </StrictMode>,
// )
