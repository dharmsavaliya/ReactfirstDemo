import * as React from "react";
class StateABC extends React.Component{
    state={
        first: false,
        second: 3.14,
        third: "hello",
        fourth: "red",
        fifth: "green",
    };
    render(){
        const{first,second,third, fourth, fifth}= this.state;
        return(
            <div>
                <button disabled={first}>My button</button>
                <p style={{color:fourth}}>
                    value of float variable is <strong>{second}</strong>
                </p>
                <p style={{color:fifth}}>
                    value of string variable is <strong>{third}</strong>
                </p>
            </div>
        );
    }
}
export default StateABC;

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client';
// // import StateABC from './30-12-2024/statemgmt1';
// import StateXYZ from './30-12-2024/statemgmt2';
// // import HtmlComponent from './24-12-2024/htmlcomp';
// // import Timetable from './24-12-2024/Timetable';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Timetable/> */}
//     {/* <HtmlComponent/> */}
//     {/* <Component1/> */}
//     <StateXYZ/>
//   </StrictMode>,
// )
