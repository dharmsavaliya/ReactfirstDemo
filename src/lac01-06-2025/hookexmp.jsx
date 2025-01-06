import{useState} from "react";
function HookExmp(){
    const [name] = useState("Hello world");
    return <h1>{name}</h1>;
}
export default HookExmp;