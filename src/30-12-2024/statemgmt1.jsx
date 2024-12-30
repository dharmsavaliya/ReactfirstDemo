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