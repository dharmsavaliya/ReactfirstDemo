import * as React from "react";
class  Component2 extends React.Component {
    render() {
        return (
            <div>
                <h2>Component 2</h2>
            </div>
      );
    }
    }
class Component3 extends React.Component {
    render() {
        return (
            <div>
                <h3>Component 3</h3>
            </div>
            );
    }
}
class Component1 extends React.Component {
    render() {
        return (
            <div>
                <h1>Component 1</h1>
                <h2>hello</h2>
                <Component2 />
                <Component3 />
            </div>
            );
        }
    }
    export default Component1;