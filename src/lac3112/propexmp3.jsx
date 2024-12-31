import * as React from "react";
import Mybutton from "./propexmp1";
import MyList from "./propexmp2";
class MyCustComp extends React.Component {
    state = {
        var1: true,
        var2: "btn1",
        var3:["a","b","c","d","e","f"],
    };
    constructor(){
        super();
        setTimeout(()=>{
            this.setState({
                var1:false,
                var2:"btn2",
                var3:["g","h","i","j","k","l"],
    });
        },4000);
    }

render() {
    const{var1,var2,var3} = this.state;
    return (    
        <div>
            <Mybutton prop1={var1} xyz={var2} />
            <MyList itms={var3}/>
        </div>
        );
        }
        }
        export default MyCustComp;



        // import { StrictMode } from 'react'
        // import { createRoot } from 'react-dom/client';
        // import MyCustComp from './lac3112/propexmp3';
        // // import StateMerge from './30-12-2024/statemgmt3';
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
        //     {/* <StateMerge/>   */}
        //     <MyCustComp/>
        //     </StrictMode>,
        // )
        