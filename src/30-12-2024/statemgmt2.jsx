import * as React from "react";
class StateXYZ extends React.Component{
    state={
        first: false,
        second: 3.14,
        third: "hello",
        fourth: "red",
        fifth: "green",
    };
    constructor(){
        super();
        setTimeout(() => {
            this.setState({
                first: true,
                second: 3.14159,
                third: "world",
                fourth: "blue",
                fifth: "yellow",
            });
        }, 3000);;
    }
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
export default StateXYZ;