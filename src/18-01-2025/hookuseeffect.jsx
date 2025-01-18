import * as React from "react";
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "dharm", age: 30 });
        }, 2000);
    });
}

function ApiSimulation(){
    const [name, setname] = React.useState("loading.....");
    const [age, setage] = React.useState("loading...");
    React.useEffect(() => {
        fetchUserData().then((data) => {
            setname(data.name);
            setage(data.age);
        });
        });
        return (
            <div>
                User:{name}<br/>
                Age:{age}
            </div>
            );
}
export default ApiSimulation;