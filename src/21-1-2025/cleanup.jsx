import { useState, useEffect } from "react";
import { Promise } from "bluebird";
Promise.config({cancellation:true});
function fetchUser(){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve({id:1, name:"dharm"});
    }, 2000);
});
}
function CancelRequest(){
    const [id, setId] = useState("loading.....");
    const [name, setname] = useState("loading.....");
    useEffect(() => {
        const promise = fetchUser().then((var1) =>{
            setId(var1.id);
            setname(var1.name);
        });
        return () => {
            promise.cancel();
        };
        });
        return(
            <div>
                <h1>id:{id}</h1>
                <h1>name:{name}</h1>
            </div>
        );
        }
        export default CancelRequest;
