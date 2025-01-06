import{useState} from "react";
function HookExmp1(){
    const [name] = useState("Hello world");
    return <h1>{name}</h1>;
}
export default HookExmp1;


// import {  StrictMode } from 'react'
// import { createRoot } from 'react-dom/client';
// import HookExmp1 from './lac3112/hookexmp1';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <HookExmp1/>
// </StrictMode>,
// )
