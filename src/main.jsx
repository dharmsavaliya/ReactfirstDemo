import { PureComponent, StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import MyCustComp from './lac3112/propexmp3';
import Purefunc1 from './lac3112/purefunc1';
import MyCustButton from './lac3112/purefunc2';
// import StateMerge from './30-12-2024/statemgmt3';
// import StateABC from './30-12-2024/statemgmt1';
// import StateXYZ from './30-12-2024/statemgmt2';
// import HtmlComponent from './24-12-2024/htmlcomp';
// import Timetable from './24-12-2024/Timetable';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Timetable/> */}
    {/* <HtmlComponent/> */}
    {/* <Component1/> */}
    {/* <StateXYZ/> */}
    {/* <StateMerge/>   */}
    {/* <MyCustComp/> */}
    {/* <Purefunc1 var1={true} var2={"hellioo"}/>
    <Purefunc1 var1={false} var2={"how are you"}/> */}
    <MyCustButton var1={true}/>
    <br/>
    <MyCustButton var2={"6CEB"}/>
    <br/>
    <MyCustButton var1={true} var2={"B.tech"}/>
        </StrictMode>,
)
