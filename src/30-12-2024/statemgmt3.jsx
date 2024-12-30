import * as React from "react";
class StateMerge extends React.Component {
  state = {
    first: "loading....",
    second: "loading....",
    third: "loading....",
    fourth: "loading....",
    donemsg: "loading complete",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({ first: "done" });
    }, 2000);
    setTimeout(() => {
      this.setState({ second: "done" });
    }, 4000);
    setTimeout(() => {
      this.setState({ third: "done" });
    }, 6000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        first: state.donemsg,
        second: state.donemsg,
        third: state.donemsg,
        fourth: state.donemsg,
      }));
    }, 8000);
  }

  render() {
    return (
      <ul>
        {Object.keys(this.state)
          .filter((key) => key !== "donemsg")
          .map((key) => (
            <li key={key}>
              <strong>{key} : </strong>
              {this.state[key]}
            </li>
          ))}
      </ul>
    );
  }
}
export default StateMerge;


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client';
// import StateMerge from './30-12-2024/statemgmt3';
// // import StateABC from './30-12-2024/statemgmt1';
// // import StateXYZ from './30-12-2024/statemgmt2';
// // import HtmlComponent from './24-12-2024/htmlcomp';
// // import Timetable from './24-12-2024/Timetable';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Timetable/> */}
//     {/* <HtmlComponent/> */}
//     {/* <Component1/> */}
//     {/* <StateXYZ/> */}
//     <StateMerge/>  
//     </StrictMode>,
// )
