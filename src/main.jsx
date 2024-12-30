import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
// import StateABC from './30-12-2024/statemgmt1';
import StateXYZ from './30-12-2024/statemgmt2';
// import HtmlComponent from './24-12-2024/htmlcomp';
// import Timetable from './24-12-2024/Timetable';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Timetable/> */}
    {/* <HtmlComponent/> */}
    {/* <Component1/> */}
    <StateXYZ/>
  </StrictMode>,
)
